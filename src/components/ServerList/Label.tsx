import React from 'react';
import { FcPlus } from 'react-icons/fc';

export default function Label() {
  return (
    <div className="p-1 flex items-center justify-between gap-1 text-lg bg-amber-600 border rounded-t-md font-semibold text-zinc-50">
      <p className="px-2">Available Servers</p>
      <button className="flex items-center gap-2 p-1 rounded-sm border border-transparent hover:border-amber-800">
        <p className="text-sm">Add</p>
        <FcPlus />
      </button>
    </div>
  );
}
