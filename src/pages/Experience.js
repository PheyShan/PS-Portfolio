import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import Navbar from "../components/Navbar";

const Experience = () => {
    return (
        <>
            <Navbar />
            <div className="experience" style={{ textAlign: "left" }}>
                <VerticalTimeline lineColor="rgb(135, 134, 128)">

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2022 - June 2022"
                        contentStyle={{ background: '#f0f0f0', color: 'black' }}
                        contentArrowStyle={{ borderRight: '10px solid grey' }}
                        iconStyle={{ background: "rgb(255, 225, 0)", color: "#fff" }}
                        icon={<SchoolRoundedIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Temasek Polytechnic, Singapore</h3>
                        <p>Junior Full Stack Developer Programme Bootcamp</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2008 - 2012"
                        contentStyle={{ background: '#f0f0f0', color: 'black' }}
                        contentArrowStyle={{ borderRight: '10px solid grey' }}
                        iconStyle={{ background: "rgb(255, 225, 0)", color: "#fff" }}
                        icon={<SchoolRoundedIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Universiti Teknologi Malaysia</h3>
                        <p>Bachelor’s Degree - Engineering (Mechanical-Materials)</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="July 2022 - December 2022"
                        contentStyle={{ background: '#f0f0f0', color: 'black' }}
                        contentArrowStyle={{ borderRight: '10px solid grey' }}
                        iconStyle={{ background: "rgb(255, 225, 0)", color: "#fff" }}
                        icon={<WorkRoundedIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Lexly Health Pte. Ltd, Singapore </h3>
                        <p>Software Engineer Analyst Trainee (Front-End)</p>
                        <ul style={{ color: "black", fontSize: "14px" }}>
                            <li>
                                Develop and improvise solutions with React JavaScript
                            </li>
                            <li>
                                Work closely with the project manager and software engineering team to fully undergo the complete software development cycle
                            </li>
                            <li>
                                Communicate and integrate frontend with the backend development team
                            </li>
                            <li>
                                Gather requirements, plan, develop and deploy solutions
                            </li>
                            <li>
                                Design, develop and evolve Lexly Health website
                            </li>
                            <li>
                                Ensure technical feasibility of UI/UX designs
                            </li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement 
                        className="vertical-timeline-element--work"
                        date="2013 - 2021"
                        contentStyle={{ background: '#f0f0f0', color: 'black' }}
                        contentArrowStyle={{ borderRight: '10px solid grey' }}
                        iconStyle={{ background: "rgb(255, 225, 0)", color: "#fff" }}
                        icon={<WorkRoundedIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Sembcorp Marine Ltd, Singapore</h3>
                        <p>Senior Mechanical Engineer</p>
                        <ul style={{ color: "black", fontSize: "14px" }}>
                            <li>
                                Verifying equipment sizing calculation, developing technical specifications according to clients' requirement and rules & regulations for mechanical equipment packages, performing Technical Bid Evaluation (TBE) and reviewing vendors' technical documents in ensuring technical
                                compliance
                            </li>
                            <li>
                                Developing detailed layout drawings, 3D modelling and material handling plan
                            </li>
                            <li>
                                Working closely with cross functional teams including procurement, project and operation teams
                            </li>
                            <li>
                                Participation in project planning and factory acceptance test inspections (local/oversea)
                            </li>
                            <li>
                                Role as a team leader managing a team of drafters, assistant engineers and engineers, overseeing team members' day-to-day jobs
                            </li>
                        </ul>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </>
    );
};

export default Experience;