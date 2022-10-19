const mentorService = require('../services/mentor.service')
const { successResponseBody, errorResponseBody } = require('../utils/responsebody')

const createMentor = async (req, res) => {
  try {
    const response = await mentorService.createMentor(req.body)
    successResponseBody.data = response
    successResponseBody.message = "Successfully created mentor"

    return res.status(200).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    return res.status(500).json(errorResponseBody)
  }
}

const deleteMentor = async (req, res) => {
  try {
    const response = await mentorService.deleteMentor(req.params.id)
    successResponseBody.data = response
    successResponseBody.message = "Success, deleted Mentor"

    return res.status(200).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    return res.status(500).json(errorResponseBody)
  }
}

const getMentor = async (req, res) => {
  try {
    const response = await mentorService.getMentorById(req.params.id)
    successResponseBody.data = response
    successResponseBody.message = "Success, Mentor found"

    return res.status(200).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    return res.status(500).json(errorResponseBody)
  }
}

const getMentors = async (req, res) => {
  try {
    const response = await mentorService.fetchMentors(req.query)
    successResponseBody.data = response
    successResponseBody.message = "Successfully fetched all Mentors"

    return res.status(200).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    return res.status(500).json(errorResponseBody)
  }
}

module.exports = {
  createMentor,
  getMentor,
  deleteMentor,
  getMentors
}