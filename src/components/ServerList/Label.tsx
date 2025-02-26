import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

export default function Label() {
  return (
    <div className="p-1 flex items-center justify-between gap-1 text-lg bg-amber-600 rounded-t-md font-semibold text-zinc-50">
      <p className="px-2 font-thin">Available Servers</p>
      <button className="flex items-center gap-1 p-1 rounded-sm hover:bg-amber-800">
        <p className="text-xs font-thin uppercase">Add</p>
        <IoAddCircleOutline />
      </button>
    </div>
  );
}
