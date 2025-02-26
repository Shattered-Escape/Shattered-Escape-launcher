import React from 'react';

export default function Button({ onClick, code }: { onClick?: () => void; code: string }) {
  return (
    <button
      className="
      uppercase text-sm
    text-zinc-50
      rounded-sm p-1
    bg-amber-600 hover:bg-amber-800
      grow"
      onClick={onClick}
    >
      {code}
    </button>
  );
}
