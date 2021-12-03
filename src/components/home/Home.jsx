import "./home.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import hero from "../../assets/hero.png";
import { Connect } from "../connect/Connect";

// function mouseover() {
//     document.getElementById("gfg").style.color = "red";
// }
  
// function mouseout() {
//     document.getElementById("gfg").style.color = "green";
// }

export const Home = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    
 
    return (
        <section id="homeID" className="section-home" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <div className="home" >
                <div className="name">
                    <h2>Hi, I'am</h2>
                    <h1>HARSHITH C R</h1>
                    <h2>I'm a Full stack web developer</h2>
                    <div>
                        <Connect />
                    </div>
                    <a href="https://drive.google.com/file/d/19krubhLEDpQ5a0UimO6VBjD0U2waBQjf/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><button className="resume" >My Resume</button></a>
                </div>
                <div className="hero">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </section>
    )
}

// style={ currentTheme === "light" ? Themes.light.resume : Themes.dark.resume }

// box-shadow: 1px 1px 1px 1px #9E9E9E;