// 4. Report to Show Percentage of Population Covered ie that population that is getting a dose or has already gotten a dose

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchUsers } from "../../../State/User/userAction";

let PopulationCovered = () => {
    const users = useSelector(state => state.userReducer.Users || []);
    const dispatch = useDispatch();
    let totalPopulation = 7.9e9; // 7.9 billion

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const [populationReport, setPopulationReport] = useState([]);

    useEffect(() => {
        let populationReport = [];
        let populationGroups = ["% of People Vaccinated", "% of People Not Vaccinated"];
        let populationCount = [0, 0];

        let peopleVaccinated = users.length;
        let peopleNotVaccinated = totalPopulation - peopleVaccinated;

        populationCount[0] = (peopleVaccinated / totalPopulation) * 100;
        populationCount[1] = (peopleNotVaccinated / totalPopulation) * 100;

        for (let i = 0; i < populationGroups.length; i++) {
            populationReport.push({ name: populationGroups[i], count: populationCount[i] });
        }

        setPopulationReport(populationReport);
            
}, [users]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <h2>Population Covered</h2>
            <BarChart width={500} height={300} data={populationReport} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            <h2>Population Covered</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={populationReport}
                    dataKey="count"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {
                        populationReport.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
                    }
                </Pie>
            </PieChart>
        </div>
    );
    
}






export default PopulationCovered;