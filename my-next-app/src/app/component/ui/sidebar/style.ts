import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 20%;
  position: fixed;
  background-image: url(/background.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;

  @media (max-width: 768px) {
    width: 100%; // Le Sidebar devient un footer en mobile
    height: auto; // Le footer ne prend pas 100vh
    position: fixed;
    bottom: 0;
    background-color: #f8f9fa; // couleur de fond du footer mobile
  }
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;

  img {
    width: 20px;
    height: 20px;
  }

  h1 {
    color: white;
    font-weight: 700;
    text-align: center;
    font-size: 18px;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin: 10px auto;
  }
`;

export const Adminpro = styled.div`
  display: flex;
  margin-top: 25px;
  width: 258px;
  height: 50px;

  span {
    margin-left: 10px;
    margin-top: 6px;
  }

  span:hover {
    color: black;
  }

  @media (max-width: 768px) {
    display: none; // Cache Adminpro sur mobile
  }
`;

export const Admin = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-start;
`;

export const Name = styled.div``;

export const Icon = styled.div`
  margin-left: 20px;
  width: 20px;
  height: 20px;
  margin-top: 10px;
  color: white;
  font-size: 16px;

  &:hover {
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 18px; // Agrandir les icônes sur mobile
    margin-top: 0;
  }
`;

export const P1 = styled.p`
  font-size: 15px;
  margin-top: 30px;
  color: white;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: none; // Cacher P1 sur mobile
  }
`;

export const Ul = styled.ul`
  display: inline-block;

  @media (max-width: 768px) {
    display: none; // Cacher le menu complet sur mobile
  }
`;

export const Navbar = styled.nav``;

export const Li = styled.li`
  &:hover {
    color: black;
    background-color: #F0F0F0;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  text-decoration: none !important;
  color: white;
  margin-left: 10px;
`;

export const Footer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f8f9fa;
    justify-content: center;
    padding: 10px;
    box-shadow: 0 0.2px 0.3px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;

export const MobileIcons = styled.div`
  display: flex;
  gap: 30px;

  img, svg {
    width: 25px;
    height: 25px;
  }
`;

