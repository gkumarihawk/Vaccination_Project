console.log("Creating API using express server")

const express = require('express') //importing express package and use top level express method
const app = express() //using express function we initialize express application

const cors = require("cors");

const userApp = express() //created to load the request for user/frontend work
const userRoutes = require("./Router/user-route")

const vaccineApp = express() //created to load the request for user/frontend work
const vaccineRoutes = require("./Router/vaccine-route")

const HospitalApp = express() //created to load the request for user/frontend work
const HospitalRoutes = require("./Router/hospital-route")

const AppointmentApp = express() //created to load the request for user/frontend work
const AppointmentRoutes = require("./Router/appointment-route")


app.use(cors()) //enabling cross origin resource sharing at root level
//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

app.use('/user', userApp)
userApp.use('/',userRoutes)

app.use('/vaccine', vaccineApp)
vaccineApp.use('/',vaccineRoutes)

app.use('/hospital', HospitalApp)
HospitalApp.use('/',HospitalRoutes)

app.use('/appointment', AppointmentApp)
AppointmentApp.use('/',AppointmentRoutes)




//default or wild card operator to serve request for any request

app.listen(9000)

console.log("API is ruuning at http://localhost:9000")