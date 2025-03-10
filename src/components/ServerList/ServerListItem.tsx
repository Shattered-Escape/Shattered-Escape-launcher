import React from 'react';
import { IoTrashOutline, IoPencilOutline } from 'react-icons/io5';

export default function ServerListItem({ name }: { name: string }) {
  return (
    <button className="flex bg-zinc-900/50 text-zinc-50 w-full items-center justify-between px-2 py-1 focus:bg-zinc-900">
      <p>{name}</p>
      <div className="text-lg gap-2 items-center justify-center flex ">
        <IoPencilOutline />
        <IoTrashOutline />
      </div>
    </button>
  );
}
