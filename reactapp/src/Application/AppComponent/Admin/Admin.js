import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

let Admin = () => {

    let user = useSelector(state => state.userReducer.User || {});
    let dispatch = useDispatch();

    return (
        <>
        
            <div>
                <h2>Admin Panel</h2>
                <ul>
                    <li><NavLink to="/registerHospital">Register Hospital</NavLink></li>
                    <li><NavLink to="/registerVaccine">Register Vaccine</NavLink></li>
                    <li><NavLink to="/hospital">Hospitals</NavLink></li>
                    <li><NavLink to="/appointmentApprover">Approve Appointment</NavLink></li>

                </ul>
            </div>
            

        
        
        
        
        </>
    )
}

export default Admin;