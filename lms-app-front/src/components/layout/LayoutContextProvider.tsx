import React, {
  FC, useEffect, useMemo, useRef, useState,
} from 'react';
import { Grid } from 'antd';
import LayoutContext from './LayoutContext';

type LayoutContextProps = {
  children?: React.ReactNode
};

const LayoutContextProvider: FC<LayoutContextProps> = ({ children }) => {
  const screens = Grid.useBreakpoint();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current && typeof screens?.lg !== 'undefined') {
      firstRender.current = false;
      setCollapsed(!screens?.lg);
    }
  }, [screens?.lg, setCollapsed]);

  const contextValue = useMemo(() => ({
    collapsed,
    setCollapsed,
  }), [collapsed, setCollapsed]);

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
