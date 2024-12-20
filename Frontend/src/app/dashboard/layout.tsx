'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '../navbar/navbar'; 
import Sidebar from '../sidebar/sidebar'; 
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const Monsidebar = styled.div`
  display: flex;
  width: 20%;
  
  @media (max-width: 768px) {
    width: 100%; 
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10; 
    background-color: #fff; 
  }
`;

const Monasidebar = styled.div`
  width: 80%;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 0; 
    margin-top: 60px; 
  }
`;

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [navbarTitle, setNavbarTitle] = useState('Dashboard');
  const [userInfo, setUserInfo] = useState(null); 
  const router = useRouter();

  const handleSelect = (title: string) => {
    setNavbarTitle(title);
  };

  const handleLogout = () => {
    if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
      router.push('/login');
      toast.success("Déconnexion réussie");
      localStorage.removeItem('token');
      localStorage.removeItem('user');      
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
    
    
  //   if (!token) {
  //     toast.error("Vous devez être connecté pour accéder à cette page.");
  //     router.push('/login');
  //     return;
  //   }
    
  // }, [router]);




  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Vous devez être connecté pour accéder à cette page.");
        router.push('/login');
      }
    }
  }, [router]);

  return (
    <Main>
      <Monsidebar>
        <Sidebar onSelect={handleSelect} />
      </Monsidebar>
      <Monasidebar>
        <Navbar title={navbarTitle} onLogout={handleLogout} /> 
        {children}
      </Monasidebar>
    </Main>
  );
};

export default DashboardLayout;