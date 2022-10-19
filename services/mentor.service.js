const Mentor = require('../models/mentor.model')

const createMentor = async (data) => {
  try {
    const response = await Mentor.create(data)
    console.log(response)
    return response
  } catch (error) {
    console.log(error);
  }
}

const deleteMentor = async (id) => {
  try {
    const response = await Mentor.findByIdAndDelete(id)
    if(!response) {
      throw {
        err: "No mentor found for given id",
        code: 404
      }
    }
  } catch (error) {
    console.log(error);
    throw error
  }
}

const getMentorById = async (id) => {
  const mentor = await Mentor.findById(id)
  if(!mentor) {
    throw {err: "No user found", code: 404}
  }
  return mentor
}

const fetchMentors = async (filter) => {
  let query = {}
  if(filter.name) {
    query.name = filter.name
  }
  let mentors = await Mentor.find(query)
  if(!mentors) {
    throw {
      err: 'not able to find the queries mentors',
    }
  }
  return mentors
}

module.exports = {
  createMentor,
  deleteMentor,
  getMentorById,
  fetchMentors
}