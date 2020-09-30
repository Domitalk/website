import React, { useState } from 'react';
import Card from '../Components/Card'

const CardsContainer = (props) => {
    const [buttonToggle, setButtonToggle] = useState(false)

    const handleShowMore = () => {
        setButtonToggle(true)
    }
    const mapInitialCards = () => {
        return props.arrayData.slice(0, 3).map((project) => {
            return <Card project={project} />
        })
    }
    const mapMoreCards = () => {
        return props.arrayData.slice(3).map((project) => {
            return <Card project={project} />
        })
    }
    const showMoreButton = () => {
        return buttonToggle ? null : <button onClick={handleShowMore}>Load More</button>
    }


    return (
        <div className="CardsContainer" id={props.header}>
            <div>
                <h2>{props.header}</h2>
            </div>
            <div>
                {mapInitialCards()}
                {showMoreButton()}
            </div>
            <div>
                {mapMoreCards()}
            </div>
        </div>
    )
};

export default CardsContainer;