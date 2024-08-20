let mongooseObj = require('mongoose');
let SchemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/Vaccine");

    //    name: "",
    //    type: "",
    //    price: 0,
    //    sideEffect: "",
    //    origin: "",
    //    dosesRequired: 0,
    //    otherInfo: ""

let VaccineSchema = new SchemaObj({
    name: String,
    type: String,
    price: Number,
    sideEffect: String,
    origin: String,
    dosesRequired: Number,
    otherInfo: String
},
{
    versionKey: false
});

let VaccineModel = mongooseObj.model("Vaccine", VaccineSchema);
module.exports = VaccineModel;