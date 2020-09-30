import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Components/Navi.scss'

const Navi = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to='#Home'>Dominic M. Chu</Link>
                </li>
                <li>
                    <Link to=''>About</Link>
                </li>
                <li>
                    <Link to=''>Projects</Link>
                </li>
                <li>
                    <Link to=''>Blogs</Link>
                </li>
            </ul>
        </nav>
    )   
}
export default Navi;