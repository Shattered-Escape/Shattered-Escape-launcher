import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatchNotesPage from '../views/LeftSide/PatchNotesPage';
import OptionsPage from '../views/LeftSide/OptionsPage';

export default function LeftSide() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatchNotesPage />} />
        <Route path="/options" element={<OptionsPage />} />
      </Routes>
    </Router>
  );
}
