import React from 'react';
import Button from './Button';

export default function NavigationBar({ backButton, title }: { backButton?: boolean; title: string }) {
  return (
    <div className="draggable gap-1 items-center flex justify-between w-full">
      {backButton ? <Button type="goBack" /> : <Button type="blank" />}
      <p className="text-zinc-50 text-md">{title}</p>
      <div className="flex gap-1">
        <Button type="minimize" />
        <Button type="close" />
      </div>
    </div>
  );
}
