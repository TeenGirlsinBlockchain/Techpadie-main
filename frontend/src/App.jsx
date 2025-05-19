import {
  BrowserRouter as Router,
  Routes,
  Route,
  // eslint-disable-next-line no-unused-vars
  useLocation,
} from "react-router-dom";
import './index.css'
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
  
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
  
  )
}

export default App