import React from 'react';

const Link = (props) => {
    const { name, path } = props.route;
    return (
        <div>
            <li className='mr-6 mb-4 text-xl text-white'>
                <a href={path}>{name}</a>
            </li>
        </div>
    );
};

export default Link;