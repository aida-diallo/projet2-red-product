'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboard } from 'react-icons/md';
import { SiHotelsdotcom } from 'react-icons/si';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { RxAvatar } from 'react-icons/rx';
import {
  Container,
  Logo,
  Adminpro,
  Name,
  P1,
  Navbar,
  Ul,
  Li,
  Span,
  Icon,
  Footer,
  MobileIcons,
  Contact,
  Lign,
  Content,
  Monimg,
  Users,
  P,
} from './style';

interface SidebarProps {
  onSelect: (title: string) => void;
}

const Sidebar = ({ onSelect }: SidebarProps) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);


  const [user, setUser] = useState<{ name: string; status: string }>({
    name: 'Fatou Gueye',
    status: 'En ligne',
  });

  useEffect(() => {
    setIsClient(true);



    const loggedInUser = {
      name: 'Aida Diallo',
      status: 'En ligne',
    };

    setUser(loggedInUser);
  }, []);

  if (!isClient) return null;

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

          <Contact>
            <Lign></Lign>
            <Content>
              <Monimg>
                <RxAvatar />
              </Monimg>
              <Users>
                {/* Affichage dynamique de l'utilisateur connecté */}
                <h1>{user.name}</h1>
                <P>
                  <GrStatusGoodSmall />
                  <p>{user.status}</p>
                </P>
              </Users>
            </Content>
          </Contact>
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
