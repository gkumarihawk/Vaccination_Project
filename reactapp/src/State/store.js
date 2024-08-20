import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./User/userReducer";
import vaccineReducer from "./Vaccine/vaccineReducer";
import hospitalReducer from "./Hospital/hospitalReducer";
import appointmentReducer from "./Appointment/appointmentReducer";

const rootReducer = combineReducers({
     userReducer, vaccineReducer, hospitalReducer, appointmentReducer
})

export default configureStore (
    {reducer: rootReducer},
    {},
)