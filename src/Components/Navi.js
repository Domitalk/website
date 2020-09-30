import React from 'react';
import '../scss/Components/Navi.scss';

const Navi = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href='#Home'>Dominic M. Chu</a>
                </li>
                <li>
                    <a href='#About'>About</a>
                </li>
                <li>
                    <a href='#Projects'>Projects</a>
                </li>
                <li>
                    <a href='#Blogs'>Blogs</a>
                </li>
            </ul>
        </nav>
    )   
};
export default Navi;