const passport = require('passport')
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy({
    clientID: process.env.gglclientid,
    clientSecret: process.env.gglclientsecret,
    callbackURL: "/auth/google/callback"
    }, 
    async (accesToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })

        if (existingUser){
            console.log('done one')
            return done(null, existingUser)
        } 

        const user = await new User({ googleId: profile.id }).save()
        done(null, user)

        console.log('done')
    })
)