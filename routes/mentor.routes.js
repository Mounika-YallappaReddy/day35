const mentorController = require('../controllers/mentor.controller')
const mentorMiddleware = require('../middlewares/mentor.middleware')

const routes = (app) => {
  app.post(
    '/api/v1/mentor',
    mentorMiddleware.validateMentorCreateRequest,
    mentorController.createMentor
  )

  app.get(
    '/api/v1/mentors',
    mentorController.getMentors
  )

  app.get(
    '/api/v1/mentor/:id',
    mentorController.getMentor
  )

  app.delete(
    '/api/v1/mentor/:id',
    mentorController.deleteMentor
  )
}

module.exports = routes