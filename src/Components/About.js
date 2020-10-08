import React from 'react';
import '../scss/Components/About.scss';
import '../App.scss'
import CardButton from './CardButton';
import profileImageLarge from '../assets/images/profile.jpg';

import LogoIcon from './LogoIcon';

import styled from 'styled-components'
import { 
    Github, 
    Linkedin, 
    Medium, 
    Javascript, 
    ReactLogo,
    Ruby,
    Rubyonrails,
} from '@styled-icons/simple-icons'
import { Email } from '@styled-icons/material-sharp/Email'
import { Java } from '@styled-icons/fa-brands/Java'


const About = (props) => {
    const resumeJPG = "https://domitalk.s3.us-east-2.amazonaws.com/Dominic+Chu+Resume+Software+Engineer+JPG.jpg";
    const resumeDOCX = "https://domitalk.s3.us-east-2.amazonaws.com/Dominic+Chu+Resume+Software+Engineer+DOCX.docx";
    const resumePDF = "https://domitalk.s3.us-east-2.amazonaws.com/Dominic+Chu+Resume+Software+Engineer+PDF.pdf";
    const googleDOCS ="https://docs.google.com/document/d/1NIa5ZVRZTa2KpelYLzEQHIvu6CuaSntAFxr3RM3QhUk/edit?usp=sharing";

    const GithubIcon = styled(Github)`
        color: black
    `
    const LinkedinIcon = styled(Linkedin)`
        color: black
    `
    const MediumIcon = styled(Medium)`
        color: black
    `
    const EmailIcon = styled(Email)`
        color: black
    `


    return (
        <div id="About" className="About">
            <h1 className="section-title">
                ABOUT
            </h1>
            <div className="profile-links-col">
                <div className="Profile visual-card">
                    <h3>Dominic M. Chu</h3>
                    <img className="profile-pic" src={profileImageLarge} />
                </div>
                <div className="links-languages-combo-card">
                    <div className="Links visual-card">
                        <div>
                            <h2>Links</h2>
                        </div>
                        <div className="link-icon-container">
                            <a href="http://github.com/domitalk" target="_blank" rel="noopener noreferrer" >
                                <GithubIcon size="48" /> 
                            </a>
                            <a href="https://www.linkedin.com/in/dominic-m-chu" target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon size="48" /> 
                            </a> 
                            <a href="https://medium.com/@dominic.m.chu" target="_blank" rel="noopener noreferrer">
                                <MediumIcon size="48" /> 
                            </a>
                            <a href="mailto:dominic.m.chu@gmail.com" target="_blank" rel="noopener noreferrer">
                                <EmailIcon size="48" />
                            </a>
                        </div>
                    </div>
                    <div className="Languages visual-card">
                        <div>
                            <h2>Languages/Libraries</h2>
                        </div>
                        <div className="icons-container">
                            <Javascript className="icon" size="35" /> 
                            <ReactLogo className="icon" size="35" /> 
                            <Ruby className="icon" size="35" /> 
                            <Rubyonrails className="icon" size="35" /> 
                            <Java className="icon" size="35" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Resume visual-card">
                <div >
                    <h2>Resume</h2>
                </div>
                <div>
                    <img className="resume-picture" src={resumeJPG}/>
                </div>
                <div>
                        <CardButton linkVar={resumeDOCX} desc={"DOCX"} />
                        <CardButton linkVar={resumePDF} desc={"PDF"} />
                        <CardButton linkVar={googleDOCS} desc={"Google Docs"} />

                    {/* <a href={resumeDOCX} target="_blank" rel="noopener noreferrer">
                    </a>
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                        <button >
                            PDF
                        </button>
                    </a>
                    <a href={googleDOCS} target="_blank" rel="noopener noreferrer">
                        <button >
                            Google Docs
                        </button>
                    </a> */}
                </div>
            </div>
        </div>
    )
};

export default About;