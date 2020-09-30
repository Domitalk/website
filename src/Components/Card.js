import React from 'react';
import CardButton from './CardButton';
import '../scss/Components/Card.scss';

const Card = (props) => {

    const makeButton = (linkVar, desc) => {
        return <CardButton linkVar={linkVar} desc={desc} />
    };
    const createButtons = () => {
        return (
            <>
                {(props.project.demoLink.length > 1) ? makeButton(props.project.demoLink, "Demo Video") : null}
                {(props.project.gitFront.length > 1) ? makeButton(props.project.gitFront, "Github Front") : null}
                {(props.project.gitBack.length > 1) ? makeButton(props.project.gitBack, "Github Back") : null}
                {(props.project.liveSite.length > 1) ? makeButton(props.project.liveSite, "Live Site") : null}
                {(props.project.bloglink.length > 1) ? makeButton(props.project.bloglink, "Read on Medium") : null}
            </>
        )
    };

    return (
        <div>
            <img src={props.project.imageUrl} />
            <h4>{props.project.header}</h4>
            <p>{props.project.description}</p>
            {createButtons()}
        </div>
    );
};

export default Card;