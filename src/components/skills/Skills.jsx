import html from "../../assets/html5-plain.svg";
import css from "../../assets/css3-plain.svg";
import javascript from "../../assets/javascript-plain.svg";
import express from "../../assets/express-original.svg";
import github from "../../assets/github-original.svg";
import nodejs from "../../assets/nodejs-plain.svg";
import mongodb from "../../assets/mongodb-original.svg";
import react from "../../assets/react-original.svg";
import redux from "../../assets/redux-original.svg";
import dsa from "../../assets/dsa.png";
import "./skills.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Skills = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="skillsID" className="section-skills" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <div className="main-skills">
                <h1 className="skills-head">SKILLS AND TOOLS</h1>
                <div className="skills-cont">
                    <div className="skill">
                        <img src={html} alt="HTML LOGO" />
                        <h3>HTML</h3>
                    </div>
                    <div className="skill">
                        <img src={css} alt="CSS LOGO" />
                        <h3>CSS</h3>
                    </div>
                    <div className="skill">
                        <img src={javascript} alt="JavaScript LOGO" />
                        <h3>JavaScript</h3>
                    </div>
                    <div className="skill">
                        <img src={nodejs} alt="NodeJS LOGO" />
                        <h3>NodeJS</h3>
                    </div>
                    <div className="skill">
                        <img src={express} alt="Express LOGO" />
                        <h3>ExpressJS</h3>
                    </div>
                    <div className="skill">
                        <img src={mongodb} alt="MongoDB LOGO" />
                        <h3>MongoDB</h3>
                    </div>
                    <div className="skill">
                        <img src={github} alt="GitHub LOGO" />
                        <h3>GitHub</h3>
                    </div>
                    <div className="skill">
                        <img src={react} alt="React LOGO" />
                        <h3>React</h3>
                    </div>
                    <div className="skill">
                        <img src={redux} alt="Redux LOGO" />
                        <h3>Redux</h3>
                    </div>
                    <div className="skill">
                        <img src={dsa} alt="DS-ALGO LOGO" />
                        <h3>DSA</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}