import React from 'react';

export default function Button({ onClick, code }: { onClick?: () => void; code: string }) {
  return (
    <button
      className="px-1
      uppercase text-xs
    text-zinc-50 rounded-sm
    bg-amber-600 hover:bg-amber-800"
      onClick={onClick}
    >
      {code}
    </button>
  );
}
