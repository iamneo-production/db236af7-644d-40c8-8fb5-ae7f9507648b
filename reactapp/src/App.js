import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import HoamePage from "./components/Customer/HoamePage/HoamePage";
import PlaceOrder from "./components/Customer/PlaceOrder/PlaceOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HoamePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
