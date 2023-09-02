import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadData = data.data.data;
                const phonesData = loadData.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1])

                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })
                console.log(phonesData)
                setPhones(phonesData)
            })
    }, []);

    return (
        <div className='mt-20'>
            <BarChart width={800} height={300} data={phones}>
                <Bar dataKey='price' fill='red'></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;