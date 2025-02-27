import React from 'react';
import handleConnectClick from '../../hooks/handleConnectClick';

export default function ConnectButton() {
  return (
    <button
      onClick={handleConnectClick}
      className="grow text-zinc-50 bg-amber-600 hover:bg-amber-800 text-xl border border-transparent rounded-b-md"
    >
      Connect to Server
    </button>
  );
}
