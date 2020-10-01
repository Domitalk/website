import React from 'react';
import CardButton from './CardButton';
import '../scss/Components/Card.scss';

const Card = (props) => {
    const { imageUrl } = props.project;
    const style = {
        backgroundImage: 'url(' + imageUrl + ')'
    }

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



    // <div>
    // <img src={props.project.imageUrl} />
    // <h4>{props.project.header}</h4>
    // <p>{props.project.description}</p>
    // {createButtons()}
    // </div>

    return (
        <article className="card">
            <header style={style} id={imageUrl} className="card-header">
                <h4 className="card-header--title">{props.project.header}</h4>
            </header>
            <div className="card-body">
                <p className="body-content">
                    {props.project.description}
                </p>
                <div className="card-buttons-container">
                    {createButtons()}
                </div>
            </div>
        </article>
    );
};

export default Card;