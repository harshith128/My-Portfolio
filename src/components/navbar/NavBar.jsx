import './navbar.css';
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const { Themes, currentTheme, handleChangeTheme } = useContext(ThemeContext);

    const themeIcon = currentTheme === "dark" ? (
        <HiMoon strokeWidth={1} size={20} color={currentTheme === "light" ? Themes.dark.navbar : Themes.light.navbar } />
    ) : (
        <CgSun strokeWidth={1} size={20} color={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } />
    );

    return (
        <div className="Navbar"  style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
            <div className="NavRow">
                <Link activeClassName="active" className="nav-cont" to="homeID" spy={true} smooth={true} ><p>HOME</p></Link>
                <Link className="nav-cont" to="aboutID" spy={true} smooth={true} ><p>ABOUT</p></Link>
                <Link className="nav-cont" to="skillsID" spy={true} smooth={true} ><p>SKILLS</p></Link>
                <Link className="nav-cont" to="projectsID" spy={true} smooth={true} ><p>PROJECTS</p></Link>
                <Link className="nav-cont" to="contactID" spy={true} smooth={true} ><p>CONTACT</p></Link>
            </div>
            <button className="theme-btn" style={ currentTheme === "light" ? Themes.light.themebtn : Themes.dark.themebtn } onClick={ handleChangeTheme }>
                  { themeIcon }
            </button>
        </div>
    )
}