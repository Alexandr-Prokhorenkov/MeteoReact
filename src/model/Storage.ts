import { Theme } from "../context/themeContext"

export const storage = {
  setItem: (name: string, item: Theme) => {
    localStorage.setItem(name, JSON.stringify(item))
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name)
    if(item) {
      return JSON.parse(item)
    }
  }
}