import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import OrganizationDetails from "./admin/OrganizationDetails";
// import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/organization" element={<OrganizationDetails />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
