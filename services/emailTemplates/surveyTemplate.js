const sitetosend = "https://lccltunnl.loca.lt"
module.exports = (body,sid,eml) => {
    
    return  `
        <html>
        <body>
            <div style="text-align: center;">
            <h3>I'd like your input!</h3>
            <p>Please answer the following question:</p>
            <p>${body}</p>
            <div>
                <a href=${sitetosend}/api/survey/response/${sid}/${eml}/Yes>Yes</a>
            </div>
            <div>
            <a href=${sitetosend}//api/survey/response/${sid}/${eml}/No>No</a>

            </div> 
            </div>
        </body>
        </html>
    `
}