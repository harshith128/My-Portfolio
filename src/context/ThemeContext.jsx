import { createContext, useState } from "react";
import { Themes } from "./styles";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("Protfoliotheme") || "dark");

    const handleChangeTheme = () => {
        if(currentTheme === "light"){
            setCurrentTheme("dark");
            localStorage.setItem("Protfoliotheme", "dark");
        } else {
            setCurrentTheme("light");
            localStorage.setItem("Protfoliotheme", "light");
        }
    }

    return (
        <ThemeContext.Provider value={{ Themes, currentTheme, setCurrentTheme, handleChangeTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}