import React, { useState } from 'react';
import Card from '../Components/Card';

import '../scss/Containers/CardsContainer.scss';

const CardsContainer = (props) => {
    const [buttonToggle, setButtonToggle] = useState(false);

    const handleShowMore = () => {
        setButtonToggle(true)
    };
    const mapInitialCards = () => {
        return props.arrayData.slice(0, 3).map((project) => {
            return <Card project={project} />
        })
    };
    const mapMoreCards = () => {
        return props.arrayData.slice(3).map((project) => {
            return <Card project={project} />
        })
    };
    const showMoreButton = () => {
        return buttonToggle ? null : <button onClick={handleShowMore}>Load More</button>
    };

    return (
        <div className="CardsContainer" id={props.header}>
            <div>
                <h1>{props.header}</h1>
            </div>
            <div className="cards-flex-box">
                {mapInitialCards()}
                {showMoreButton()}
            </div>
            <div className="cards-flex-box">
                {buttonToggle? mapMoreCards() : null}
            </div>
        </div>
    )
};

export default CardsContainer;