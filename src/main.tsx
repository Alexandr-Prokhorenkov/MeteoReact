import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
