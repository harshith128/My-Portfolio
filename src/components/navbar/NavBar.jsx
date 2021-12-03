import './navbar.css';
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const { Themes, currentTheme, handleChangeTheme } = useContext(ThemeContext);

    const themeIcon = currentTheme === "dark" ? (
        <HiMoon strokeWidth={1} size={20} color={ Themes.light.themebtn.fontColor } />
    ) : (
        <CgSun strokeWidth={1} size={20} color={ Themes.dark.themebtn.fontColor } />
    );
    // activeClassName="active"
    return (
        <div className="Navbar"  style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
            <div className="NavRow">
                <Link className="nav-cont" to="homeID" spy={true} smooth={true} ><p>HOME</p></Link>
                <Link className="nav-cont" to="aboutID" spy={true} smooth={true} ><p>ABOUT</p></Link>
                <Link className="nav-cont" to="skillsID" spy={true} smooth={true} ><p>SKILLS</p></Link>
                <Link className="nav-cont" to="projectsID" spy={true} smooth={true} ><p>PROJECTS</p></Link>
                <Link className="nav-cont" to="contactID" spy={true} smooth={true} ><p>CONTACT</p></Link>
            </div>
            <button style={ currentTheme === "light" ? Themes.light.themebtn : Themes.dark.themebtn } className="theme-btn" onClick={ handleChangeTheme }>
                  { themeIcon }
            </button>
        </div>
    )
}