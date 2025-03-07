import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
);
