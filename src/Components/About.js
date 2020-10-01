import React from 'react';
import '../scss/Components/About.scss';
import profileImageLarge from '../assets/images/profile.jpg';

import LogoIcon from './LogoIcon';


const About = (props) => {
    const resumeJPG = "https://domitalk.s3.us-east-2.amazonaws.com/Dominic+Chu+Resume+Software+Engineer+JPG.jpg";
    const resumeDOCX = "https://domitalk.s3.us-east-2.amazonaws.com/Dominic+Chu+Resume+Software+Engineer+DOCX.docx";
    const resumePDF = "https://domitalk.s3.us-east-2.amazonaws.com/Dominic+Chu+Resume+Software+Engineer+PDF.pdf";
    const googleDOCS ="https://docs.google.com/document/d/1NIa5ZVRZTa2KpelYLzEQHIvu6CuaSntAFxr3RM3QhUk/edit?usp=sharing";

    return (
        <div className="About">
            <h2 className="section-title">
                ABOUT
            </h2>
            <div className="Profile">
                <h3>Dominic M. Chu</h3>
                <img src={profileImageLarge} />
            </div>
            <div className="Links">
                <div>
                    <h2>Links</h2>
                </div>
                <div>
                    <a href="http://github.com/domitalk" target="_blank" rel="noopener noreferrer" >
                        GitHubIcon
                    </a>
                    <a href="https://www.linkedin.com/in/dominic-m-chu" target="_blank" rel="noopener noreferrer">
                        LinkedInIcon
                    </a> 
                    <a href="https://medium.com/@dominic.m.chu" target="_blank" rel="noopener noreferrer">
                        MediumIcon
                    </a>
                    <a href="mailto:dominic.m.chu@gmail.com" target="_blank" rel="noopener noreferrer">
                        EmailIcon
                    </a>
                </div>
            </div>
            <div className="Languages">
                <div>
                    <h2>Languages/Libraries</h2>
                </div>
                <div>
                    <div>JavaScript</div>
                    <div>ReactLogo</div>
                    <div>Ruby</div>
                    <div>Rubyonrails</div>
                    <div>Redux</div>
                    <div>Java</div>
                </div>
            </div>
            <div className="Resume">
                <div>
                    <h2>Resume</h2>
                </div>
                <div>
                    <img src={resumeJPG}/>
                </div>
                <div>
                    <a href={resumeDOCX} target="_blank" rel="noopener noreferrer">
                        <button >
                             DOCX
                        </button>
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
                    </a>
                </div>
            </div>
        </div>
    )
};

export default About;