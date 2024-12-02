
// "use client";
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Modal from "./formulaire";
// import HotelCard from "./hotelCard";  // Importation de HotelCard

// // Styles pour ListePage
// const Liste = styled.div`
//   background-color: #f0f0f0;
//   height: 140vh;
//   padding-top: 53px;

//   @media (max-width: 768px) {
//     height: auto;
//     padding-top: 30px;
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
//     height: auto;
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
//     width: 100%;
//     font-size: 14px;
//     padding: 12px 20px;
//   }

//   & > svg {
//     margin-right: 5px;
//     color: black;
//     font-size: 12px;
//   }
// `;

// // Composant ListePage
// const ListePage = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [hotels, setHotels] = useState<any[]>([]);

//   // Récupérer tous les hôtels lorsque le composant est monté
//   useEffect(() => {
//     fetch("http://localhost:3001/hotels")  // L'URL de votre API backend
//       .then(response => response.json())
//       .then(data => {
//         setHotels(data);  // Mettre à jour l'état avec les hôtels récupérés
//       })
//       .catch(error => console.error("Erreur lors de la récupération des hôtels :", error));
//   }, []);

//   // Ajouter un nouvel hôtel à la liste
//   const addHotel = (data: any) => {
//     setHotels((prev) => [...prev, data]);
//   };

//   return (
//     <Liste>
//       <Container>
//         <Row>
//           <Box>
//             <H1>Hôtels ({hotels.length})</H1>
//           </Box>
//           <Box>
//             <Button onClick={() => setModalOpen(true)}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 width="20px"
//                 height="20px"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//               </svg>
//               Créer un nouveau hôtel
//             </Button>

//             <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={addHotel} />
//           </Box>
//         </Row>

//         {/* Liste des hôtels */}
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           {hotels.length === 0 ? (
//             <p>Aucun hôtel disponible.</p>
//           ) : (
//             hotels.map((hotel: any) => (
//               <HotelCard
//                 key={hotel._id}
//                 name={hotel.name}
//                 description={hotel.description}
//                 email={hotel.email}
//                 tel={hotel.tel}
//                 pricePerNight={hotel.pricePerNight}
//                 currency={hotel.currency}
//                 imageUrl={hotel.imageUrl}
//               />
//             ))
//           )}
//         </div>
//       </Container>
//     </Liste>
//   );
// };

// export default ListePage;




"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./formulaire";
import HotelCard from "./hotelCard";  

// Styles pour ListePage
const Liste = styled.div`
  background-color: #f0f0f0;
  height: 140vh;
  padding-top: 70.4px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 30px;
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
    height: auto;
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
    width: 100%;
    font-size: 14px;
    padding: 12px 20px;
  }

  & > svg {
    margin-right: 5px;
    color: black;
    font-size: 12px;
  }
`;

// Composant ListePage
const ListePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hotels, setHotels] = useState<any[]>([]);


  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3001/hotels");
        if (!response.ok) {
          throw new Error("Erreur réseau lors de la récupération des hôtels.");
        }
        const data = await response.json();
        setHotels(data);  
      } catch (error) {
        console.error("Erreur lors de la récupération des hôtels :", error);
        
      }
    };
    fetchHotels();  
  }, []); 

  // Ajouter un nouvel hôtel à la liste
  const addHotel = (data: any) => {
    setHotels((prev) => [...prev, data]);
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Créer un nouveau hôtel
            </Button>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={addHotel} />
          </Box>
        </Row>

        {/* Liste des hôtels */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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