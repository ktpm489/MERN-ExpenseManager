// server/server.js
var dotenv = require('dotenv')
var express  = require('express')
var router = require('./routes/routes.js')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
app.set('view engine' , 'ejs')
app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, '../client'))
app.use(express.static(path.join(__dirname, '../client')))
// use mongoose
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended : false}))
// mongodb://<dbuser>:<dbpassword>@ds237379.mlab.com:37379/db101
dotenv.config()
// console.log('AAA',process.env.MONGOLAB_URI)
mongoose.connect(process.env.MONGOLAB_URI)
app.use('/', router)
module.exports = app