import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Connect } from '../connect/Connect';
import "./footer.css";

export const Footer = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section className="section-footer" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
            <div className="footer" >
                <div className="connect-div">
                    <Connect />
                </div>
                <div className="dummy"></div>
                <p>Handcrafted by Harshith</p>
            </div>
        </section>
    )
}