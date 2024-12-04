
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
    width: 30px;
    height: 30px;
  }

  h1 {
    color: white;
    font-weight: 700;
    text-align: center;
    font-size: 25px;
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
    display: none; 
  }
`;

export const Navbar = styled.nav`
margin: 0;
padding: 0;
`;

export const Li = styled.li`
   margin: 5px 0;
  //  border-radius: 8px;
  //  transition: all 0.3s ease;

   &.active {
     background-color: #f0f0f0;
     color: white;
     padding: 0px 40px;
     height: 50px;
     border: none;
   }

   &.active .icon {
     color: #4a4e52;
     position: relative;
     top: -15px;
   }

   &.active .text {
     color: #4a4e52;
     font-weight: bold;
     position: relative;
     top: -15px;
   }

   a {
     text-decoration: none;
     display: flex;
     align-items: center;
     color: white;
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
export const Contact = styled.div`
display: grid;
position: relative;
top: 350px;
`;
export const Lign = styled.div`
 border-top: 1px solid white;
 margin: 0;
 width: 90%;
`;
export const Content = styled.div`
display: flex;
padding: 20px;
gap: 10px;
`;
export const Monimg = styled.div`
   font-size: 60px;
   color: #DADBDB;
   padding-top: 10px;
`;
export const Users = styled.div`
display: grid;

h1{
  font-size: 25px;
  color: #DADBDB;
  margin: 10px;
}
`;
export const P = styled.div`
   display: flex;
   color: #1EAF74;
   gap: 10px;
   position: relative;
   top: -5px;
   p{
     color: #9D9FA0;
     position: relative;
    top: -5px;
   }
`;