// 3. Approver screen to approve the User, Hospital, and Select Vaccine for a given time

import * as actionTypes from "../actionTypes";

let INITIAL_STATE = {
    Appointment: {
        user: "",
        hospital: "",
        vaccine: "",
        time: ""
    },
    Appointments: []
}

let appointmentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.AddAppointmentToStore:
            return {...state, Appointments: action.payload.Appointments}
        default:
            return state
    }
}

export default appointmentReducer;