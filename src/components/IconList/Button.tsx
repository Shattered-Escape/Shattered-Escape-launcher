import React from 'react';

export default function Button({ label }: { label: string }) {
  return (
    <p
      className="
    text-zinc-50 
    bg-amber-600 hover:bg-amber-800
     whitespace-nowrap text-center px-1 text-md rounded-sm grow"
    >
      {label}
    </p>
  );
}
