import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout = ({ children }) => {
  return (
    <main className="container-fluid px-0">
      <Header />
      <div className="d-flex" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Sidebar />
        <div className="flex-grow-1 overflow-auto">
          {children}
        </div>
      </div>
    </main>
  );
};
