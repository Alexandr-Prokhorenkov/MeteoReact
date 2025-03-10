import { Theme } from "../context/themeContext"

export const storage = {
  setItem: (name: string, item: Theme) => {
    localStorage.setItem(name, item)
  },
  getItem: (name: string): Theme | null => {
    const item = localStorage.getItem(name);
    return item === Theme.DARK || item === Theme.LIGHT ? item : null;
  }
}