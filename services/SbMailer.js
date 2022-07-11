var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

class Mailing {
    constructor(survey, body) {
        this.survey = survey
        this.emls = []

        this.mails = []

        this.survey.recipients.map(({email, _id}) => {
            var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

            emailCampaigns = {
                to: [{ email: email }],
                sender: {name:'MERN survey app', email:'sandwhen@gmail.com'},
                subject: this.survey.subject,
                htmlContent: surveyTemplate(body,this.survey._id,_id),
            }
            this.mails.push(emailCampaigns)
        })
    }

    // send(){
    //     console.log("here")
    //     console.log(this.mails[0])

    // }

    async send() {

        var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
        var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

        emailCampaigns = {
            name: 'ok',
            sender: {name:'MERN survey app', email:'sandwhen@gmail.com'},
            to: [{ email: 'robertyeosaki@gmail.com'}],
            htmlContent: 'hello there',
        }
        
        apiInstance.createEmailCampaign(this.mails[0]).then((data) => {
          console.log('API called successfully. Returned data: ' + data);
        }, function(error) {
            console.log
            console.log('error')
          console.error(error);
        });
    }
}

module.exports = Mailing



var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR_API_V3_KEY';
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = {"name": "From name", "email":"marion@treindonesia.com"};
emailCampaigns.type = "classic";

htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',

recipients: {listIds: [2, 7]},

scheduledAt: '2018-01-01 00:00:01'
}

apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
console.log('API called successfully. Returned data: ' + data);
}, function(error) {
console.error(error);
});