const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireLogin')

const mongoose = require('mongoose')
const Mailing = require('../services/Mailing')

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.get('/api/surveys', async (req,res) => {
        const surveys = await Survey.find({ _user: req.user.id}).select({recipients: false})

        res.send(surveys)
    })

    app.get('/api/surveys/response/:surveyid/:eml/:resp', (req,res) => {
        const {surveyid, eml, resp} = req.params
        Survey.updateOne(
            {
                _id: mongoose.Types.ObjectId(surveyid),
                recipients: {
                    $elemMatch: {_id: mongoose.Types.ObjectId(eml)}
                },
            },
            {   
                $inc: { 'yes': 1 },
                $set: { 'recipients.$.responded': true },
                dateResponded: new Date(),
            }
        ).then((ok) => console.log(ok))
        res.send({ok: 'ok'})
    })
    
    app.post('/api/surveys', requireLogin, requireCredits, async (req,res) => {
        console.log('reqsent')
        const { title, subject, body, emails } = req.body

        const survey = new Survey({
            title,
            subject,
            recipients: emails.split(',').map(email => ({email: email.trim()})),
            _user: req.user.id,
            dateSent: Date.now()
        })

        const mailer = new Mailing(survey, body)

        try {
            await mailer.send()
            console.log('saving')
            try {
                await survey.save()
            } catch (error) {
                console.log('there awas an error')
                console.log(error)
            }
            
            req.user.credits -= 1
            const user = await req.user.save()
      
            res.send(user);
        } catch (err) {
            res.status(422).send(err)
        }
    })
}