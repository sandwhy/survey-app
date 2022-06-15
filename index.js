const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')

const app = express()
require('./models/User')
require('dotenv').config()
require('./services/passport')

app.use(cors())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.cookiekey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.mongourl, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log("ready to go")))
    .catch((error) => console.log(error))