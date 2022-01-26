/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import  React, { useState, createContext } from 'react';

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <SidebarContext.Provider value={{ sidebarToggle, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
