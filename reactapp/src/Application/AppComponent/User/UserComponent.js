import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { SignInUser } from "../../../State/User/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { use } from "../../../../node-api/Router/user-route";

const UserComponent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.userReducer.User);


    const name = useRef(null);
    const age = useRef(null);
    const profession = useRef(null);
    const contact = useRef(null);
    const address = useRef(null);
    const gender = useRef(null);
    const disease = useRef(null);
    const medicalCertificate = useRef(null);

    
    useEffect(() => {
        name.current.value = user.name;
        age.current.value = user.age;
        profession.current.value = user.profession;
        contact.current.value = user.contact;
        address.current.value = user.address;
        gender.current.value = user.gender;
        disease.current.value = user.disease;
        medicalCertificate.current.value = user.medicalCertificate;

        return () => {
            //cleanup
        }   
    }, []);

    const onSignUp = (evt) => {
        let user = {
            name: name.current.value,
            age: age.current.value,
            profession: profession.current.value,
            contact: contact.current.value,
            address: address.current.value,
            gender: gender.current.value,
            disease: disease.current.value,
            medicalCertificate: medicalCertificate.current.value
        }

        dispatch(SignInUser(user));

        evt.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSignUp}>
                <div>
                    <label>Name</label>
                    <input type="text" ref={name} />
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" ref={age} />
                </div>
                <div>
                    <label>Profession</label>
                    <input type="text" ref={profession} />
                </div>
                <div>
                    <label>Contact</label>
                    <input type="number" ref={contact} />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" ref={address} />
                </div>
                <div>
                    <label>Gender</label>
                    <input type="text" ref={gender} />
                </div>
                <div>
                    <label>Disease</label>
                    <input type="text" ref={disease} />
                </div>
                <div>
                    <label>Medical Certificate</label>
                    <input type="text" ref={medicalCertificate} />
                </div>

                        {/*Button to add user to db*/}
                <input type="button" value="Submit" onClick={onSignUp} />
                            
                        
                    </form> 

                </div>
    )

}

export default UserComponent;
