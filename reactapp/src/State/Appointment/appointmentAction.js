// 3. Approver screen to approve the User, Hospital, and Select Vaccine for a given time

import * as actionTypes from "../actionTypes";

export const AddAppointmentToStore = (Appointments) => {
    return {
        type: actionTypes.AddAppointmentToStore,
        payload: {Appointments}
    }
}

export const saveAppointment = (Appointment) => {
    return function(dispatch){
        window.fetch("http://localhost:9000/appointment/api/saveAppointment", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Appointment),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(fetchAppointments())
        })
        .catch(err => console.log(err))
    }
}

export const fetchAppointments = () => {
    return function(dispatch){
        window.fetch("http://localhost:9000/appointment/api/getAppointment", {
            method: "GET",
            //headers: {
            //    "Accept": "application/json",
            //    "Content-Type": "application/json"
            //}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(AddAppointmentToStore(data))
        })
        .catch(err => console.log(err))
    }
}