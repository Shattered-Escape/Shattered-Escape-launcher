import React from 'react';

export default function ServerListItem({ name }: { name: string }) {
  return (
    <button className="bg-zinc-900/50 text-sm text-zinc-50 w-full text-left px-2 py-1 focus:bg-zinc-900">{name}</button>
  );
}
