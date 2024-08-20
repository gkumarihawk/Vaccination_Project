import React from "react";
import { useDispatch } from "react-redux";
import { saveHospital } from "../../../State/Hospital/hospitalAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";


let HospitalRegister = () => {

    const dispatch = useDispatch();
    const hospital = useSelector(state => state.hospitalReducer.Hospital || []);

        const name = useRef(null);
        const address = useRef(null);
        const type = useRef(null);
        const charges = useRef(null);

    

    useEffect(() => {

        name.current.value = hospital.name;
        address.current.value = hospital.address;
        type.current.value = hospital.type;
        charges.current.value = hospital.charges;   
    }
    , []);

    const onRegister = (evt) => {
        let newHospital = {
            name: name.current.value,
            address: address.current.value,
            type: type.current.value,
            charges: charges.current.value
        }

        dispatch(saveHospital(newHospital));
        evt.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onRegister}>
                <div>
                    <label>Hospital Name: </label>
                    <input type="text" ref={name} />
                </div>
                <div>
                    <label>Hospital Address: </label>
                    <input type="text" ref={address} />
                </div>
                <div>
                    <label>Hospital Type: </label>
                    <input type="text" ref={type} />
                </div>
                <div>
                    <label>Hospital Charges: </label>
                    <input type="text" ref={charges} />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
            
        </div>
    )
}

export default HospitalRegister;
