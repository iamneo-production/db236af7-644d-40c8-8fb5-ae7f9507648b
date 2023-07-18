import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import MyOrders from "./components/MyOrders.jsx";
import EditOrder from "./components/EditOrder";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import UserRoutes from "./components/routes/UserRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";
import Test from "./components/User/Test";
import "./App.css";
import AdminTest from "./components/Admin/AdminTest";
import LoginRoute from "./components/routes/LoginRoute";
import PlaceOrder from "./components/Customer/PlaceOrder/PlaceOrder";
import HoamePage from './components/Customer/HoamePage/HoamePage';
import Adminthemes from "./components/Admin/Adminthemes/Adminthemes";
import AddGift from "./components/Admin/AddGift/AddGift";
import Orders from "./components/Admin/Orders/Orders";

function App() {
  axios.defaults.baseURL = "http://localhost:8080";
  const token = localStorage.getItem("Auth");
  if (token) axios.defaults.headers.common["Authorization"] = token;
  else delete axios.defaults.headers.common["Authorization"];

  return (
    <Router>
      <Routes>
        <Route element={<LoginRoute />} path="/">
          <Route element={<Login />} path="" />
        </Route>
        <Route element={<UserRoutes />} path="user">
          <Route path="home"element={<HoamePage/> }/>
          <Route path="test" element={<Test />}/>
          <Route path="myorders" element={<MyOrders />} />
          <Route path="editorder" element={<EditOrder />} />
          <Route path="placeorder" element={<PlaceOrder/>}/>
        </Route>
        <Route element={<AdminRoutes />} path="admin">
          <Route element={<AdminTest />} path="gift" />
          <Route element={<Adminthemes />} path="themes" />
          <Route element={<AddGift />} path="gifts" />
          <Route element={<Orders />} path="orders" />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
