import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  background-color: #fff;
  height: 70px;
  width: 80%;
  box-shadow: 0 0.3px 0.3px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 100%; 
    padding: 0;
    margin: 0;
    position: fixed;
    top: -10px;
    display: flex;
  }
`;



export const SectionLogo = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;


  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }
  }
`;




export const Logo = styled.h2`
  display: flex;
  justify-content: start;
  font-weight: 500;
  font-size: 20px;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;


export const Content = styled.div`
  display: grid;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  flex: 1;

  @media (max-width: 768px) {
    display: none;  
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    background-color: white;
    top: 70px;
    left: 0;
    right: 0;
    padding: 20px;
    box-shadow: 0 0.2px 0.3px rgba(0, 0, 0, 0.2);
  }
`;

export const Monnav = styled.div`
 
  input{
       height: 25px;
       border-radius: 25px;
        padding-left: 30px;
       border: 1px solid #CCCDCE;
       width: 180px
      }
        input::placeholder{
         font-size: 12px;
        position: relative;
        top: -3px;
       }
`;

export const Monimg = styled.div`
  font-size: 20px;
  margin-top: 20px;
 

`;
export const Text = styled.div`
     background-color: #EAB308;
   position: relative;
   top: -45px;
   left: 15px;
   margin: 3px;
    color: white;
    font-size: 12px;
    width: 18px;
    height: 18px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
      line-height: 5px; 
      display: inline-block;

      span{
     position: relative;
     top: 6px;
      }

`;

export const Monimg1 = styled.div`
  margin-left: 10px;
  img {
    width: 40px;
    height: 60px;
  }
`;

export const Monimg2 = styled.div`
  margin-top: 20px;
  
  font-size: 20px;
`;

export const MonImg = styled.div`
  margin-top: 12px;
  font-size:25px;
  img {
    width: 15px;
    height: 15px;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  left: 10px;
  top: 20px;
  font-size: 15px;
  color: #CCCDCE;
`;


export const HamburgerIcon = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 30px;
  z-index: 10;

  @media (max-width: 768px) {
    display: block; 
  }
`;


export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  position: relative;
  top: 10px;

  @media (max-width: 768px) {
    display: none; 
  }
`;
export const Menu = styled.div`
  display: flex;
  gap: 20px;
`;
export const Monnavbar = styled.div`
    input{
       height: 25px;
       border-radius: 25px;
        padding-left: 30px;
       border: 1px solid #CCCDCE;
       width: 250px;
      }
        input::placeholder{
         font-size: 12px;
        position: relative;
        top: -3px;
       }
`;
export const Texte = styled.div`
     background-color: #EAB308;
   position: relative;
   top: -45px;
   left: 15px;
   margin: 3px;
    color: white;
    font-size: 12px;
    width: 18px;
    height: 18px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
      line-height: 5px; 
      display: inline-block;

      span{
     position: relative;
     top: 6px;
      }
`;