import React from 'react';
import styled from 'styled-components';

// Interface pour définir les propriétés de l'hôtel
interface HotelProps {
  name: string;
  description: string;
  email: string;
  tel: string;
  pricePerNight: number;
  currency: string;
  imageUrl?: string; 
}

// Styles pour la carte
const Card = styled.div`
  width: 300px;
  padding-top: 52px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
`;

// Styles pour l'image
const ImageWrapper = styled.div<{ src: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-color: #e0e0e0;
`;

// Contenu de la carte
const CardContent = styled.div`
  padding: 15px;
`;

const HotelName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
  color: #888;
`;

// Composant principal
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
        <ContactInfo>
          <div>Email : {email}</div>
          <div>Téléphone : {tel}</div>
        </ContactInfo>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
