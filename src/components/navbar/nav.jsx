import React from 'react'
import './nav.css'
import { FiSearch } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import luxelogo from '../assets/luxeroomlogo.png'
function Nav() {
    return (
        <div className="header">
            <div className="nav">
                <div className="logo">
                    <img src={luxelogo}/>
                </div>
                <div className="navlinks">
                    <ul>
                        <li>Products</li>
                        <li>Story</li>
                        <li>Manufacturing</li>
                        <li>Packaging</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div className="controls">
                    <ul>
                        <li className='search'><FiSearch /></li>
                        <li className='cart'><IoBagHandleOutline /></li>
                        <li className='profile'><LuUser /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Nav