import React from 'react';
import { IoAddOutline } from 'react-icons/io5';

export default function AddServerItem() {
  return (
    <button className="flex bg-zinc-900/50 text-zinc-50 w-full items-center justify-start py-1 focus:bg-zinc-900">
      <IoAddOutline className="text-2xl" />
      <p>Add Server</p>
    </button>
  );
}
