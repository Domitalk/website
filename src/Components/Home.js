import React from 'react';
import bannerImageLarge from '../assets/images/banner.jpg'
import '../scss/Components/Home.scss';

const Home = () => {
    return (
        <>
            <img className="banner" src={bannerImageLarge} alt="banner" />
        </>
    )
}

export default Home;
