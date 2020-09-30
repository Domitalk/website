import React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => {
    return (
        <nav className="navbar  bg-primary">
            <h1>
            NAVI
            </h1>
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