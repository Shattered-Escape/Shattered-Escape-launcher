import React from 'react';
import { IoCloseOutline, IoChevronDownOutline, IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function CloseButton() {
  return (
    <button
      onClick={window.api.Close}
      className="undraggable text-2xl text-zinc-50 bg-red-600 hover:bg-red-800 rounded-sm"
    >
      <IoCloseOutline />
    </button>
  );
}
function BlankButton() {
  return (
    <button className="text-2xl opacity-0">
      <IoCloseOutline />
    </button>
  );
}
function MinimizeButton() {
  return (
    <button
      onClick={window.api.Minimize}
      className="undraggable text-2xl text-zinc-50 bg-amber-600 hover:bg-amber-800 rounded-sm"
    >
      <IoChevronDownOutline />
    </button>
  );
}

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="undraggable text-2xl bg-zinc-300 hover:bg-zinc-500 rounded-md text-zinc-50"
    >
      <IoChevronBackOutline />
    </button>
  );
}

type ButtonProps = 'close' | 'minimize' | 'goBack' | 'blank';

export default function Button({ type }: { type: ButtonProps }) {
  switch (type) {
    case 'close':
      return <CloseButton />;
    case 'minimize':
      return <MinimizeButton />;
    case 'goBack':
      return <GoBackButton />;
    case 'blank':
      return <BlankButton />;
    default:
      return <button className="bg-red-400">N/A</button>;
  }
}
