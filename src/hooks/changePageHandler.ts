import React from 'react';

const useChangePageHandler = (targetComponent: React.FC, newComponent: React.FC): (() => void) => {
  const [, setComponent] = React.useState<React.FC>(targetComponent);

  const changeComponent = () => {
    setComponent(newComponent);
  };

  return changeComponent;
};

export default useChangePageHandler;
