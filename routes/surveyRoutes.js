const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireLogin')
const mongoose = require('mongoose')
const Mailing = require('../services/Mailing')
// const Mailer = require('../services/Mailer')

const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys/webhooks', (req,res) => {
        console.log(req.body)
        res.send({})
    })
    
    app.post('/api/surveys', requireLogin, requireCredits, async (req,res) => {
        const { title, subject, body, emails } = req.body
        // console.log('title')
        // console.log(title)
        // console.log('subject')
        // console.log(subject)
        // console.log("body")
        // console.log(body)
        // console.log('emails')
        // console.log(emails)

        const survey = new Survey({
            title,
            subject,
            recipients: emails.split(',').map(email => ({email: email.trim()})),
            _user: req.user.id,
            dateSent: Date.now()
        })

        // const mailer = new Mailer(survey, surveyTemplate(survey))
        const mailer = new Mailing(survey, surveyTemplate(survey))

        try {
            mailer.send()
            // await mailer.send();
            // await survey.save();
            console.log("user")
            console.log(req.user.credits)
            // req.user.credits -= 1;
            // const user = await req.user.save();
      
            // res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    })
}