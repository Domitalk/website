import React from 'react';

const CardButton = (props) => {
    return (
        <button href={props.linkVar} target="_blank" >
            {props.desc}
        </button>
    )
};

export default CardButton;