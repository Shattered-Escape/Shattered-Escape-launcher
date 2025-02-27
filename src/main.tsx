import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import ApplicationView from './components/ApplicationView';
import LeftSide from './pages/LeftSide';
import RightSide from './pages/RightSide';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApplicationView>
      <LeftSide />
      <RightSide />
    </ApplicationView>
  </React.StrictMode>
);
