import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInOut from "./Pages/SignInOut/SignInOut";
import Jobs from "./Pages/Home/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignInOut />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/job" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
