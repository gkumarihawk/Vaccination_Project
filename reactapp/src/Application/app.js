import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

import HeaderComponent from "./Common/HeaderComponent";
//import Footer from "./Common/footerComponent"
import User from "./AppComponent/User/UserComponent";
import RegisterVaccine from "./AppComponent/Admin/VaccineRegister";
import RegisterHospital from "./AppComponent/Admin/HospitalRegister";
import Approver from "./AppComponent/Admin/Approver";
//import Approver from "./AppComponent/Admin/Approver";
import Admin from "./AppComponent/Admin/Admin";
import HospitalDisplay from "./AppComponent/Admin/HospitalDisplay";
import UserAppointments from "./AppComponent/User/UserAppointments";
import Payment from "./AppComponent/User/PaymentComponent";
import AgeReport from "./AppComponent/Charts/AgeReport";
import GenderReport from "./AppComponent/Charts/GenderReport";
import MedicalCert from "./AppComponent/Charts/MedicalCert";
import Disease from "./AppComponent/Charts/Disease";
import DosesAdministered from "./AppComponent/Charts/DosesAdministered";
import PopulationCovered from "./AppComponent/Charts/PopulationCovered";






//class component

export default class ApplicationComponent extends Component {

    constructor(props){ //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components

        this.state = { //state is tightely coupled with react renderer and reads the change to recreate virtual dom
            name : "Khan Tran",
            header : "10,001+ employees · UI Specialist"
        }
    }

    //get data from child component using callback function
    getChildData = (data)=>{
        //alert(data)

        this.setState({
            name : data
        })
    }

    //this method returns virtual dom on every change of state using this.setState
    render(){ //life cycle method of React.Component base class, generated virtual dom on state change
        return(
            <Router>
                <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData}/>
                <Routes>
                    <Route path="/user" element={<User/>} />
                    <Route path="/registerVaccine" element={<RegisterVaccine/>} />
                    <Route path="/registerHospital" element={<RegisterHospital/>} />
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/hospital" element={<HospitalDisplay/>} />
                    <Route path="/appointmentApprover" element={<Approver/>} />
                    <Route path="*" element={<Navigate to="/user"/>} />
                    <Route path="/userAppointments" element={<UserAppointments/>} />
                    <Route path="/payment" element={<Payment/>} />
                    <Route path="/ageReport" element={<AgeReport/>} />
                    <Route path="/genderReport" element={<GenderReport/>} />
                    <Route path="/medicalCert" element={<MedicalCert/>} />
                    <Route path="/disease" element={<Disease/>} />
                    <Route path="/dosesAdministered" element={<DosesAdministered/>} />
                    <Route path="/populationCovered" element={<PopulationCovered/>} />
                    

                    
                </Routes>
            </Router>
        )
    }
}


