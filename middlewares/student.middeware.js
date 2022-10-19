const badRequestRes = {
  succes: false,
  err: "",
  data: {},
  message: "Bad Request"
}

const validateStudentCreateRequest = async (req, res, next) => {
  if(!req.body.name) {
    badRequestRes.err = "Name of student is not present"
    return res.status(404).json(badRequestRes)
  }

  if(!req.body.email) {
    badRequestRes.err = "Email is not present"
    return res.status(404).json(badRequestRes)
  }

  if(!req.body.batch) {
    badRequestRes.err = "Batch is not present"
    return res.status(404).json(badRequestRes)
  }

  next()
}

module.exports = {
  validateStudentCreateRequest
}