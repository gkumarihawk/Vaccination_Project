//create routes / api's for user singin-up
let express = require("express");
let userRoute = express.Router();
const userDataModel = require("../DataModels/UserDataModel");

//localhost:9000/user/api/signinup
userRoute.post("/api/signup", (req, res)=>{
    let user = req.body //this will be sent as post request from userAction
    console.log(user)

    userDataModel.findOne({name:req.body.name}).then((existingUser)=>{
        if(existingUser) {
            console.log("sigin in success ", existingUser);
            res.send(existingUser)
        } else { //user is not present go for user creation
            //use schema to create new user object
            let newUser = new userDataModel(user)//req.body
            newUser.save().then((newUser)=>{//will get _id once document is created
                console.log("successful signup ", newUser);
                res.send(newUser)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err while login ", err);
        res.send("Error while Login - existing user")
    })
})

userRoute.get("/api/getUsers",(req, res)=>{
    userDataModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})

module.exports = userRoute;