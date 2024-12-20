
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
    width: 100%;
    height: 60px; 
    position: fixed;
    background-image: none;
    bottom: 0;
    background-color: #f8f9fa;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-left: -80px;

  img {
    width: 30px;
    height: 30px;
  }

  h2 {
    color: white;
    font-weight: 700;
    text-align: center;
    font-size: 25px;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Adminpro = styled.div`
  display: flex;
  margin-top: 25px;
  width: 258px;
  height: 50px;
    transition: none;
    gap: 0;
  transition-property: none;

  span {
    margin-left: 10px;
    margin-top: 6px;
  }



  @media (max-width: 768px) {
    display: none;
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
 transition: none !important;
  transition-property: none !important;



  @media (max-width: 768px) {
    font-size: 18px; 
    margin-top: 0;
  }
`;

export const P1 = styled.p`
  font-size: 15px;
  margin-top: 30px;
  color: white;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none; 
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
   padding: 0;
   margin: 0;
   &.active {
     background-color: #f0f0f0;
     color: white;
     background-size: cover;
      width: 340px;
     height: 50px;
     gap: 0;
     padding: 0;
     margin: 0;
     border: none;
    transition: none !important;
  transition-property: none !important;

      @media (min-width: 781px) and (max-width: 1072px){
       display: none;
       }
       @media (max-width: 780px) {
      display: none;
       }
      @media (min-width: 1073px) and (max-width: 1200px) {
        width: 280px;
       }
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
        @media (max-width: 768px) {
      width: 40px;
       }
`;

export const Span = styled.span`
  font-size: 16px;
  text-decoration: none !important;
  color: white;
  margin-left: 10px;
 transition: none !important;
  transition-property: none !important;
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

 @media (max-width: 768px){
  display: none;
 }
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
