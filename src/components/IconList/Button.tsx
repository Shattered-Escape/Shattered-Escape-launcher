import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button({ label, path }: { label: string; path: string }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="
    text-zinc-50 
    bg-amber-600 hover:bg-amber-800
     whitespace-nowrap text-center px-1 text-md rounded-sm grow"
    >
      {label}
    </button>
  );
}
