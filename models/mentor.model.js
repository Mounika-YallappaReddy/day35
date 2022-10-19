const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    reqired: true,
    minLength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email'],
    lowercase: true,
    trim: true
  }
})

const Mentor = mongoose.model('Mentor', mentorSchema)
module.exports = Mentor