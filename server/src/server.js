/*eslint-disable */
const 
  express = require('express'),
  morgan = require('morgan'),
  app = express(),
  routes = require('./routes')
  
/* eslint-enable */
const { sequelize } = require('./models')
const config = require('./config/config')

// Server Middlewares
app.use(morgan('combined'))

// routes
routes(app)

// Start the server
sequelize.sync()
  .then(() => {
    app.listen(config.port, () => console.log(`Server started at port ${config.port}`))
  })