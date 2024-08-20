let express = require('express');
let router = express.Router();
let AppointmentModel = require("../DataModels/AppointmentDataModel");

router.post("/api/saveAppointment", (req, res)=>{
    let appointment = req.body
    let newAppointment = new AppointmentModel(appointment)
    newAppointment.save().then((appointment)=>{
        console.log("appointment added ", appointment);
        res.send(appointment)
    }).catch((err)=>{
        console.log("error while adding appointment ", err);
        res.send("error while adding appointment")
    })
})

router.get("/api/getAppointment", (req, res)=>{
    AppointmentModel.find()
    .then((appointments)=>{
        res.send(appointments)
    })
    .catch((err)=>{
        console.log("error while fetching appointments ", err);
        res.send("error while fetching appointments")
    })
})

module.exports = router;



