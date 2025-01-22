import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./HomePage";
import LoginPage from "./components/LoginPage";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
