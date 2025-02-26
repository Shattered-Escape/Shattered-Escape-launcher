import React from 'react';
import Button from './Button';

export default function IconList() {
  return (
    <div className="w-full flex gap-1 ">
      <Button label="Patreon" />
      <Button label="Docs" />
      <Button label="JET Discord" />
      <Button label="Wiki" />
      <Button label="Options" />
    </div>
  );
}
