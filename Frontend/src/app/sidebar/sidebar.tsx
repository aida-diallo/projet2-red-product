'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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

interface User {
  name: string;
  email: string;
  id: string;
}

const Sidebar = ({ onSelect }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const user = JSON.parse(localStorage.getItem('user') ?? "null") as User
  

    if (user) {
      setUser({
        name: user.name,
        id: user.id,
        email: user.email,
      });
    } else {
      router.push('/login');
    }
  }, [router]);

  if (!isClient || !user) return null;

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <MdDashboard aria-label="Dashboard" />,
      path: '/dashboard',
    },
    {
      title: 'Liste des hôtels',
      icon: <SiHotelsdotcom aria-label="Liste des hôtels" />,
      path: '/dashboard/liste',
    },
  ];

  return (
    <Container>
      <Logo>
        <img src="/icon.png" alt="icon" />
        <h2>RED PRODUCT</h2>
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
          <Lign />
          <Content>
            <Monimg>
              <RxAvatar />
            </Monimg>
            <Users>
              <h1>{user.name || 'Nom inconnu'}</h1>
              <P>
                <GrStatusGoodSmall />
                <p>{'En ligne'}</p>
              </P>
            </Users>
          </Content>
        </Contact>
      </Navbar>

      {/* Footer Mobile */}
      <Footer>
        <MobileIcons>
          {menuItems.map(({ title, icon, path }) => (
            <Link key={title} href={path}>
              {React.cloneElement(icon, {
                className: pathname === path ? 'active' : '',
                'aria-label': title,
              })}
            </Link>
          ))}
        </MobileIcons>
      </Footer>
    </Container>
  );
};

export default Sidebar;