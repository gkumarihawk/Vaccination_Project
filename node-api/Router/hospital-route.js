let express = require('express');
let router = express.Router();
let HospitalModel = require("../DataModels/HospitalDataModel");

router.post("/api/registerHospital", (req, res)=>{
    let hospital = req.body
    let newHospital = new HospitalModel(hospital)
    newHospital.save().then((hospital)=>{
        console.log("hospital added ", hospital);
        res.send(hospital)
    }).catch((err)=>{
        console.log("error while adding hospital ", err);
        res.send("error while adding hospital")
    })
})

router.get("/api/getHospitals", (req, res)=>{
    HospitalModel.find()
    .then((hospitals)=>{
        res.send(hospitals)
    })
    .catch((err)=>{
        console.log("error while fetching hospitals ", err);
        res.send("error while fetching hospitals")
    })
})

module.exports = router;

