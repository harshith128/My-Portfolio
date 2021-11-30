import './navbar.css';
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Navbar = () => {
    const { Themes, currentTheme, handleChangeTheme } = useContext(ThemeContext);

    const themeIcon = currentTheme === "dark" ? (
        <HiMoon strokeWidth={1} size={20} color={currentTheme === "light" ? Themes.dark.navbar : Themes.light.navbar } />
    ) : (
        <CgSun strokeWidth={1} size={20} color={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } />
    );

    const styles = {
        cursor: "pointer",
        height: "40px",
        width: "40px",
        marginRight: "5px",
        marginLeft: "15px",
        marginTop: "10px",
        paddingTop: "5px",
        borderRadius: "50%",
        border: "none",
        alignItems: "center",
        justifyContent: "center",
        color: currentTheme === "light" ? Themes.light.themebtn.color : Themes.dark.themebtn.color,
        backgroundColor: currentTheme === "light" ? Themes.light.themebtn.backgroundColor : Themes.dark.themebtn.backgroundColor,
        outline: "none",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          boxShadow: `0 8px 8px ${
            currentTheme === "light" ? "black" : "#646464"
          }`,
        },
      };

    return (
        <div className="Navbar"  style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
            <div className="logo">
                <h4>H</h4>
            </div>
            <div className="NavRow">
                <p className="nav-cont">HOME</p>
                <p className="nav-cont">ABOUT</p>
                <p className="nav-cont">SKILLS</p>
                <p className="nav-cont">PROJECTS</p>
                <p className="nav-cont">CONTACT</p>
                <button style={ styles } onClick={ handleChangeTheme }>
                  { themeIcon }
                </button>
            </div>
        </div>
    )
}