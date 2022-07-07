const mongoose = require('mongoose')
const { Schema } = mongoose
const recipientSchema = require('./Recipient')

const surveySchema = new Schema ({
    title:String,
    subject:String,
    body:String,
    recipients: [recipientSchema],
    yes: {type: Number, defautl: 0},
    no: {type: Number, defautl: 0},
    _user: { type:Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
})

mongoose.model('surveys', surveySchema)