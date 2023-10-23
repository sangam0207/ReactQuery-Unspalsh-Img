import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();

export const UseProvider = () => {
  return useContext(AppContext);
};
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchItem, setSearchItem] = useState("cat");
  const toggleDarkTheme = () => {
    let newToggle = !isDarkTheme;
    setIsDarkTheme(newToggle);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");
    console.log(body);
  };
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchItem, setSearchItem }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
