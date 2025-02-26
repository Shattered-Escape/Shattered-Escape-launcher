import React from 'react';
import Button from './Button';

function AppBar() {
  return (
    <div className="gap-1 flex w-full">
      <Button code="Add Server" />
      <Button code="Client and Server Options" />
      <Button onClick={window.Main.Minimize} code="&#x2013;" />
      <Button onClick={window.Main.Close} code="&#10005;" />
    </div>
  );
}

export default AppBar;
