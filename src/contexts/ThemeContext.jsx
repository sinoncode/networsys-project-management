import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('theme-CeruleanBlue');
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [rightbarHidden, setRightbarHidden] = useState(false);
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [hasGradient, setHasGradient] = useState(false);
  const [isBoxLayout, setIsBoxLayout] = useState(false);
  const [radiusZero, setRadiusZero] = useState(false);

  // Apply theme to body
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.setAttribute('data-bvite', theme);
    }
  }, [theme]);

  // Apply sidebar state to body
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (sidebarHidden) {
        body.classList.add('sidebar-hide');
      } else {
        body.classList.remove('sidebar-hide');
      }
    }
  }, [sidebarHidden]);

  // Apply rightbar state to body
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (rightbarHidden) {
        body.classList.add('rightbar-hide');
      } else {
        body.classList.remove('rightbar-hide');
      }
    }
  }, [rightbarHidden]);

  // Apply monochrome state
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isMonochrome) {
        body.classList.add('monochrome');
      } else {
        body.classList.remove('monochrome');
      }
    }
  }, [isMonochrome]);

  // Apply gradient state
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (hasGradient) {
        body.classList.add('gradient');
      } else {
        body.classList.remove('gradient');
      }
    }
  }, [hasGradient]);

  // Apply box layout
  useEffect(() => {
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    if (body && main) {
      if (isBoxLayout) {
        main.classList.add('container');
        main.classList.remove('container-fluid');
        body.classList.add('box-layout', 'rightbar-hide');
      } else {
        main.classList.add('container-fluid');
        main.classList.remove('container');
        body.classList.remove('box-layout', 'rightbar-hide');
      }
    }
  }, [isBoxLayout]);

  // Apply radius-0
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (radiusZero) {
        body.classList.add('radius-0');
      } else {
        body.classList.remove('radius-0');
      }
    }
  }, [radiusZero]);

  const toggleSidebar = () => setSidebarHidden(!sidebarHidden);
  const toggleRightbar = () => setRightbarHidden(!rightbarHidden);
  const toggleMonochrome = () => setIsMonochrome(!isMonochrome);
  const toggleGradient = () => setHasGradient(!hasGradient);
  const toggleBoxLayout = () => setIsBoxLayout(!isBoxLayout);
  const toggleRadiusZero = () => setRadiusZero(!radiusZero);

  const value = {
    theme,
    setTheme,
    sidebarHidden,
    toggleSidebar,
    rightbarHidden,
    toggleRightbar,
    isMonochrome,
    toggleMonochrome,
    hasGradient,
    toggleGradient,
    isBoxLayout,
    toggleBoxLayout,
    radiusZero,
    toggleRadiusZero,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
