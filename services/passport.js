const passport = require('passport')
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.use(new GoogleStrategy({
    clientID: process.env.gglclientid,
    clientSecret: process.env.gglclientsecret,
    callbackURL: "/auth/google/callback"
    }, 
    async (accesToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })

        if (existingUser){
            return done(null, existingUser)
        } 

        const user = await new User({ googleId: profile.id, credits: 0 }).save()
        done(null, user)
    })
)

passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id)
    done(null,user)
})

passport.serializeUser((user, done) => {
    done(null, user.id)
})