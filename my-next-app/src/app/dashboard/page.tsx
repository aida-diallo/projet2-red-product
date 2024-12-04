
'use client';

import React from 'react';
import styled from 'styled-components';
import { FaEnvelopeOpen } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";

// Styled-components
const Div = styled.div`
    background-color: #F0F0F0;
    height: 1000vh;
    padding-top: 70px;
  @media (max-width: 768px) {
    padding-top: 71px;
  }
`;

const Header = styled.div`
  background-color: white;
  // border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
    margin: 0;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #777;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    text-align: center;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin: 30px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px; 
  }
`;

const Box = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;
  padding: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%; 
    max-width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

const IconWrapper = styled.div<{ bgColor?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  background-color: ${(props) => props.bgColor || "#A88ADD"};
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
    margin-right: 10px;
  }
`;

const Content = styled.div`
  flex: 1;

  h2 {
    font-size: 18px;
    margin: 0;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #777;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
`;

// Tableau des KPI
const kpis = [
  {
    id: 1,
    number: "125",
    name: "Formulaires",
    para: "Formulaires soumis récemment",
    icon: <FaEnvelopeOpen />,
    bgColor: "#FF5733",
  },
  {
    id: 2,
    number: "40",
    name: "Utilisateurs",
    para: "Nombre d'utilisateurs actifs",
    icon: "P",
    bgColor: "#0CC2AA",
  },
  {
    id: 3,
    number: "600",
    name: "Clients",
    para: "Clients enregistrés",
    icon: <FaUserFriends />,
    bgColor: "#4CAF50",
  },
  {
    id: 4,
    number: "25",
    name: "E-mails",
    para: "E-mails envoyés aujourd'hui",
    icon: <FaEnvelopeOpen />,
    bgColor: "#F90000",
  },
  {
    id: 5,
    number: "40",
    name: "Hôtels",
    para: "Hôtels partenaires",
    icon: "P",
    bgColor: "#9C27B0",
  },
  {
    id: 6,
    number: "02",
    name: "Entités",
    para: "Entités en collaboration",
    icon: <FaUserFriends />,
    bgColor: "#1565C0",
  },
];

const Page = () => {
  return (
    <Div>
      <Header>
        <h1>Bienvenue sur RED Product</h1>
        <p>Découvrez les statistiques de vos activités</p>
      </Header>
      <Flex>
        {kpis.map((kpi) => (
          <Box key={kpi.id}>
            <IconWrapper bgColor={kpi.bgColor}>{kpi.icon}</IconWrapper>
            <Content>
              <h2>{kpi.number} {kpi.name}</h2>
              <p>{kpi.para}</p>
            </Content>
          </Box>
        ))}
      </Flex>
    </Div>
  );
};

export default Page;
