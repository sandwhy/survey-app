const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())
require('dotenv').config()
require('./models/User')
require('./models/Survey')
require('./services/passport')

app.use(cors())
app.use(
    cookieSession({
        name:"NO NAMES",
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.cookiekey] 
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

if (process.env.NODE_ENV === 'production') {
    console.log('its official')
    app.use(express.static('/frontend/build'))

    const path = require('path')
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.mongourl, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log("ready to go")))
    .catch((error) => console.log(error))