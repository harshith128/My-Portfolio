import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import "./footer.css";

export const Footer = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section className="section-footer" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <div className="footer" >
                <div className="connect">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>Made with love by Harshith</p>
            </div>
        </section>
    )
}