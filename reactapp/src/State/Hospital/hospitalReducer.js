// 2. List Of Hospitals (Name, Address, Type(Govt/Private), Charges)

import * as actionTypes from "../actionTypes";

let INITIAL_STATE = {
    Hospital: {
        name: "",
        address: "",
        type: "",
        charges: 0
    },
    Hospitals: []
}

let hospitalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.AddHospitalToStore:
            return {...state, Hospitals: action.payload.newhospital}
        default:
            return state
    }
}

export default hospitalReducer;