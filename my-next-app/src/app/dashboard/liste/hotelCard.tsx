// import React from 'react';
// import styled from 'styled-components';


// interface HotelProps {
//   name: string;
//   description: string;
//   email: string;
//   tel: string;
//   pricePerNight: number;
//   currency: string;
//   imageUrl?: string; 
// }


// const Card = styled.div`
//    width: 310px;
//    height: 500px;
//    padding-top: 100px;
//   margin: 10px;
// `;


// const ImageWrapper = styled.div<{ src: string }>`
//   width: 100%;
//   height: 250px;
//   background-image: url(${(props) => props.src});
//   background-size: cover;
//   background-position: center;
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;

// `;

// const CardContent = styled.div`
//   padding: 15px;
//   height: 180px;
//   background-color: white;
//     border-bottom-left-radius: 20px;
//   border-bottom-right-radius: 20px;
// `;

// const HotelName = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 10px;
//   font-size: 20px;
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   color: #555;
//   margin-bottom: 15px;
// `;

// const Price = styled.div`
//   font-size: 15px;
  
//   color: #434649;
//   margin-bottom: 10px;
// `;

// const ContactInfo = styled.div`
//   font-size: 0.9rem;
//   color: #888;
// `;


// const HotelCard: React.FC<HotelProps> = ({
//   name,
//   description,
//   pricePerNight,
//   currency,
//   imageUrl,
// }) => {
//   const defaultImageUrl = 'https://via.placeholder.com/300x200.png?text=Image+Not+Available';

//   return (
//     <Card>
//       <ImageWrapper src={imageUrl || defaultImageUrl} />
//       <CardContent>
//       <Description>{description}</Description>
//         <HotelName>{name}</HotelName>
//         <Price>{pricePerNight} {currency} / nuit</Price>
//       </CardContent>
//     </Card>
//   );
// };

// export default HotelCard;



import React from 'react';
import styled from 'styled-components';

interface HotelProps {
    name: string;
    description: string;
    email?: string; 
    tel?: string; 
    pricePerNight?: number; 
    currency?: string; 
    imageUrl?: string; 
}

const Card = styled.div`
   width:310px; 
   height :500px; 
   padding-top :100px; 
   margin :10px; 
`;

const ImageWrapper = styled.div<{ src:string }>`
   width :100%; 
   height :250px; 
   background-image:url(${(props) => props.src}); 
   background-size :cover; 
   background-position:center; 
   border-top-left-radius :20px; 
   border-top-right-radius :20px; 
`;

const CardContent = styled.div`
   padding :15px; 
   height :180px; 
   background-color:white; 
   border-bottom-left-radius :20px; 
   border-bottom-right-radius :20px; 
`;

const HotelName = styled.h3`
   font-size :1.5rem; 
   font-weight:bold; 
   margin-bottom :10px; 
`;

const Description = styled.p`
   font-size :1rem; 
   color:#555; 
   margin-bottom :15px; 
`;

const Price = styled.div`
   font-size :15px; 
   color:#434649; 
`;

const ContactInfo = styled.div`
   font-size :0.9rem; 
   color:#888; 
`;

const HotelCard: React.FC<HotelProps> = ({
     name,
     description,
     email,
     tel,
     pricePerNight,
     currency,
     imageUrl,
}) => {
     const defaultImageUrl = 'https://via.placeholder.com/300x200.png?text=Image+Not+Available';

     return (
         <Card>
             <ImageWrapper src={imageUrl || defaultImageUrl} />
             <CardContent>
                 <HotelName>{name}</HotelName>
                 <Description>{description}</Description>
                 <Price>{pricePerNight} {currency} / nuit</Price>
                 {/* {email && <ContactInfo>Email : {email}</ContactInfo>}
                 {tel && <ContactInfo>Téléphone : {tel}</ContactInfo>} */}
             </CardContent>
         </Card>
     );
};

export default HotelCard;
