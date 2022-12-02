import React from 'react';
import "../styles/Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            <div className="home">
                <span className="tags top-tags">&lt;body&gt;</span>
                <div className="home-links">
                    <Link className="link-about" to="/about"></Link>
                    <Link className="link-projects" to="/projects"></Link>
                    <Link className="link-experience" to="/experience"></Link>
                </div>
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
    );
};

export default Home;