import "./about.css";
import Harshith from "../../assets/Harshith.jpg";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const About = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="aboutID" className="section-about" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
        <div className="main-about">
            <div className="about">
                <h1>ABOUT ME</h1>
                <p>Hi there I'm Harshith C R. I started learning coding as a hobby and just displaying a simple "Hello world" message on screen was seemed exciting. Ever since I started leaning web development, I fell in love with it. I enjoy making an interactive website which can be viewed on a wide range of screens.</p>
            </div>
            <div className="main-img">
                <div className="image" style={ currentTheme === "light" ? Themes.light.profilepic : Themes.dark.profilepic }>
                    <img src={Harshith} alt="Harshith's Profile pic" />
                </div>
            </div>
        </div>
        </section>
    )
}