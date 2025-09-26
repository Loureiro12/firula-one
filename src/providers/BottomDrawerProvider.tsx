import React from 'react';
import { BottomDrawer } from '../components/organisms/BottomDrawer';
import { useBottomDrawerStore } from '../store/bottomDrawerStore';

interface BottomDrawerProviderProps {
  children: React.ReactNode;
}

export const BottomDrawerProvider: React.FC<BottomDrawerProviderProps> = ({ children }) => {
  const { isVisible, title, description, actions, hideBottomDrawer } = useBottomDrawerStore();

  return (
    <>
      {children}
      <BottomDrawer
        isVisible={isVisible}
        title={title}
        description={description}
        actions={actions}
        onClose={hideBottomDrawer}
      />
    </>
  );
};