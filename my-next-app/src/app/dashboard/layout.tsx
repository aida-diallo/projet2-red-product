'use client';  // Ajoutez cette ligne au début du fichier

import styled from 'styled-components';
import React, { useState, ReactNode } from 'react';
import Navbar from '../component/ui/navbar/navbar';
import Sidebar from '../component/ui/sidebar/sidebar';

const Main = styled.main`
  width: 100%;
  display: flex;
`;

const Monsidebar = styled.div`
  display: flex;
  width: 20%;
`;

const Monasidebar = styled.div`
  width: 80%;
`;

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [navbarTitle, setNavbarTitle] = useState('Dashboard');

  const handleSelect = (title: string) => {
    setNavbarTitle(title);
  };

  return (
    <Main>
      <Monsidebar>
        <Sidebar onSelect={handleSelect} />
      </Monsidebar>
      <Monasidebar>
        <Navbar title={navbarTitle} />
        {children}
      </Monasidebar>
    </Main>
  );
};

export default DashboardLayout;