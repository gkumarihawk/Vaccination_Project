let express = require('express');
let router = express.Router();
let VaccineModel = require("../DataModels/VaccineDataModel");

router.post("/api/registerVaccine", (req, res)=>{
    let vaccine = req.body
    let newVaccine = new VaccineModel(vaccine)
    newVaccine.save().then((vaccine)=>{
        console.log("vaccine added ", vaccine);
        res.send(vaccine)
    }).catch((err)=>{
        console.log("error while adding vaccine ", err);
        res.send("error while adding vaccine")
    })
})

router.get("/api/getVaccines", (req, res)=>{
    VaccineModel.find()
    .then((vaccines)=>{
        res.send(vaccines)
    })
    .catch((err)=>{
        console.log("error while fetching vaccines ", err);
        res.send("error while fetching vaccines")
    })
})

module.exports = router;

