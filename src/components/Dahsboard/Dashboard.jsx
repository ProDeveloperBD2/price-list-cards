import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        {
            "id": 1,
            "student": "John Doe",
            "phy": 85,
            "chem": 90,
            "math": 78
        },
        {
            "id": 2,
            "student": "Alice Smith",
            "phy": 92,
            "chem": 88,
            "math": 95
        },
        {
            "id": 3,
            "student": "Bob Johnson",
            "phy": 78,
            "chem": 65,
            "math": 70
        },
        {
            "id": 4,
            "student": "Emily Brown",
            "phy": 70,
            "chem": 80,
            "math": 75
        },
        {
            "id": 5,
            "student": "David Lee",
            "phy": 88,
            "chem": 92,
            "math": 87
        },
        {
            "id": 6,
            "student": "Sarah White",
            "phy": 76,
            "chem": 81,
            "math": 89
        },
        {
            "id": 7,
            "student": "Michael Davis",
            "phy": 94,
            "chem": 87,
            "math": 91
        },
        {
            "id": 8,
            "student": "Jennifer Johnson",
            "phy": 82,
            "chem": 78,
            "math": 83
        },
        {
            "id": 9,
            "student": "Daniel Smith",
            "phy": 89,
            "chem": 92,
            "math": 96
        },
        {
            "id": 10,
            "student": "Olivia Wilson",
            "phy": 91,
            "chem": 84,
            "math": 79
        },
        {
            "id": 11,
            "student": "William Brown",
            "phy": 76,
            "chem": 65,
            "math": 72
        },
        {
            "id": 12,
            "student": "Ava Johnson",
            "phy": 83,
            "chem": 87,
            "math": 88
        }
    ];

    return (
        <div>

            <LineChart
                width={1000}
                height={300}
                margin={20}
                data={marksArray}
            >
                <Line dataKey="math" stroke="red" activeDot={{ r: 5 }}></Line>
                <Line dataKey="phy" stroke='#FFBB28' activeDot={{ r: 6 }}></Line>
                <Line dataKey="chem"></Line>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend />
                <CartesianGrid></CartesianGrid>
            </LineChart>
        </div>
    );
};

export default Dashboard;