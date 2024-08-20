// We Should Have an Admin Section (or Hospital Section) to 
// 1. Register Vaccine (Name, Type, Price, Side Effect, Origin, Doses Required, Other Info (like What Strains Covers))

import * as actionTypes from "../actionTypes";

let INITIAL_STATE = {
    Vaccine: {
        name: "",
        type: "",
        price: 0,
        sideEffect: "",
        origin: "",
        dosesRequired: 0,
        otherInfo: ""
    },
    Vaccines: []
}

let vaccineReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.AddVaccineToStore:
            return {...state, Vaccines: action.payload.newvaccine}
        default:
            return state
    }
}

export default vaccineReducer;