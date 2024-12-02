// 'use client';

// import React, { useState, ReactNode } from 'react';
// import styled from 'styled-components';
// import Navbar from '../component/ui/navbar/navbar';
// import Sidebar from '../component/ui/sidebar/sidebar';

// const Main = styled.main`
//   width: 100%;
//   display: flex;
// `;

// const Monsidebar = styled.div`
//   display: flex;
//   width: 20%;
// `;

// const Monasidebar = styled.div`
//   width: 80%;
// `;

// interface DashboardLayoutProps {
//   children: ReactNode;
// }

// const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   const [navbarTitle, setNavbarTitle] = useState('Dashboard');

//   const handleSelect = (title: string) => {
//     setNavbarTitle(title);
//   };

//   return (
//     <Main>
//       <Monsidebar>
//         <Sidebar onSelect={handleSelect} />
//       </Monsidebar>
//       <Monasidebar>
//         <Navbar title={navbarTitle} />
//         {children}
//       </Monasidebar>
//     </Main>
//   );
// };

// export default DashboardLayout;





'use client';

import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '../component/ui/navbar/navbar';
import Sidebar from '../component/ui/sidebar/sidebar';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row; /* Par défaut, disposition en ligne pour les grands écrans */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Sur les petits écrans, empiler les éléments */
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
  }
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
