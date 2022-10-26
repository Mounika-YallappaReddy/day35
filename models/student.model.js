const mongoose = require('mongoose')
const { Schema } = mongoose

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
  isMentorAssigned: {
    type: Boolean,
    default: false,
  },
  assignedMentor: {
    type: Schema.Types.ObjectId,
    ref: 'Mentor',
  },
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student