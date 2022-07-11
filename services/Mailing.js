const mailgun = require("mailgun-js")
const template = require('./emailTemplates/surveyTemplate')
const DOMAIN = process.env.mgdomain
const KEY = process.env.mgkey

const mg = mailgun({apiKey: KEY, domain: DOMAIN});

class Mailing {
    constructor(survey, body){
        this.survey = survey
        this.mails = []

        this.survey.recipients.map(({email,_id}) => {
            const data = {
                from: 'sandwhen@gmail.com',
                to: email,
                subject: this.survey.subject,
                html: template(body, this.survey._id, _id)
            }
            this.mails.push(data)
        })
    }

    // send() {
    //     console.log(this.mails)
    // }

    async send() {

        this.mails.map((mail) => {
            mg.messages().send(mail, function (error, body) {
                console.log(body)
                console.log(error)
            });
        })
    }
}

module.exports = Mailing