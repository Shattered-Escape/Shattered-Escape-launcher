import React from 'react';
import AppBar from '../components/AppBar';
import SafeView from '../components/SafeView';

function Slogan() {
  return (
    <div className="items-start">
      <h1 className="text-3xl">
        Shattered Escape <br />
        Launcher
      </h1>
      <p className="text-gray-400">Where the fun begins.</p>
    </div>
  );
}

function App() {
  return (
    <SafeView>
      <AppBar />
      <div className="gap-8 p-4 h-full flex flex-row items-start justify-between">
        <Slogan />
        <div className="p-4 bg-red-400 h-full">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </SafeView>
  );
}

export default App;
