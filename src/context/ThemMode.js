/** @format */

'use client'

import { createContext, useState } from "react";

export const ThemMode = createContext();

export const ThemModeProvider = ({ children }) => {
    
    const [isDarkMode, setIsDarkMode] = useState("dark");

    const toggleMode = () => {
        setIsDarkMode((prev) => (prev === "dark" ? "light" :"dark"));
    };

    return (
        <ThemMode.Provider value={{ isDarkMode, toggleMode }}>
           <div className={`them ${isDarkMode} `} > {children}</div>
        </ThemMode.Provider>
    );

};
