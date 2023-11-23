import React, { createContext } from 'react';

export type LayoutContextType = {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
} | undefined;

const LayoutContext = createContext<LayoutContextType>(undefined);

export default LayoutContext;
