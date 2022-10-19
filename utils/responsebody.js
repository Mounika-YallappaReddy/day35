const errorResponseBody = {
  err: {},
  data: {},
  message: 'Something went wrong',
  success: false
}

const successResponseBody = {
  err: {},
  data: {},
  message: 'Successfully processed request',
  success: true
}

module.exports = {
  successResponseBody,
  errorResponseBody
}