"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import AddHotelModal from './formulaire';
import HotelCard from "./hotelCard";
import { GoPlus } from "react-icons/go";

// Styles
const Liste = styled.div`
   background-color: #f0f0f0;
   height: 300vh;
   padding-top: 70.4px;

   @media (max-width: 768px) {
     padding-top: 0.5px;
     margin-left: -10px;
   }
 `;

const Container = styled.div`
   width: 100%;
   display: inline-block;
   justify-content: space-between;

   @media (max-width: 768px) {
     width: 100%;
     padding: 0 10px;
   }
 `;

const Row = styled.div`
   display: flex;
   width: 100%;
   height: 90px;
   background-color: white;
   padding: 20px;
   justify-content: space-between;
   box-shadow: 0 0.2px 0.5px rgba(0, 0, 0, 0.2);
   position: fixed;
   gap: 500px;

   @media (max-width: 768px) {
     flex-direction: column;
     height: auto;
     position: fixed;
     max-width: 100%;
     gap: 10px;
   }
 `;

const Box = styled.div`
   flex: 1;

   @media (max-width: 768px) {
     width: 100%;
     margin-bottom: 10px;
   }
 `;

const H1 = styled.h2`
   font-weight: 400;
   font-size: 24px;
   display: flex;
   gap: 10px;
   @media (max-width: 768px) {
     font-size: 16px;
   }
 `;

const Button = styled.button`
   padding: 10px 15px;
   background-color: white;
   color: black;
   display: flex;
   height: auto;
   border: 1px solid #abb1bb;
   border-radius: 15px;
   cursor: pointer;
   gap: 5px;


     @media (max-width: 768px) {
      justify-content: end;
   }
 `;
 const ButtonCenter = styled.button`
   padding: 10px 15px;
   background-color: white;
   color: black;
   display: flex;
   height: auto;
   border: 1px solid #abb1bb;
   border-radius: 15px;
   cursor: pointer;
   position: relative;
   top: 40px;
   left: 150px;
   font-size: 27px;
   gap: 5px;
 

    @media (max-width: 768px) {
      justify-content: center;
   }
 `;



const Plus = styled.div`
   font-size: 20px;
   margin-top: 2px;
   margin-left: -4px;
 `;
 const HotelCount = styled.div`
    color: #CECECE;
    margin-top: 2px;
 `;
 const Plusplus = styled.div`
   font-size: 23px;
   font-weight: bold;
   margin-top: 12px;
   margin-left: -4px;
 `;
 const Div = styled.div`
 font-size: 35px; 
 color: blue; 
 text-align: center;
 margin-top: 8rem;
 font-style: italic;
 justify-content: center;
 position: relative;
 left: 250px;
top: 100px;
 `;
const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') ?? "null")

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/hotels');
      setHotels(response.data.hotels);
    } catch (error) {
      console.error('Erreur lors de la récupération des hôtels', error);
    }
  };

  const userHotels = hotels?.filter((elem) => elem.userId === user.id);
  console.log("la liste = ", userHotels);
  

  const handleHotelAdded = (newHotel: any) => {
    setHotels(prevHotels => [newHotel, ...prevHotels]);
  };

  return (
    <Liste>
      <Container>
        <Row>
          <Box>
          <H1>Hôtels 
          <HotelCount>{userHotels.length}</HotelCount>

          </H1>
          </Box>
          <Box>
            <Button onClick={() => setIsModalOpen(true)}>
              <Plus>
                <GoPlus />
              </Plus>
              Créer un nouveau un hôtel
            </Button>
          </Box>
        </Row>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          
         {userHotels.length > 0 ? 
         <> {userHotels.map((hotel) => (
          <HotelCard
           key={hotel._id}
           name={hotel.name}
           address={hotel.address}
           email={hotel.email}
           tel={hotel.tel}
           pricePerNight={hotel.pricePerNight}
           currency={hotel.currency}
           imageUrl={hotel.imageUrl}
         />))}</>
            
          :<><Div style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          Pas d'hotels pour le moment Veuillez en Ajouter
        <Box>
            <ButtonCenter onClick={() => setIsModalOpen(true)}>
              <Plusplus>
                <GoPlus />
              </Plusplus>
              Créer un nouveau un hôtel
            </ButtonCenter>
          </Box>
        </Div></>}
        </div>

        <AddHotelModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onHotelAdded={handleHotelAdded}
        />
      </Container>
    </Liste>
  );
};

export default HotelList;
