import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import { ThemeProvider } from "./Context/themeContext";
import ThemeButton from "./Components/ThemeButton";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className=" h-screen flex flex-col justify-center items-center text-black  font-medium text-2xl">
          <div>
            <ThemeButton />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
