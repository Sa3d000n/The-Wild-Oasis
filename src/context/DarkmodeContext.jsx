import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkmodeContext = createContext();
export default function DarkmodeProvider({ children }) {
  const [isDarkmode, setIsDarkmode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dar)").matches,
    "isDarkmode"
  );
  function toggleDarkmode() {
    setIsDarkmode((isDark) => !isDark);
  }
  useEffect(
    function () {
      if (isDarkmode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkmode]
  );
  return (
    <DarkmodeContext.Provider value={{ isDarkmode, toggleDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}
export function useDarkmode() {
  const context = useContext(DarkmodeContext);
  if (context === undefined)
    throw new Error("useDarkmode is used outside of it's providor");
  return context;
}
