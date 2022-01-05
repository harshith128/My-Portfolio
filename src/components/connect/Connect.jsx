import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./connect.css"
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Connect = () => {
    const { currentTheme } = useContext(ThemeContext);
    return (
        <div className="connect-row">
                        <div className="connect-each" >
                            <a style={ currentTheme === "light" ? { color: "#150050" } : { color: "#FBFFE2" } } className="connect-content" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/harshith-c/">
                            <FaLinkedin />
                            </a>

                            <a style={ currentTheme === "light" ? { color: "#150050" } : { color: "#FBFFE2" } } className="connect-content" rel="noopener noreferrer" target="_blank" href="mailto: harshith1357@gmail.com">
                            <FaEnvelope />
                            </a>

                            <a style={ currentTheme === "light" ? { color: "#150050" } : { color: "#FBFFE2" } } className="connect-content" rel="noopener noreferrer" target="_blank" href="https://github.com/harshith128">
                            <FaGithub />
                            </a>

                            <a style={ currentTheme === "light" ? { color: "#150050" } : { color: "#FBFFE2" } } className="connect-content" rel="noopener noreferrer" target="_blank" href="https://twitter.com/Harshith1317">
                            <FaTwitter />
                            </a>
                        </div>
        </div>
    )
}