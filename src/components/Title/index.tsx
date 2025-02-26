import React from 'react';
import icon from '../../assets/icon.ico';

export default function Title() {
  return (
    <div className="draggable flex items-start gap-1">
      <div
        className="size-24 aspect-square border border-amber-600 rounded-sm"
        style={{
          backgroundImage: `url(${icon})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      <div className="w-full justify-center items-center gap-1 ">
        <h1 className="text-2xl text-zinc-50 font-black uppercase">Shattered Escape Launcher</h1>
        <p className="text-zinc-400 uppercase">Where the fun begins.</p>
      </div>
    </div>
  );
}
