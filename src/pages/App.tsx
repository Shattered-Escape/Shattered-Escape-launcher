import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicationView from '../components/ApplicationView';
import LeftSide from '../components/Views/LeftSide';
import ServerListView from '../components/Views/ServerListView';
import LoginPageView from '../components/Views/LoginPageView';

export default function App() {
  return (
    <Router>
      <ApplicationView>
        <LeftSide />
        <Routes>
          <Route path="/" element={<ServerListView />} />
          <Route path="/login" element={<LoginPageView />} />
        </Routes>
      </ApplicationView>
    </Router>
  );
}
