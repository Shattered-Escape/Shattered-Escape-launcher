import React, { ReactNode } from 'react';
import bgImage from '../../assets/bgImage.jpg';

export default function ApplicationView({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      className="border p-1 gap-1 border-amber-600 rounded-lg w-screen h-screen flex flex-1 grow items-stretch justify-between"
    >
      {children}
    </div>
  );
}
