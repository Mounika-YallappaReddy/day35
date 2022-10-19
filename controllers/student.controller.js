const studentService = require('../services/student.service')
const { successResponseBody, errorResponseBody } = require('../utils/responsebody')

const createStudent = async (req, res) => {
  try {
    const response = await studentService.createStudent(req.body)
    successResponseBody.data = response
    successResponseBody.message = "Successfully created student"

    return res.status(200).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    return res.status(500).json(errorResponseBody)
  }
}

const deleteStudent = async (req, res) => {
  try {
    const response = await studentService.deleteStudent(req.params.id)
    successResponseBody.data = response
    successResponseBody.message = "Success, deleted Student"

    return res.status(200).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    return res.status(500).json(errorResponseBody)
  }
}

const getStudent = async (req, res) => {
  try {
    const response = await studentService.getStudentById(req.params.id)
    successResponseBody.data = response
    successResponseBody.message = "Success, Student found"

    return res.status(200).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    return res.status(500).json(errorResponseBody)
  }
}

const getStudents = async (req, res) => {
  try {
    const response = await studentService.fetchStudents(req.query)
    successResponseBody.data = response
    successResponseBody.message = "Successfully fetched all Students"

    return res.status(200).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    return res.status(500).json(errorResponseBody)
  }
}

module.exports = {
  createStudent,
  deleteStudent,
  getStudent,
  getStudents
}