// 3. Approver screen to approve the User, Hospital, and Select Vaccine for a given time

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../State/User/userAction";
import { saveAppointment } from "../../../State/Appointment/appointmentAction";
import { fetchHospitals } from "../../../State/Hospital/hospitalAction";
import { fetchVaccines } from "../../../State/Vaccine/vaccineAction";
import { useState } from "react";

const Approver = () => {
    const users = useSelector(state => {
        console.log("State: ",state);
        return state.userReducer.Users || [];
    });
    const hospitals = useSelector(state => state.hospitalReducer.Hospitals || []);
    const vaccines = useSelector(state => state.vaccineReducer.Vaccines || []);
    const dispatch = useDispatch();

    //console.log("Approver rendered: ", );

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchHospitals());
        dispatch(fetchVaccines());
    }, []);


    const [userid, setUserId] = useState("");
    const [hospitalid, setHospitalId] = useState("");
    const [vaccineid, setVaccineId] = useState("");
    const [time, setTime] = useState("");

    let handleUser = (evt) => {
        setUserId(evt.target.value);
    }

    let handleHospital = (evt) => {
        setHospitalId(evt.target.value);
    }

    let handleVaccine = (evt) => {
        setVaccineId(evt.target.value);
    }

    let handleTime = (evt) => {
        setTime(evt.target.value);
    }

    let handleAppointment = (evt) => {
        let user;
        let hospital;
        let vaccine;

        for (let i = 0; i < users.length; i++) {
            if (users[i]._id == userid) {
                user = users[i];
                
            }
        }

        for (let i = 0; i < hospitals.length; i++) {
            if (hospitals[i]._id == hospitalid) {
                hospital = hospitals[i];
                
            }
        }

        for (let i = 0; i < vaccines.length; i++) {
            if (vaccines[i]._id == vaccineid) {
                vaccine = vaccines[i];
                
            }
        }

        let newAppointment = {
            user: user,
            hospital: hospital,
            vaccine: vaccine,
            time: time
        }

        dispatch(saveAppointment(newAppointment));
        evt.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleAppointment}>
                <div>
                    <label>User: </label>
                     <select value={userid} onChange={handleUser}>
                        <option value="">Select User</option>
                        {
                            users.map((user) => {
                                return <option value={user._id}>{user.name}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>Hospital: </label>
                    <select onChange={handleHospital}>
                        <option value="">Select Hospital</option>
                        {
                            hospitals.map((hospital) => {
                                return <option key={hospital._id} value={hospital._id}>{hospital.name}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>Vaccine: </label>
                    <select onChange={handleVaccine}>
                        <option value="">Select Vaccine</option>
                        {
                            vaccines.map((vaccine) => {
                                return <option key={vaccine._id} value={vaccine._id}>{vaccine.name}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>Time: </label>
                    <input type="datetime-local" onChange={handleTime} />
                </div>
                <div>
                    <button type="submit">Approve</button>
                </div>
            </form>
        </div>
    )

}

export default Approver;