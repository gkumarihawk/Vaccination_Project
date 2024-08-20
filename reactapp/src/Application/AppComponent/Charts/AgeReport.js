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

let AgeReport = () => {
    const users = useSelector(state => state.userReducer.Users || []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const [ageReport, setAgeReport] = useState([]);

    useEffect(() => {
        let ageReport = [];
        let ageGroups = ["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90", "91-100"];
        let ageCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < users.length; i++) {
            let age = users[i].age;
            if (age <= 10) {
                ageCount[0]++;
            }
            else if (age <= 20) {
                ageCount[1]++;
            }
            else if (age <= 30) {
                ageCount[2]++;
            }
            else if (age <= 40) {
                ageCount[3]++;
            }
            else if (age <= 50) {
                ageCount[4]++;
            }
            else if (age <= 60) {
                ageCount[5]++;
            }
            else if (age <= 70) {
                ageCount[6]++;
            }
            else if (age <= 80) {
                ageCount[7]++;
            }
            else if (age <= 90) {
                ageCount[8]++;
            }
            else {
                ageCount[9]++;
            }
        }
        for (let i = 0; i < ageGroups.length; i++) {
            let obj = {
                name: ageGroups[i],
                count: ageCount[i]
            }
            ageReport.push(obj);
        }
        setAgeReport(ageReport);
    }, [users]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042' ];
    return (
        <div>
            <h2>Age Report</h2>
            <BarChart
                width={500}
                height={300}
                data={ageReport}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            <h2>Age Report</h2>
            <PieChart width={400} height={400}>
                <Pie data={ageReport} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                    {
                        ageReport.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    )



}

export default AgeReport;