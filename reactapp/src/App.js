import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
