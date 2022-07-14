import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Watch from "../Pages/Watch/Watch";
import EditProfile from "../Pages/EditProfile/EditProfile";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/Watch/:id/:type" element={<Watch />} />
      </Routes>
      <Routes>
        <Route exact path="/edit-profiles" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default Routers;
