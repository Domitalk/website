import React from 'react';
import '../scss/Components/CardButton.scss';

const CardButton = (props) => {
    return (
        <a className="card-button" href={props.linkVar} target="_blank" >
            {props.desc}
        </a>
    )
};

export default CardButton;