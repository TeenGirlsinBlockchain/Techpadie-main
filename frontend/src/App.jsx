// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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

function App() {
  return (
  
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
  
  )
}

export default App