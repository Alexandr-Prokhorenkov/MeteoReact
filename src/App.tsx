import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/Header/Header";

function App() {
  return (
    <Router>
      <div className="container ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
