let mongooseObj = require('mongoose');
let SchemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/Vaccine");

let HospitalSchema = new SchemaObj({
    name: String,
    address: String,
    type: String,
    charges: Number
},
{
    versionKey: false
});

let HospitalModel = mongooseObj.model("Hospital", HospitalSchema);
module.exports = HospitalModel;
