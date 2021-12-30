import "./App.css";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInOut from "./Pages/SignInOut/SignInOut";
import DashboardHome from "./Pages/Home/DashboardHome/DashboardHome";
import Jobs from "./Pages/Home/Jobs/Jobs";
import Mails from "./Pages/Mails/Mails";
import PrivateRoute from "./Pages/SignInOut/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInOut />} />
          <Route path="/signIn" element={<SignInOut />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/home" element={<DashboardHome />} />
            <Route path="/dashboard/jobs" element={<Jobs />} />
            <Route path="/dashboard/mails" element={<Mails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
