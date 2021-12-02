import "./projects.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import onnBikes from "../../assets/onnBikes.png";
import organplus from "../../assets/login.png";

export const Project = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="projectsID" className="section-pro" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <div className="main-projects">
            <h1>PROJECTS</h1>
            <div className="projects">
                <div className="onbikes">
                    <div className="data">
                        <h2>Onn Bikes Clone</h2>
                        <p>This project is about online website for bike rental system. This online website is for ONN bikes company.</p>
                        <div className="tech-stack">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>MongoDB</p>
                            <p>Node</p>
                        </div>
                        <div className="repo">
                            <h3>GitHub</h3>
                            <h3>Live Demo</h3>
                        </div>
                    </div>
                    <div className="img">
                        <img src={onnBikes} alt="Onn Bikes" />
                    </div>
                </div>
                <div className="organplus">
                    <div className="data">
                        <h2>Organ +</h2>
                        <p>Organ+ is an organ donation website for hospitals. The main aim of this project is to notify the registered organ seekers via email, as and when the organ of their requirement matching to their blood group is available and much more.</p>
                        <div className="tech-stack">
                            <p>React</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>MongoDB</p>
                            <p>Node</p>
                        </div>
                        <div className="repo">
                            <h3>GitHub</h3>
                            <h3>Live Demo</h3>
                        </div>
                    </div>
                    <div className="img">
                        <img src={organplus} alt="Organ Plus" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}