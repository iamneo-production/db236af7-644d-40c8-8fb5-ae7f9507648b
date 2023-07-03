import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import MyOrders from './components/MyOrders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/MyOrders" element={<MyOrders />} />
      </Routes>
    </Router>
  );
}

export default App;