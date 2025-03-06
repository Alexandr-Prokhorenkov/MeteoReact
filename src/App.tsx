import { Route, Routes  } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";
import { PopUp } from "./shared/Popup/Popup";

function App() {
  return (
    <>
    <PopUp/>
    <div className="container ">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mounth-statistics" element={<MonthStatistics/>} />
      </Routes>
      </div>
      </>
  );
}

export default App;
