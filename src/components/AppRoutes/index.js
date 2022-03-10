import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import Analytics from '../Analytics';
import ButtonAppBar from '../AppBar';
import Dashboard from '../Dashboard';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* <Route exact path="/analytics" element={<Analytics />} /> */}
        <Route exact path="/home" element={<ButtonAppBar />} />
        <Route
          exact
          path="/"
          element={<Navigate to="/home" />}
        />
      </Routes>
    </BrowserRouter >
  );

}
