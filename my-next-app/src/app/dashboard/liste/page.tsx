
// "use client";
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Modal from "./formulaire"; 
// import HotelCard from "./hotelCard";  

// // Styles pour ListePage
// const Liste = styled.div`
//   background-color: #f0f0f0;
//   height: 1000vh;
//   padding-top: 70.4px;

//   @media (max-width: 768px) {
//     height: auto;
//     padding-top: 70.4px;
  
//    margin-left: -10px;
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   display: inline-block;
//   justify-content: space-between;

//   @media (max-width: 768px) {
//     width: 100%;
//     padding: 0 10px;
//   }
// `;

// const Row = styled.div`
//   display: flex;
//   width: 100%;
//   height: 70px;
//   background-color: white;
//   padding: 20px;
//   justify-content: space-between;
//   box-shadow: 0 0.2px 0.5px rgba(0, 0, 0, 0.2);
//   position: fixed;
//   gap: 500px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//    height: 70px;
//     max-width: 100%;

//   }
// `;

// const Box = styled.div`
//   flex: 1;

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 10px;
//   }
// `;

// const H1 = styled.h2`
//   font-weight: bold;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 15px;
//   background-color: white;
//   color: black;
//   height: 30px;
//   border: 1px solid #abb1bb;
//   border-radius: 15px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   font-size: 12px;

//   @media (max-width: 768px) {
//     width: 60%;
//     font-size: 14px;
//     padding: 12px 20px;
//    position: relative;
//    top: -530px;
//    left: 140px;
//   }

//   & > svg {
//     margin-right: 5px;
//     color: black;
//     font-size: 12px;
//   }
// `;

// // Composant ListePage
// const ListePage = () => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [hotels, setHotels] = useState<any[]>([]);

//     useEffect(() => {
//         const fetchHotels = async () => { 
//             try {
//                 const response = await fetch("http://localhost:3001/hotels"); // Assurez-vous que l'URL est correcte.
//                 if (!response.ok) {
//                     throw new Error("Erreur réseau lors de la récupération des hôtels.");
//                 }
//                 const data = await response.json();
//                 setHotels(data);  
//             } catch (error) {
//                 console.error("Erreur lors de la récupération des hôtels :", error);
//             }
//         };
//         fetchHotels();  
//     }, []); 

//     // Ajouter un nouvel hôtel à la liste
//     const addHotel = async (data:any) => {
//         try {
//             const response = await fetch("http://localhost:3001/hotels", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });
            
//             if (!response.ok) {
//                 throw new Error("Erreur lors de l'ajout de l'hôtel.");
//             }

//             const newHotel = await response.json();
//             setHotels((prev) => [...prev, newHotel.hotel]); // Ajoute le nouvel hôtel à la liste existante
//         } catch (error) {
//             console.error("Erreur lors de l'ajout d'un hôtel :", error);
//         }
//     };

//     return (
//         <Liste>
//             <Container>
//                 <Row>
//                     <Box>
//                         <H1>Hôtels ({hotels.length})</H1>
//                     </Box>
//                     <Box>
//                         <Button onClick={() => setModalOpen(true)}>
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20px" height="20px">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                             </svg>
//                             Créer un nouvel hôtel
//                         </Button>

//                         <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={addHotel} />
//                     </Box>
//                 </Row>

//                 {/* Liste des hôtels */}
//                 <div style={{ display:'flex', flexWrap:'wrap' }}>
//                     {hotels.length === 0 ? (
//                         <p>Aucun hôtel disponible.</p>
//                     ) : (
//                         hotels.map((hotel:any) => (
//                             <HotelCard key={hotel._id || hotel.name} 
//                                        name={hotel.name}
//                                        description={hotel.description}
//                                        email={hotel.email}
//                                        tel={hotel.tel}
//                                        pricePerNight={hotel.pricePerNight}
//                                        currency={hotel.currency}
//                                        imageUrl={hotel.imageUrl} />
//                         ))
//                     )}
//                 </div>

//             </Container>
//         </Liste>
//     );
// };

// export default ListePage;




"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./formulaire";
import HotelCard from "./hotelCard";

// Styles
const Liste = styled.div`
  background-color: #f0f0f0;
  height: 1000vh;
  padding-top: 70.4px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 70.4px;
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
  height: 70px;
  background-color: white;
  padding: 20px;
  justify-content: space-between;
  box-shadow: 0 0.2px 0.5px rgba(0, 0, 0, 0.2);
  position: fixed;
  gap: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 70px;
    max-width: 100%;
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
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: white;
  color: black;
  height: 30px;
  border: 1px solid #abb1bb;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 12px;

  @media (max-width: 768px) {
    width: 60%;
    font-size: 14px;
    padding: 12px 20px;
    position: relative;
    top: -530px;
    left: 140px;
  }

  & > svg {
    margin-right: 5px;
    color: black;
    font-size: 12px;
  }
`;

// Composant principal
const ListePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hotels, setHotels] = useState<any[]>([]);

  // Récupération des hôtels
useEffect(() => {
  const fetchHotels = async () => {
    try {
      const response = await fetch("http://localhost:3001/hotels");

      if (!response.ok) {
        throw new Error(`Erreur réseau lors de la récupération des hôtels : ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Hôtels récupérés :", data);
      setHotels(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des hôtels :", error);
    }
  };

  fetchHotels();
}, []);

// Ajouter un hôtel
const addHotel = async (data: any) => {
  try {
    console.log("Données soumises pour l'ajout :", data);

    const response = await fetch("http://localhost:3001/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erreur lors de l'ajout de l'hôtel : ${response.status} - ${response.statusText}`);
    }

    const newHotel = await response.json();
    console.log("Nouvel hôtel ajouté :", newHotel);

    // Assurez-vous que l'hôtel retourné est bien structuré
    if (newHotel && newHotel._id) {
      setHotels((prev) => [...prev, newHotel]);
    } else {
      console.error("L'hôtel ajouté ne contient pas les informations attendues :", newHotel);
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un hôtel :", error);
  }
};


  return (
    <Liste>
      <Container>
        <Row>
          <Box>
            <H1>Hôtels ({hotels.length})</H1>
          </Box>
          <Box>
            <Button onClick={() => setModalOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                width="20px"
                height="20px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Créer un nouvel hôtel
            </Button>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onSubmit={addHotel}
            />
          </Box>
        </Row>

        {/* Liste des hôtels */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {hotels.length === 0 ? (
            <p>Aucun hôtel disponible.</p>
          ) : (
            hotels.map((hotel: any) => (
              <HotelCard
                key={hotel._id || hotel.name}
                name={hotel.name}
                description={hotel.description}
                email={hotel.email}
                tel={hotel.tel}
                pricePerNight={hotel.pricePerNight}
                currency={hotel.currency}
                imageUrl={hotel.imageUrl}
              />
            ))
          )}
        </div>
      </Container>
    </Liste>
  );
};

export default ListePage;
