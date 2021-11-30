import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import express from "../assets/express.svg";
import github from "../assets/github.svg";
import nodejs from "../assets/nodejs.svg";
import mongodb from "../assets/mongodb.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import dsa from "../assets/dsa.png";
import "./skills.css"

export const Skills = () => {
    return (
        <div className="main-skills">
            <h2>Skills and Tools</h2>
            <div className="skills">
            <div>
                <img src={html} />
            </div>
            <div>
                <img src={css} />
            </div>
            <div>
                <img src={javascript} />
            </div>
            <div>
                <img src={nodejs} />
            </div>
            <div>
                <img src={express} />
            </div>
            <div>
                <img src={mongodb} />
            </div>
            <div>
                <img src={github} />
            </div>
            <div>
                <img src={react} />
            </div>
            <div>
                <img src={redux} />
            </div>
            <div>
                <img src={dsa} />
            </div>
        </div>
        </div>
    )
}