import React, { useEffect, useState } from 'react';
import PriceCards from '../PriceCards/PriceCards';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, []);
    return (
        <div className='mt-10'>
            <h1 className='text-3xl p-4 text-white bg-orange-500 text-center font-medium'>Awesome Affordable Prices</h1>
            <div className='grid md:grid-cols-3 gap-5 m-4 mt-10'>
                {
                    prices.map(price => <PriceCards key={price.id} price={price}></PriceCards>)
                }
            </div>
        </div>
    );
};

export default PriceList;