import React from 'react';
import styled from 'styled-components';

interface HotelProps {
   name: string;
   address?: string;  
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
   justify-content: start;

      @media (max-width: 768px) {
      padding-top: 150px;
   }
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
   height :140px; 
   background-color:white; 
   border-bottom-left-radius :20px; 
   border-bottom-right-radius :20px; 
`;

const HotelName = styled.h3`
   font-size : 20px; 
   font-weight: 600; 
   margin-bottom :10px; 
   position: relative;
   top: -15px;
`;

const Address = styled.p`
   font-size :1rem; 
   color: #9B6151; 
   margin-bottom :15px; 
`;

const Price = styled.div`
   font-size :15px; 
   color:#434649; 
    position: relative;
   top: -15px;
`;

const ContactInfo = styled.div`
   font-size :0.9rem; 
   color:#888; 
`;

const HotelCard: React.FC<HotelProps> = ({
     name,
     address,
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
                 <Address>{address}</Address>
                 <HotelName>{name}</HotelName>
                 <Price>{pricePerNight} {currency} par nuit</Price>
             </CardContent>
         </Card>
     );
};

export default HotelCard;
