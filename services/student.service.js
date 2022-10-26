const Student = require('../models/student.model')
const Mentor = require('../models/mentor.model')

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

const assignMentor = async (req, res) => {
	const { _id } = req.params
	const { selectedMentor } = req.body
	try {
		const mentorTobeAssigned = await Mentor.findById(selectedMentor)
		const student = await Student.findById(_id)
		if (student.isMentorAssigned)
			return res.status(400).send('Already assigned')

		//update student
		await Student.updateOne(
			{ _id },
			{
				assignedMentor: mongoose.Types.ObjectId(selectedMentor),
				isMentorAssigned: true,
			}
		)
		//Update mentor
		const updatedStudents = [
			...mentorTobeAssigned.assignedStudents,
			mongoose.Types.ObjectId(_id),
		]
		await Mentor.updateOne(
			{ _id: selectedMentor },
			{ assignedStudents: updatedStudents }
		)
		res.status(200).send('Assigned successfully')
	} catch (error) {
		res.status(500).json({ error: 'Error assigning Mentor: ' + error })
	}
}

module.exports = {
  createStudent,
  deleteStudent,
  getStudentById,
  fetchStudents,
  assignMentor
}