// const sendgrid = require('sendgrid')
const Mailgun = require("mailgun.js")
const helper = sendgrid.mail

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super()

        this.sgApi = sendGrid(process.env.sth)
        this.from_email = new helper.Email('no-reply@emaily.com') 
        this.subject = subject
        this.body = new helper.Content('text/html', content)
        this.recipients = this.formatAddress(recipients)

        this.addContent(this.body)
        this.addClickTracking()
        this.addRecipients()
    }

    formAddress(recipients) {
        return recipients.map(({email}) => {
            return new helper.Email(email)
        }) 
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings()
        const clickTracking = new helper.ClickTracking(true,true)

        trackingSettings.setClickTracking(clickTracking)
        this.addTrackingSettings(trackingSettings)
    }

    addRecipients() {
        const personalize = new helper.Personalixation()
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient)
        })
        this.addPersonalization(personalize)
    }

    async send() {
        console.log(sending)
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: 'v3/mail/send',
            body: this.toJSON()
        })

        const response = this.sgApi.API(request)
        return response
    }
}

module.exports = Mailer