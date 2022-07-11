const mongoose = require('mongoose')
const { Schema } = mongoose

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false },
    response: { type: String, default: ''},
    dateResponded: {type: Number , default: false}
})

module.exports = recipientSchema