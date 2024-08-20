// 2. List Of Hospitals (Name, Address, Type(Govt/Private), Charges)

import * as actionTypes from "../actionTypes";

export const AddHospitalToStore = (newhospital) => {
    return {
        type: actionTypes.AddHospitalToStore,
        payload: {newhospital}
    }
}

export const saveHospital = (newhospital) => {
    return function(dispatch){
        window.fetch("http://localhost:9000/hospital/api/registerHospital", { 
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newhospital),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(fetchHospitals())
        })
        .catch(err => console.log(err))
    }
}

export const fetchHospitals = () => {
    return function(dispatch){
        window.fetch("http://localhost:9000/hospital/api/getHospitals",{
            method: "GET",
            //headers: {
            //    "Accept": "application/json",
            //    "Content-Type": "application/json"
            //}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(AddHospitalToStore(data))
        })
        .catch(err => console.log(err))
    }
}

export const addCharge = (hospital, id)=>{
    return {
        type: actionTypes.AddCharge,
        payload: {hospital, id}
    }
}

export const hospitalCharges = (hospitalid, charges)=>{
    return function(dispatch){
        window.fetch("http://localhost:9000/hospital/api/charges",{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({hospitalid, charges})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(fetchHospitals())
        })
        .catch(err => console.log(err))
    }
}

