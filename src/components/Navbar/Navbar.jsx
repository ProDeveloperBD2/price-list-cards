import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Products", path: "/products" },
    ];

    return (
        <div>
            <nav className='bg-orange-500 py-2 px-4'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open === true ? <XMarkIcon className="h-10 w-10 text-white" /> : <Bars3Icon className="h-10 w-10 text-white" />
                        }
                    </span>
                </div>
                <ul className={`md:flex absolute md:static duration-500 ${open ? 'left-0 bg-orange-500 pb-96 py-6 px-8' : '-left-40'}`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;