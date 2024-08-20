import React, { Fragment} from "react";

let Appointment = ({appointment}) => {

    const appointmentDate = appointment.time;
    const hospital = appointment.hospital;
    const vaccine = appointment.vaccine;

    const date = new Date(appointmentDate);

    const newDate = new Date();

    const diff = date - newDate;

    // 2. Upon Registered User should be able to see a screen with - Hospital Info, Vaccine, 
    //(Number of Doses Required), Appointment, Charges T

    return (
        <>
            { diff > 0 ?
                <Fragment>
                <div style= {{backgroundColor: "lightgreen", padding: "10px"}}>
                    <table>
                        <thead>
                            <tr>
                                <th>Hospital Name</th>
                                <th>Vaccine Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{hospital.name}</td>
                                <td>{vaccine.name}</td>
                                <td>{vaccine.price}</td>
                                <td>{date.toDateString()}</td>
                                <td>{date.toTimeString()}</td>
                            </tr>
                        </tbody>
                    </table>
                    {/*<h1>Your Appointment is Scheduled</h1>
                    <h2> Hospital: {hospital.name}</h2>
                    <h2> Vaccine: {vaccine.name}</h2>
                    <h2> Appointment Date: {date.toDateString()}</h2>
                    <h2> Number of Doses: {vaccine.dosesRequired}</h2>
                    <h2> Price: {vaccine.price}</h2>*/}

                </div>
                </Fragment>
                :
                <h4>You are Already vaccinated with {vaccine.name} on {date.toDateString()} at {date.toTimeString()}</h4>

            }
        </>
    )

    
}

export default Appointment;
