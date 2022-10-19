const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const env = require('dotenv')
const cors = require('cors')

const MentorRoutes = require('./routes/mentor.routes')

env.config()
const app = express()

// config body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

mongoose.set('debug', true)

MentorRoutes(app)

// Get
app.get('/', (req, res) => {
  res.send('Home');
})

app.listen(process.env.PORT, async () => {
  console.log(`Server started on Port ${process.env.PORT} :)`);

  try {
    await mongoose.connect(process.env.PROD_DB_URL)
    console.log("Successfully connected to mongo");
  } catch (error) {
    console.log("Not able to connect mongo", err);
  }
})