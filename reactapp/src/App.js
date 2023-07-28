import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

// AUTH COMPONENTS
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

// ROUTING COMPONENTS
import LoginRoute from "./components/routes/LoginRoute";
import UserRoutes from "./components/routes/UserRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";

// USER COMPONENTS
import MyOrders from "./components/Customer/MyOrders/MyOrders";
import EditOrder from "./components/Customer/EditOrder/EditOrder";
import PlaceOrder from "./components/Customer/PlaceOrder/PlaceOrder";
import HomePage from "./components/Customer/HomePage/HomePage";

// ADMIN COMPONENTS
import AdminThemes from "./components/Admin/AdminThemes/AdminThemes";
import AdminGifts from "./components/Admin/AdminGifts/AdminGifts";
import AdminViewOrders from "./components/Admin/AdminOrders/AdminViewOrders";
import AdminSignUp from "./components/Admin/AdminSignup/AdminSignup"

// TESTING COMPONENTS
import Test from "./components/Test";
import AdminTest from "./components/Admin/AdminTest";

function App() {
  axios.defaults.baseURL =
  "https://8080-dadecaeedcbbfdebbecaddaeffdec.project.examly.io";
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
          <Route path="Home" element={<HomePage />} />
          <Route path="test" element={<Test />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="editorder" element={<EditOrder />} />
          <Route path="placeorder" element={<PlaceOrder />} />
        </Route>

        <Route element={<AdminRoutes />} path="admin">
          <Route element={<AdminSignUp/>} path="signup"/>
          <Route element={<AdminTest />} path="gift" />
          <Route element={<AdminThemes />} path="themes" />
          <Route element={<AdminGifts />} path="gifts" />
          <Route element={<AdminViewOrders />} path="orders" />
        </Route>

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
