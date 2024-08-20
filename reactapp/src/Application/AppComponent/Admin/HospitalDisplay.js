import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddHospitalToStore } from "../../../State/Hospital/hospitalAction";
import HospitalComponent from "./HospitalComponent";
import { fetchHospitals } from "../../../State/Hospital/hospitalAction";

let HospitalDisplay = () => {

    let hospitals = useSelector(state => state.hospitalReducer.Hospitals || []);

    return (
        <>
            <h2>Hospital List</h2>
            { hospitals && hospitals.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>Hospital Name</th>
                            <th>Hospital Address</th>
                            <th>Hospital Type</th>
                            <th>Hospital Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hospitals.map((hospital) => {
                                return (
                                    <tr><HospitalComponent hospital={hospital} key={hospital._id}/></tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                :
                <div>
                    No Hospitals Found
                </div>
            }
        </>
    )
}

export default HospitalDisplay;