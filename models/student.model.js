const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
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
  },
  batch: {
    type: String,
    required: true
  },
  mentor: {
    type: String,
    required: false
  }
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student