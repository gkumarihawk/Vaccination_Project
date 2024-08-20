let mongooseObj = require('mongoose');
let SchemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/Vaccine");

let UserSchema = new SchemaObj({
    name: String,
    age: Number,
    profession: String,
    contact: Number,
    address: String,
    gender: String, 
    disease: String,
    medicalCertificate: String
},
{
    versionKey: false
});

let UserModel = mongooseObj.model("User", UserSchema);
module.exports = UserModel;

