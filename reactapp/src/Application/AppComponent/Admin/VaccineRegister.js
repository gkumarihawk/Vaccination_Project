// We Should Have an Admin Section (or Hospital Section) to 
// 1. Register Vaccine (Name, Type, Price, Side Effect, Origin, Doses Required, Other Info (like What Strains Covers))

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddVaccineToStore, fetchVaccines, saveVaccine } from "../../../State/Vaccine/vaccineAction";
import { useState } from "react";

const VaccineRegister = (props) => {
    const dispatch = useDispatch();
    const vaccines = useSelector(state => state.vaccineReducer.Vaccines|| []);
    const [vaccine, setVaccine] = useState({});

    const name = useRef(null);
    const type = useRef(null);
    const price = useRef(null);
    const sideEffect = useRef(null);
    const origin = useRef(null);
    const dosesRequired = useRef(null);
    const otherInfo = useRef(null);

    useEffect(() => {
        dispatch(fetchVaccines());
    }, [dispatch]);

    const onRegister = (evt) => {
        let newvaccine = {
            name: name.current.value,
            type: type.current.value,
            price: price.current.value,
            sideEffect: sideEffect.current.value,
            origin: origin.current.value,
            dosesRequired: dosesRequired.current.value,
            otherInfo: otherInfo.current.value
        }

        dispatch(saveVaccine(newvaccine));
        evt.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onRegister}>
                <div>
                    <label>Vaccine Name: </label>
                    <input type="text" ref={name} />
                </div>
                <div>
                    <label>Vaccine Type: </label>
                    <input type="text" ref={type} />
                </div>
                <div>
                    <label>Vaccine Price: </label>
                    <input type="text" ref={price} />
                </div>
                <div>
                    <label>Vaccine Side Effect: </label>
                    <input type="text" ref={sideEffect} />
                </div>
                <div>
                    <label>Vaccine Origin: </label>
                    <input type="text" ref={origin} />
                </div>
                <div>
                    <label>Vaccine Doses Required: </label>
                    <input type="text" ref={dosesRequired} />
                </div>
                <div>
                    <label>Vaccine Other Info: </label>
                    <input type="text" ref={otherInfo} />
                </div>
                <div>
                    <button type="submit">Register Vaccine</button>
                </div>
            </form>
            {/*<div>
                <table>
                    <thead>
                        <tr>
                            <th>Vaccine Name</th>
                            <th>Vaccine Type</th>
                            <th>Vaccine Price</th>
                            <th>Vaccine Side Effect</th>
                            <th>Vaccine Origin</th>
                            <th>Vaccine Doses Required</th>
                            <th>Vaccine Other Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vaccines.map((vaccine, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{vaccine.name}</td>
                                        <td>{vaccine.type}</td>
                                        <td>{vaccine.price}</td>
                                        <td>{vaccine.sideEffect}</td>
                                        <td>{vaccine.origin}</td>
                                        <td>{vaccine.dosesRequired}</td>
                                        <td>{vaccine.otherInfo}</td>
                                    </tr>
                                )
                            })
                        }
                            
                        
                    </tbody>
                </table>
                    </div>*/}  
        </div>
    )
}

export default VaccineRegister;