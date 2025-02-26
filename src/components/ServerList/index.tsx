import React from 'react';
import ServerListItem from './ServerListItem';

export default function ServerList() {
  return (
    <div className="w-full h-full flex flex-col gap-1 overflow-auto">
      <h1 className="pl-1 text-lg bg-amber-600 rounded-t-md font-semibold text-zinc-50">Available Servers</h1>
      <div className="overflow-y-scroll bg-zinc-900 h-full w-full border rounded-t-md border-gray-600 flex flex-col justify-start items-start">
        <ServerListItem name="JET/Altered Escape - 2.2.0.4" />
        <ServerListItem name="Fuck Yeah" />
      </div>
      <button className="grow text-zinc-50 bg-amber-600 hover:bg-amber-800 text-xl border border-transparent rounded-b-md">
        Connect to Server
      </button>
    </div>
  );
}
