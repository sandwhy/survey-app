module.exports = (survey) => {
    return  `
        <html>
        <body>
            <div style="text-align: center;">
            <h3>I'd like your input!</h3>
            <p>Please answer the following question:</p>
            <p>${survey.body}</p>
            <div>
                <a href="https://5948-123-253-233-157.ap.ngrok.io/api/surveys/webhooks">Yes</a>
            </div>
            <div>
                <a href="https://5948-123-253-233-157.ap.ngrok.io/api/surveys/webhooks">No</a>
            </div>
            </div>
        </body>
        </html>
    `
}