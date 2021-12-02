import "./home.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import hero from "../../assets/hero.png"

export const Home = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
 
    return (
        <section id="homeID" className="section-home" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <div className="home" >
                <div className="name">
                    <h1>Hi, I'am</h1>
                    <h1>HARSHITH C R</h1>
                    <h1>I'm a Full stack web developer</h1>
                    <a href="https://drive.google.com/file/d/19krubhLEDpQ5a0UimO6VBjD0U2waBQjf/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><button className="resume" style={ currentTheme === "light" ? Themes.light.resume : Themes.dark.resume }>My Resume</button></a>
                </div>
                <div className="hero">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </section>
    )
}

// box-shadow: 1px 1px 1px 1px #9E9E9E;