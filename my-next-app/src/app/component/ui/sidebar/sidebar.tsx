
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboard } from 'react-icons/md';
import { SiHotelsdotcom } from 'react-icons/si';
import {
  Container, Logo, Adminpro, Admin, Name, P1, Navbar, Ul, Li, Span, Icon, Footer, MobileIcons,
} from './style';

interface SidebarProps {
  onSelect: (title: string) => void;
}

const Sidebar = ({ onSelect }: SidebarProps) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <MdDashboard />,
      path: '/dashboard',
    },
    {
      title: 'Liste des hôtels',
      icon: <SiHotelsdotcom />,
      path: '/dashboard/liste',
    },
  ];

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
            {menuItems.map(({ title, icon, path }) => (
              <Li key={title} className={pathname === path ? 'active' : ''}>
                <Link href={path}>
                  <Adminpro onClick={() => onSelect(title)}>
                    <Icon className="icon">{icon}</Icon>
                    <Span className="text">{title}</Span>
                  </Adminpro>
                </Link>
              </Li>
            ))}
          </Ul>
        </Navbar>
      </Container>

      {/* Footer Mobile */}
      <Footer>
        <MobileIcons>
          {menuItems.map(({ title, icon, path }) => (
            <Link key={title} href={path}>
              {React.cloneElement(icon, {
                className: pathname === path ? 'active' : '',
              })}
            </Link>
          ))}
        </MobileIcons>
      </Footer>
    </>
  );
};

export default Sidebar;
