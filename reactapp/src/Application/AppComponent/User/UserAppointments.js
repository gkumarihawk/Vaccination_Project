import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../../../State/Appointment/appointmentAction";
import { useEffect } from "react";
import { useState } from "react";
import Appointment from "./Appointment";
import { fetchHospitals } from "../../../State/Hospital/hospitalAction";
import { userPayment } from "../../../State/User/userAction";
import { hospitalCharges } from "../../../State/Hospital/hospitalAction";
import { useNavigate } from "react-router-dom";
//import { fetchUsers } from "../../../State/User/userAction";

let UserAppointments = () => {

    const appointments = useSelector(state => state.appointmentReducer.Appointments || []);
    const hospitals = useSelector(state => state.hospitalReducer.Hospitals || []);
    const user = useSelector(state => state.userReducer.User || []);

    console.log("User: ", user);
    console.log("Appointments: ", appointments);
    console.log("Hospitals: ", hospitals);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAppointments());
        dispatch(fetchHospitals());
        //dispatch(fetchUsers());
    }, []);
    
    const userAppointments = appointments.filter(appointment => {
        //console.log("Appointment User: ", appointment.user.name, "User: ", user.name)
        return appointment.user.name === user.name});

    console.log("User Appointments: ", userAppointments);

    var total=0;
    var hospitalName="";
    var hospitalId="";
    var charges=0;

    for(var i=0;i<userAppointments.length;i++){
        if(i<1){
            
            hospitalName=userAppointments[i].hospital.name;
            hospitalId=userAppointments[i].hospital._id;
            charges=userAppointments[i].hospital.charges;
        }
    }

    for(var i=0;i<userAppointments.length;i++){
        total+=userAppointments[i].vaccine.price;
    }



    const handleClick = (hospId, theCharges, uid ) =>{
        navigate('/payment');
    }

    return (
        <>
            <h2>Your Appointments:</h2>
            { userAppointments && userAppointments.length > 0 ?
                <table>
                    <thead>
                        <tr>
                           {/*<th>Hospital Name</th>
                            <th>Vaccine Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Vaccination Status</th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userAppointments.map((appointment) => {
                                return (
                                    <tr>
                                        <Appointment appointment={appointment} key={appointment._id}/>
                                        {/*<td>{appointment.hospital.name}</td>
                                        <td>{appointment.vaccine.name}</td>
                                        <td>{appointment.vaccine.price}</td>
                                        <td>{appointment.time}</td>
                                <td>{}</td>*/}

                                    </tr>
                                    
                                )
                            })
                        }
                    </tbody>
                </table>
                :
                <div>
                    No Appointments Found
                </div>
            }
            <div>
                <h2>Total Price: {total}</h2>
                <button onClick={() => handleClick(hospitalId, charges, user._id)}>Pay</button>
            </div>
        </>
    )
}

export default UserAppointments;
