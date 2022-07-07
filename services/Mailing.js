// const formData = require('form-data')
// const mailgun = require("mailgun-js")
const template = require('./emailTemplates/surveyTemplate')
const DOMAIN = 'sandbox958032a9c14843cdb893c3d23bc4c383.mailgun.org'
const KEY = 'b51fdb91d0b59aa106deca0657a09fef-77985560-034d3818'

class Mailing {
    constructor({subject, recipients}, content){
        // console.log()
        // console.log("`things`")
        // console.log(subject)
        // console.log('recipients')
        // console.log(recipients)
        // console.log('content')
        // console.log(content)
        this.data = recipients
        this.subject = subject
        this.content = content

        this.recipients = []
        recipients.map(({email}) => {
            this.recipients.push(email)
        })
    }

    async send() {
        const mailgun = require("mailgun-js");
        const mg = mailgun({apiKey: KEY, domain: DOMAIN});

        this.recipients.map((email) => {
            const data = {
                from: 'sandwhen@gmail.com',
                to: email,
                subject: 'Hello',
                text:'check',
                html: template(this.subject)
            };
            mg.messages().send(data, function (error, body) {
                console.log(body)
                console.log(error)
            });
        })
    }

    // async send() {
    //     console.log('sending')

    //     // const mailgun = new Mailgun(formData)
    //     // const client = mailgun.client({username: 'ok', key: '77985560-034d3818'})
    //     const client = mailgun({ apiKey: '77985560-034d3818', domain: DOMAIN })

    //     // const messageData = {
    //     //     from: 'sandwhen@gmail.com',
    //     //     to: this.recipients.email,
    //     //     subject: this.subject,
    //     //     html: this.content
    //     // }

    //     const messageData = {
    //         from: 'something here sandwhen@gmail.com',
    //         to: 'sandwhen@gmail.com',
    //         subject: 'this is the subject',
    //         text: 'supoosed to contain some text'
    //     }

    //     client.messages().send(messageData, function(error, body) {
    //         console.log(body)
    //         console.log(error)
    //     })
    // }
}

module.exports = Mailing