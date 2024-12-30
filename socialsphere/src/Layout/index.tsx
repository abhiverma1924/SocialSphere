import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Container/Home";
import Pricing from "../Container/Price";
import Dashboard from "../Container/Dashboard";
import { Analytics } from "../Container/Analytics";
import ContactSales from "../Container/ContactSales";
import SignUpPage from "../Container/SignUp";

const Layout: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<ContactSales />} />
        <Route path="/sign-up" element={<SignUpPage/>} />
      </Routes>
    </Router>
  </Suspense>
);

export default Layout;