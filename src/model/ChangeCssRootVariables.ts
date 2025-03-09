import { Theme } from "../context/themeContext";


export const changeCssRootVariables = (theme: Theme) => {
  const root = document.querySelector(':root') as HTMLElement;
  const components = ['body-background', 'components-background', 'card-background', 'card-shadow', 'text-color','card-hover-background' ];
  components.forEach(component => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`)
  })
}