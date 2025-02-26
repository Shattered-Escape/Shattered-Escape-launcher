import React, { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className=" gap-1 w-full flex flex-col items-start justify-start">{children}</div>;
}
