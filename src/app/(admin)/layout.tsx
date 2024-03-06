import React from 'react';
import Sidebar from '../components/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log('render');

  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
