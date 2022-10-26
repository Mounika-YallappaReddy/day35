const studentController = require('../controllers/student.controller')
const studentMiddleware = require('../middlewares/mentor.middleware')

const routes = (app) => {
  app.post(
    '/api/v1/student',
    studentMiddleware.validateMentorCreateRequest,
    studentController.createStudent
  )

  app.post(
    '/api/v1/student/:_id',
    studentMiddleware.validateMentorCreateRequest,
    studentController.createStudent
  )

  app.get(
    '/api/v1/students',
    studentController.getStudents
  )

  app.get(
    '/api/v1/student/:id',
    studentController.getStudent
  )

  app.delete(
    '/api/v1/student/:id',
    studentController.deleteStudent
  )
}

module.exports = routes