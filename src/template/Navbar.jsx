import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const isActive = (path) => {
        return window.location.pathname === path;
    }

    return (
        <div>
            
            <nav className="bg-gray-50 border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="text-lg font-semibold text-gray-900">RecursosHumanos</a>
                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={(menu ? "" : "hidden") + " w-full md:block md:w-auto"} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link to="/" className={"block py-2 px-3 md:p-0 md:border-0" + (isActive("/") ? " text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700" : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700")} >Home</Link>
                            </li>
                            <li>
                                <Link to="/agregar" className={"block py-2 px-3 md:p-0 md:border-0" + (isActive("/agregar") ? " text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700" : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700")} >Agregar</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav >
            

        </div >
    )
}
