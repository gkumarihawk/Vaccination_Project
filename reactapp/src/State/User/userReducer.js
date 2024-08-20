// User Section/ Pateint Section To (Normal Site)
// 1. Should Allow users to register with all basic details (Name, Age, Profession, Contact, Address, Gender, Any Disease, Medical Certificate, etc)
// 2. Upon Registered User should be able to see a screen with - Hospital Info, Vaccine, (Number of Doses Required), Appointment, Charges To Payment
// 3. Once Charges are paid (just make an entry upon Pay click with confirmation) take user to new screen schedule
// 4. On Schedule screen if Current date less Scheduled Date show all details of schedule for the user, if its more than show successfully vaccinated


import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
    User: {
        name: "",
        age: 0,
        profession: "",
        contact: 0,
        address: "",
        gender: "",
        disease: "",
        medicalCertificate: ""
    },
    Users: []

    }

let userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.AddUserToStore:
            //...state : {User, Product ...etc}
            //returning all other states as it is but updating User using payload
            //console.log("Inside AddUserToStore", action.payload.Users)
            return {...state, Users : action.payload.newuser}
        case actionTypes.SIGNUP:
            return {...state, User : action.payload.user}
        default:
            return state
    }
}

export default userReducer;