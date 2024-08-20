let mongooseObj = require('mongoose');
let SchemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/Vaccine");

let VaccineSchema = new SchemaObj({
    user: Object,
    hospital: Object,
    vaccine: Object,
    time: String,
},

{
    versionKey: false
});

let VaccineModel = mongooseObj.model("Appointment", VaccineSchema);
module.exports = VaccineModel;