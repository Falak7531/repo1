import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function MainLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, marginLeft: '220px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
