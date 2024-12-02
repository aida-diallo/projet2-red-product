// 'use client';
// import React from 'react';
// import {
//   Container, Logo, Admin, Adminpro, Name, P1, Navbar, Ul, Li, Span, Icon, Footer,
//   MobileIcons
// } from './style';
// import Link from 'next/link';
// import { MdDashboard } from "react-icons/md";
// import { SiHotelsdotcom } from "react-icons/si";

// const Sidebar = ({ onSelect }: { onSelect: (title: string) => void }) => {
//   return (
//     <>
//       {/* Sidebar Desktop */}
//       <Container>
//         <Logo>
//           <img src="/icon.png" alt="icon" />
//           <h1>RED PRODUCT</h1>
//         </Logo>
//         <Name>
//           <P1>Principal</P1>
//         </Name>
//         <Navbar>
//           <Ul>
//             <Li onClick={() => onSelect('Dashboard')}>
//               <Link href="/dashboard">
//                 <Adminpro>
//                   <Icon><MdDashboard /></Icon>
//                   <Span>Dashboard</Span>
//                 </Adminpro>
//               </Link>
//             </Li>

//             <Li onClick={() => onSelect('Liste des Hôtels')}>
//               <Link href="/dashboard/liste">
//                 <Admin>
//                   <Icon><SiHotelsdotcom /></Icon>
//                   <Span>Liste des hôtels</Span>
//                 </Admin>
//               </Link>
//             </Li>

//           </Ul>
//         </Navbar>
//       </Container>

//       {/* Footer Mobile */}
//       <Footer>
//         <MobileIcons>
//           <Link href="/dashboard">
//             <MdDashboard />
//           </Link>
//           <Link href="/dashboard/liste">
//             <SiHotelsdotcom />
//           </Link>
//         </MobileIcons>
//       </Footer>
//     </>
//   );
// };

// export default Sidebar;



'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Container, Logo, Adminpro, Admin, Name, P1, Navbar, Ul, Li, Span, Icon, Footer, MobileIcons,
} from './style';
import { MdDashboard } from 'react-icons/md';
import { SiHotelsdotcom } from 'react-icons/si';

const Sidebar = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return null; 

  return (
    <>
    
      <Container>
        <Logo>
          <img src="/icon.png" alt="icon" />
          <h1>RED PRODUCT</h1>
        </Logo>
        <Name>
          <P1>Principal</P1>
        </Name>
        <Navbar>
          <Ul>
          
            <Li className={pathname === '/dashboard' ? 'active' : ''}>
              <Link href="/dashboard">
                <Adminpro>
                  <Icon className="icon">
                    <MdDashboard />
                  </Icon>
                  <Span className="text">Dashboard</Span>
                </Adminpro>
              </Link>
            </Li>

          
            <Li className={pathname === '/dashboard/liste' ? 'active' : ''}>
              <Link href="/dashboard/liste">
                <Admin>
                  <Icon className="icon">
                    <SiHotelsdotcom />
                  </Icon>
                  <Span className="text">Liste des hôtels</Span>
                </Admin>
              </Link>
            </Li>
          </Ul>
        </Navbar>
      </Container>

      {/* Footer Mobile */}
      <Footer>
        <MobileIcons>
          <Link href="/dashboard">
            <MdDashboard
              className={pathname === '/dashboard' ? 'active' : ''}
            />
          </Link>
          <Link href="/dashboard/liste">
            <SiHotelsdotcom
              className={pathname === '/dashboard/liste' ? 'active' : ''}
            />
          </Link>
        </MobileIcons>
      </Footer>
    </>
  );
};

export default Sidebar;
