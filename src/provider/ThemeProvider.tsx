import { useState } from "react";
import { Theme, ThemeContext } from "../context/themeContext";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const savedTheme = storage.getItem('theme')
  const [theme, setTheme] = useState<Theme>(savedTheme === Theme.DARK || savedTheme === Theme.LIGHT ? savedTheme: Theme.LIGHT);

  changeCssRootVariables(theme)

  const changeTheme = (newTheme: Theme) => {
    storage.setItem('theme', newTheme)
    setTheme(newTheme)
    changeCssRootVariables(newTheme)
  }
  return <ThemeContext.Provider value={{
    theme, changeTheme
  }} {...props}>{children}</ThemeContext.Provider>;
};
