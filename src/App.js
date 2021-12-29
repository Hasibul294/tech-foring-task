import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInOut from "./Pages/SignInOut/SignInOut";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignInOut />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
