import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import "../styles/About.css";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <div className="about">
                    <h1>About</h1>
                    <div className="prompt">
                        <p><span>A front-end developer trainee, recently completed a 12-week full-time bootcamp run in partnership between Microsoft, Temasek Polytechnic and Generation Singapore. I have always held a strong interest in tech and have passion for learning and creating. Despite facing challenges in the programming journey, I embrace an optimistic mindset to keep myself moving forward.</span><br/></p>
                        <a
                            href="https://www.linkedin.com/in/phey-shan-chong-45432936/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href="https://github.com/PheyShan"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="mailto:psharon_5046@hotmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AlternateEmailIcon />
                        </a>
                    </div>
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <ol className="list">
                        <li className="item">
                            <h2>Front-End</h2>
                            <span>HTML, CSS, ReactJS, Bootstrap, Material-UI, Ant Design</span>
                        </li>
                        <li className="item">
                            <h2>Back-End</h2>
                            <span>Spring Boot, MySQL</span>
                        </li>
                        <li className="item">
                            <h2>Languages</h2>
                            <span>JavaScript, Java</span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default About;