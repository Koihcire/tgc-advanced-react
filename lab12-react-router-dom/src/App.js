// import react router stuff
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //link routes and route only works when placed inside a router 
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import SubmittedForm from "./pages/SubmittedForm";
import Postpage from "./pages/Postpage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <nav>
          <ul style={{display:"flex", listStyle:"none", justifyContent:"start", gap:"20px"}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/posts" >Posts</Link>
            </li>
          </ul>
          {/* import the routes */}
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home/>} />
            {/* About Us route */}
            <Route path="/about" element={<AboutUs/>} />
            {/* Contact Us route */}
            <Route path="/contact" element={<ContactUs/>} />
            {/* Products route */}
            <Route path="/products" element={<Products/>} />
            <Route path="/form-submitted" element={<SubmittedForm/>} />
            <Route path="/posts" element={<Postpage />} />

          </Routes>
        </nav>
      </Router>
    </React.Fragment>
  );
}

export default App;
