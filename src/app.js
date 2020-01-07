require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const app = express()
const path = require('path');

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

  const connectDB = require('../config/db')

//Connect database
connectDB();
  
//Init Middleware
app.use(express.json({extended: false}));
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())


app.use(function errorHandler(error, req, res, next) {
  let response   
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
  } else {
   console.error(error)
   response = { message: error.message, error }
  }
    res.status(500).json(response)
  })

  //Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/books', require('./routes/books'))

//Serve static assets in production 
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client','build','index.html')))
}

module.exports = app