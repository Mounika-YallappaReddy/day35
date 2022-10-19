const Student = require('../models/student.model')

const createStudent = async (data) => {
  try {
    const response = await Student.create(data)
    console.log(response)
    return response
  } catch (error) {
    console.log(error);
  }
}

const deleteStudent = async (id) => {
  try {
    const response = await Student.findByIdAndDelete(id)
    if(!response) {
      throw {
        err: "No student found for given id",
        code: 404
      }
    }
  } catch (error) {
    console.log(error);
    throw error
  }
}

const getStudentById = async (id) => {
  const student = await Student.findById(id)
  if(!student) {
    throw {err: "No user found", code: 404}
  }
  return student
}

const fetchStudents = async (filter) => {
  let query = {}
  if(filter.name) {
    query.name = filter.name
  }
  let students = await Student.find(query)
  if(!students) {
    throw {
      err: 'not able to find the queries students',
    }
  }
  return students
}

module.exports = {
  createStudent,
  deleteStudent,
  getStudentById,
  fetchStudents
}