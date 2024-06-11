import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./views/Products";
import Invoices from "./views/Invoices";
import Orders from "./views/Orders";
import Login from "./views/Login";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
