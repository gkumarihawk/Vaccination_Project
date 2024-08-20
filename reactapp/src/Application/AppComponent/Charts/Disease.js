// 1. Show reports on the basis of  Pre-Existing name of Disease from the user data
// 2. Bar Chart and Pie Chart Both -> d3 reports module of

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUsers } from "../../../State/User/userAction";
import { useEffect } from 'react';
import { useState } from 'react';

let Disease = () => {
    const users = useSelector(state => state.userReducer.Users || []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const [diseaseReport, setDiseaseReport] = useState([]);

    useEffect(() => {
        let diseaseReport = [];
        let diseaseGroups = [];
        let diseaseCount = [];

        //If two diseases are same then increase count by 1;

        for (let i = 0; i < users.length; i++) {
            let disease = users[i].disease;
            if(disease.length > 0){
                if (!diseaseGroups.includes(disease)) {
                    diseaseGroups.push(disease);
                    diseaseCount.push(1);
                    
                }
                else{
                    let index = diseaseGroups.indexOf(disease);
                    diseaseCount[index]++;
                }
                
         }
        }


        for (let i = 0; i < diseaseGroups.length; i++) {
            diseaseReport.push({ name: diseaseGroups[i], count: diseaseCount[i] });
        }

        setDiseaseReport(diseaseReport);

    }, [users]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <h2>Disease Report</h2>
            <BarChart width={500} height={300} data={diseaseReport} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            <h2>Disease Report</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={diseaseReport}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={({
                        cx, cy, midAngle, innerRadius, outerRadius, value, index
                    }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        return (
                            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                                {diseaseReport[index].name} ({diseaseReport[index].count})
                            </text>
                        );
                    }}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                >
                    {
                        diseaseReport.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
            
        </div>
    );
}


export default Disease
