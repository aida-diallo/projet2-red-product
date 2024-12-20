'use client';

import React, { useState } from 'react';
import {
  Nav, SectionLogo, Logo, Content, Monnav,
  Monimg, Monimg1, IconWrapper, HamburgerIcon, MenuWrapper, Text, Menu,
  Monnavbar, Texte, Monimg2
} from './style';
import { CiSearch } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

interface NavbarProps {
  title: string;
  onLogout: () => void; 
}

const Navbar: React.FC<NavbarProps> = ({ title, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <SectionLogo>
        {/* <LOGO>   */}
        <Logo>
          <h2>{title}</h2> 
        </Logo>
        {/* </LOGO> */}
      </SectionLogo>

      <HamburgerIcon onClick={toggleMenu}>
        &#9776;
      </HamburgerIcon>

      <Content style={{ display: menuOpen ? 'flex' : 'none' }}>
        <Monnavbar>
          <IconWrapper>
            <CiSearch />
          </IconWrapper>
          <input type="text" placeholder="Recherche" />
        </Monnavbar>

        <Menu>
          <Monimg>
            <FaRegBell />
            <Texte>
              <span>3</span>
            </Texte>
          </Monimg>

          <Monimg1>
            <img src="/List.png" alt="icon" />
          </Monimg1>

          <div onClick={onLogout} style={{ cursor: 'pointer' }}>
            <Monimg2>
              <FiLogOut />
            </Monimg2>
          </div>
        </Menu>
      </Content>

      <MenuWrapper>
        <Monnav>
          <IconWrapper>
            <CiSearch />
          </IconWrapper>
          <input type="text" placeholder="Recherche" />
        </Monnav>

        <Monimg>
          <FaRegBell />
          <Text>
            <span>3</span>
          </Text>
        </Monimg>

        <Monimg1>
          <img src="/List.png" alt="icon" />
        </Monimg1>

        {/* Déconnexion avec gestion d'événement */}
        <div onClick={onLogout} style={{ cursor: 'pointer' }}>
          <Monimg2>
            <FiLogOut />
          </Monimg2>
        </div>
      </MenuWrapper>
    </Nav>
  );
};

export default Navbar;