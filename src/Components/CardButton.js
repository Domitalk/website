import React from 'react';
import '../scss/Components/CardButton.scss';

const CardButton = (props) => {
    return (
        <button href={props.linkVar} target="_blank" >
            {props.desc}
        </button>
    )
};

export default CardButton;