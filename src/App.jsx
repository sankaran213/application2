import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./HomePage";
import LoginPage from "./components/LoginPage";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ApiKeyForm from "./components/Apiform";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/onboard-genai" element={<ApiKeyForm />} />
        <Route path="/llm-observability" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
