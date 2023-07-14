import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import HoamePage from "./components/Customer/HoamePage/HoamePage";
import PlaceOrder from "./components/Customer/PlaceOrder/PlaceOrder";
import MyOrders from "./components/MyOrders";
import EditOrder from "./components/EditOrder";
import Adminthemes from "./components/Admin/Adminthemes/Adminthemes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HoamePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/editOrder" element={<EditOrder />} />
        <Route path="/adminthemes" element={<Adminthemes />} />
      </Routes>
    </Router>
  );
}

export default App;
