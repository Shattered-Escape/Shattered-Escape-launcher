import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServerListItem from './ServerListItem';
import Label from './Label';

export default function ServerList() {
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  const handleConnectClick = () => {
    if (isConnected) {
      setIsConnected(false);
      navigate('/');
    } else {
      setIsConnected(true);
      navigate('/login');
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-1 overflow-auto">
      <Label />
      <div className="overflow-y-auto bg-zinc-900/50 backdrop-blur-lg h-full w-full border border-zinc-600 flex flex-col justify-start items-start">
        <ServerListItem name="JET/Altered Escape - 2.2.0.4" />
        <ServerListItem name="Fuck Yeah" />
      </div>
      <button
        onClick={handleConnectClick}
        className="grow text-zinc-50 bg-amber-600 hover:bg-amber-800 text-xl border border-transparent rounded-b-md"
      >
        Connect to Server
      </button>
    </div>
  );
}
