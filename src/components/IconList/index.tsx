import React from 'react';
import Button from './Button';

export default function IconList() {
  return (
    <div className="w-full flex gap-1 ">
      {/* <Button path="/patreon" label="Patreon" /> */}
      <Button path="/" label="Notes" />
      {/* <Button path="/discord" label="JET Discord" /> */}
      {/* <Button path="/wiki" label="Wiki" /> */}
      <Button path="/options" label="Options" />
    </div>
  );
}
