// Reporting 
// 1. Show reports on the basis of Age, Gender, Pre-Existing Disease, Medical Practitionar etc
// 2. Bar Chart and Pie Chart Both -> d3 reports module of
// 3. Report to show number of doses administered each day
// 4. Report to Show Percentage of Population Covered

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUsers } from "../../../State/User/userAction";
import { useEffect } from 'react';
import { useState } from 'react';

let GenderReport = () => {
    const users = useSelector(state => state.userReducer.Users || []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const [genderReport, setGenderReport] = useState([]);

    useEffect(() => {
        let genderReport = [];
        let genderGroups = ["Male", "Female", "Others"];
        let genderCount = [0, 0, 0];
        for (let i = 0; i < users.length; i++) {
            let gender = users[i].gender
            if (gender == "Male"){
                genderCount[0]++;
            }
            else if (gender == "Female"){
                genderCount[1]++;
            }
            else{
                genderCount[2]++;
            }
        }

        for (let i = 0; i < genderGroups.length; i++) {
            genderReport.push({ name: genderGroups[i], count: genderCount[i] });
        }

        setGenderReport(genderReport);

    }, [users]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <h2>Gender Report</h2>
            <BarChart width={500} height={300} data={genderReport} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            <h2>Gender Report</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={genderReport}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                >
                    {
                        genderReport.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
    </div>
)



    }

export default GenderReport;