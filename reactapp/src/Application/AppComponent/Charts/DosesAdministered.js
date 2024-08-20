import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, PieChart, Cell } from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../../../State/Appointment/appointmentAction';

const DosesAdministered = () => {
    const appointments = useSelector(state => state.appointmentReducer.Appointments || []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAppointments());
    }, [dispatch]);

    const [dosesAdministered, setDosesAdministered] = useState([]);

    useEffect(() => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dosesCount = [0, 0, 0, 0, 0, 0, 0];

        appointments.forEach(appointment => {
            const date = new Date(appointment.time);
            console.log("GK date: ", date);  
            const dayIndex = date.getDay();
            dosesCount[dayIndex]++;
        });

        const formattedData = days.map((day, index) => ({
            name: day,
            count: dosesCount[index]
        }));

        setDosesAdministered(formattedData);
    }, [appointments]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#00FF00', '#0000FF']; // Define colors for each day of the week

    return (
        <div>
            <h2>Doses Administered</h2>
            <BarChart width={500} height={300} data={dosesAdministered} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            <h2>Doses Administered</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={dosesAdministered}
                    dataKey="count"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {
                        dosesAdministered.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
                    }
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}

export default DosesAdministered;
