import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServerListPage from '../views/RightSide/ServerListPage';
import LoginPage from '../views/RightSide/LoginPage';

export default function RightSide() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServerListPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
