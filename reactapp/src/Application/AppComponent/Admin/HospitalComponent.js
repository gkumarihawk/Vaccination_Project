import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHospitals } from "../../../State/Hospital/hospitalAction";

let HospitalComponent = (hospitals) => {
    const dispatch = useDispatch();
    //const hospitals = useSelector(state => state.hospitalReducer.Hospitals || []);

    useEffect(() => {
        dispatch(fetchHospitals());
    }, [dispatch]);

    return (
        <>
        <td>{hospitals.hospital.name}</td>
        <td>{hospitals.hospital.address}</td>
        <td>{hospitals.hospital.type}</td>
        <td>{hospitals.hospital.charges}</td>       
        </>
    )
}

export default HospitalComponent;
