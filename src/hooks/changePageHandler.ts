import { ReactNode, useState } from 'react';

export default function useChangePageHandler(targetComponent: ReactNode, newComponent: ReactNode) {
  const [, setComponent] = useState(targetComponent);

  const changeComponent = () => {
    setComponent(newComponent);
  };

  return changeComponent;
}
