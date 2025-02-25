import React from 'react';

function Button({ onClick, code }: { onClick: () => void; code: string }) {
  return (
    <button
      className="text-gray-100 rounded-sm px-4 bg-gray-900 whitespace-nowrap hover:bg-gray-800 border border-transparent hover:border-gray-600"
      onClick={onClick}
    >
      {code}
    </button>
  );
}

function AppBar() {
  return (
    <div className="w-full bg-gray-800 p-1 flex justify-end items-center draggable">
      <div className="undraggable inline-flex gap-1">
        {/* REMOVE ESLINT RULES AFTER IMPLEMENTING */}
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <Button onClick={() => {}} code="Add Server" />
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <Button onClick={() => {}} code="Client and Server Options" />
        <Button onClick={window.Main.Minimize} code="&#x2013;" />
        <Button onClick={window.Main.Close} code="&#10005;" />
      </div>
    </div>
  );
}

export default AppBar;
