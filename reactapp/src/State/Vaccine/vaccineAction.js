// We Should Have an Admin Section (or Hospital Section) to 
// 1. Register Vaccine (Name, Type, Price, Side Effect, Origin, Doses Required, Other Info (like What Strains Covers))

import * as actionTypes from "../actionTypes";

export const AddVaccineToStore = (newvaccine) => {
    return {
        type: actionTypes.AddVaccineToStore,
        payload: {newvaccine}
    }
}

export const saveVaccine = (newvaccine) => {
    return function(dispatch){
        window.fetch("http://localhost:9000/vaccine/api/registerVaccine", { 
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newvaccine),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(fetchVaccines())
        })
        .catch(err => console.log(err))
    }
}

export const fetchVaccines = () => {
    return function(dispatch){
        window.fetch("http://localhost:9000/vaccine/api/getVaccines",{
            method: "GET",
            //headers: {
            //    "Accept": "application/json",
            //    "Content-Type": "application/json"
            //}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(AddVaccineToStore(data))
        })
        .catch(err => console.log(err))
    }
}

