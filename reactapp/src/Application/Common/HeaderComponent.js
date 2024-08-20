import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { SignInUser } from "../../State/User/userAction";
//import NotificationComponent from "../AppComponent/Notification/NotificationComponent";



let HeaderComponent = (props)=>{
    console.log("Rendering the header component");
    //debugger
    let userName = props.user && props.user.name ? props.user.name : "";

    let nav = useNavigate();

    let logOut = (e) => {
        e.preventDefault();
        props.dispatch(SignInUser(null));
        nav("/user");
    }
    //<Route path="/userAppointments" element={<UserAppointments/>} />
    return(
        <div className="col-md-12">
               
            <div>
                Hi <b>{userName +", "}</b> Welcome to SynergisticIT Vaccination Application!!!
                <br/> 
                {userName == "" ?<b> Please Login or SignUp to see other features</b>:""}
                
            </div>
            
                <Fragment>
                    <NavLink to="/user" className="button" activeclassname="success">Login </NavLink>
                    <NavLink to="/admin" className="button" activeclassname="success">Admin </NavLink>
                    <NavLink to="/Payment" className="button" activeclassname="success">Payment </NavLink>
                    <NavLink to="/userAppointments" className="button" activeclassname="success">Appointments </NavLink>
                    <NavLink to="/ageReport" className="button" activeclassname="success">Age Report </NavLink>
                    <NavLink to="/genderReport" className="button" activeclassname="success">Gender Report </NavLink>
                    <NavLink to="/medicalCert" className="button" activeclassname="success">Medical Cert </NavLink>
                    <NavLink to="/disease" className="button" activeclassname="success">Disease </NavLink>
                    <NavLink to="/dosesAdministered" className="button" activeclassname="success">Doses Administered </NavLink>
                    <NavLink to="/populationCovered" className="button" activeclassname="success">Population Covered </NavLink>
                    

                    
                </Fragment>
            
        </div>
    )
}

//when we want component to become subscriber must implement - mapStoreToProps
let mapStateToProps = (state)=>{ //state - store object from configure store in store.js
    return { //define the props that we need to read from store
        user : state.userReducer.User //now props.user - can be used in component to read user Initial_state
    }
}

//when we need to make our component a publisher must implement this
//let mapDispatchToProps;


export default connect(mapStateToProps, null)(HeaderComponent);

            