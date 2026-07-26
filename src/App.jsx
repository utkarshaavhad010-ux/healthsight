import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Qualification from "./Pages/Qualification";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
       <Route path="/qualification" element={<Qualification />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;