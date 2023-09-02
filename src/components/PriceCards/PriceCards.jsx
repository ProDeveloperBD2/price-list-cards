import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'


const PriceCards = (props) => {
    const { name, price, featureList } = props.price;
    return (
        <div className='shadow-xl p-3 rounded-md mb-10 flex-col'>
            <h2 className='text-center  mb-4'>
                <span className='text-4xl font-semibold text-orange-500 md:text-5xl'>${price}</span>
                <span>/mon</span>
            </h2>
            <h3 className='text-xl md:text-2xl font-medium text-center mb-2'>{name}</h3>
            <h6 className='text-center mb-9'>
                <p className='text-xl mb-5'>Features</p>
                <p className='mb-2 flex'>
                    <CheckBadgeIcon className="h-5 w-5 text-orange-500" />
                    <span className='pl-4'>{featureList[0]}</span>
                </p>
                <p className='mb-2 flex'>
                    <CheckBadgeIcon className="h-5 w-5 text-orange-500" />
                    <span className='pl-4'>{featureList[1]}</span>
                </p>
                <p className='mb-2 flex'>
                    <CheckBadgeIcon className="h-5 w-5 text-orange-500" />
                    <span className='pl-4'>{featureList[2]}</span>
                </p>

            </h6>
            <button className='w-full flex justify-center bg-orange-500  rounded-lg cursor-pointer text-white font-semibold mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCards;