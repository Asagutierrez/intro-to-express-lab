// import modules
import express from 'express'
import { foods } from './data/foods-data.js'
// create Exspress app
const app = express()

//configure the app (app.set)
app.set('view engine', 'ejs')

//mount the Middleware (app.use)


// mount routes
app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/foods', function(req, res) {
  res.render('foods/index', {
    foods: foods
  })
})
// tell the app to listen on prot 3000
app.listen(3000, function() {
  console.log('listening on port 3000')
})