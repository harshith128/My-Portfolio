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
// import { IconName } from "react-icons/di";
import "./skills.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Skills = () => {
    const skillsCont = [ { id:1, skill: html, text: "HTML" , alter: "HTML LOGO" },
                            { id:2, skill: css, text: "CSS" , alter: "CSS LOGO" },
                            { id:3, skill: javascript, text: "JavaScript" , alter: "JavaScript LOGO" },
                            { id:4, skill: nodejs, text: "NodeJS" , alter: "NodeJS LOGO" }, 
                            { id:5, skill: express, text: "Express" , alter: "Express LOGO" }, 
                            { id:6, skill: mongodb, text: "MongoDB" , alter: "MongoDB LOGO" }, 
                            { id:7, skill: github, text: "GitHub" , alter: "GitHub LOGO" },
                            { id:8, skill: react, text: "React" , alter: "React LOGO" }, 
                            { id:9, skill: redux, text: "Redux" , alter: "Redux LOGO" },
                            { id:10, skill: dsa, text: "DSA" , alter: "DSA LOGO" }, ]

    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="skillsID" className="section-skills" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <div className="main-skills">
                <h1 className="skills-head">Skills And Tools</h1>
                <div className="skills-cont">
                    {
                        skillsCont.map((ele) => {
                            return (
                                <div key={ ele.id } className="skill">
                                    <img src={ ele.skill } alt={ ele.alter } />
                                    <p className="skill-ptag">{ ele.text }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}