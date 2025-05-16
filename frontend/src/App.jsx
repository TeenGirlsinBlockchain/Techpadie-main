// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import './index.css'
import SignUp from "./pages/SignUp";

function App() {
  return (
  
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {/* Add more routes as needed */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
  
  )
}

export default App