// 1. Show reports on the basis of Age, Gender, Pre-Existing Disease, Medical Practitionar etc
// 2. Bar Chart and Pie Chart Both -> d3 reports module of

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUsers } from "../../../State/User/userAction";
import { useEffect } from 'react';
import { useState } from 'react';

let MedicalCert = () => {
    const users = useSelector(state => state.userReducer.Users || []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const [medicalCert, setMedicalCert] = useState([]);
    const [medicalCertCount, setMedicalCertCount] = useState(0);

    useEffect(() => {
        let medicalCert = [];
        let medicalCertGroups = ["Yes", "No"];
        let medicalCertCount = [0, 0];
        for (let i = 0; i < users.length; i++) {
            let medicalCert = users[i].medicalCertificate
            if (medicalCert !== ""){
                medicalCertCount[0]++;
            }
            else{
                medicalCertCount[1]++;
            }
        }

        for (let i = 0; i < medicalCertGroups.length; i++) {
            medicalCert.push({ name: medicalCertGroups[i], count: medicalCertCount[i] });
        }

        setMedicalCert(medicalCert);
        setMedicalCertCount(medicalCertCount[0]);

    }, [users]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <h2>Medical Certificate Report</h2>
            <BarChart width={500} height={300} data={medicalCert} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>





            <h2>Medical Certificate Report</h2>
            <PieChart width={400} height={400}>
                <Pie data={medicalCert} dataKey="count" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
                    {
                        medicalCert.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default MedicalCert;
