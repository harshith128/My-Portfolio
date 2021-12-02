import "./contact.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Contact = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="contactID" className="section-contact" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <h1 className="contact-head">Let's talk</h1>
        <div className="contact">
            <div className="address">
                <h2>
                    Contact me
                </h2>
                <p>harshithcr1357@gmail.com</p>
                <p>+91 7019751386</p>
            </div>
            <div className="form">
                <h2>Contact Form</h2>
                <input style={ currentTheme === "light" ? Themes.light.contact : Themes.dark.contact } className="in-box" type="text" placeholder="Name" /><br/>
                <input style={ currentTheme === "light" ? Themes.light.contact : Themes.dark.contact } className="in-box" type="text" placeholder="Email" /><br/>
                <input style={ currentTheme === "light" ? Themes.light.contact : Themes.dark.contact } className="in-box" type="text" placeholder="Subject" /><br/>
                <textarea style={ currentTheme === "light" ? Themes.light.contact : Themes.dark.contact } className="in-box" placeholder="Message..." /><br/>
                <button className="form-submit" style={ currentTheme === "light" ? Themes.light.resume : Themes.dark.resume }>Submit</button>
            </div>
        </div>
        </section>
    )
}