// User Section/ Pateint Section To (Normal Site)
// 1. Should Allow users to register with all basic details (Name, Age, Profession, Contact, Address, Gender, Any Disease, Medical Certificate, etc)
// 2. Upon Registered User should be able to see a screen with - Hospital Info, Vaccine, (Number of Doses Required), Appointment, Charges To Payment
// 3. Once Charges are paid (just make an entry upon Pay click with confirmation) take user to new screen schedule
// 4. On Schedule screen if Current date less Scheduled Date show all details of schedule for the user, if its more than show successfully vaccinated

import * as actionTypes from "../actionTypes";

export const AddUserToStore = (newuser) => {
    return {
        type: actionTypes.AddUserToStore,
        payload: {newuser}
    }
}

export const SignUp = (user) => {
    return {
        type: actionTypes.SIGNUP,
        payload: {user}
    }
}

export const SignInUser = (user) => {
    return function(dispatch){
        
        window.fetch("http://localhost:9000/user/api/signup", { 
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(fetchUsers())
            dispatch(SignUp(data))
        })
        .catch(err => console.log(err))
}
    }

export const fetchUsers = () => {
    return function(dispatch){
        window.fetch("http://localhost:9000/user/api/getUsers",{
            method: "GET",
            headers: {
                "Accept": "application/json",
            //    "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(AddUserToStore(data))
        })
        .catch(err => console.log(err))
    }
}

export const userPayment = (userId)=>{
    return function(dispatch){
        window.fetch("http://localhost:9000/user/api/payment",{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userId)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(fetchUsers())
        })
        .catch(err => console.log(err))
    }
}
