const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, defautl: 0 }
})

mongoose.model('users', userSchema)