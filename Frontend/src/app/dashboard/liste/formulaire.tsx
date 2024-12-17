import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { WiDirectionLeft } from "react-icons/wi";
import { IoImageOutline } from "react-icons/io5";
import { baseURL } from "../../../utils/constant"; 
import { toast } from "react-toastify";

interface ModalProps {
    isOpen: boolean;
    onClose(): void;
    onHotelAdded(hotel: any): void;
}
// Styles
const Overlay = styled.div`
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    background: rgba(0, 0, 0, 0.5); 
    display: flex; 
    justify-content: center; 
    align-items: center; 

      @media (max-width: 600px) { 
       width: 90%; 
       max-width: 600px; 
       height: 800px;
   } 
`;

const ModalContainer = styled.div`
    background: white; 
    padding: 0; 
    border-radius: 8px; 
    height: 700px; 
    width: 50%; 

   @media (max-width: 600px) { 
       width: 80%; 
       max-width: 600px; 
   } 
`;

const Title = styled.div`
   display: flex; 
   padding: 10px; 
   font-size: 20px; 

   h2 { 
       font-size: 15px; 
       margin-top: -3px; 
       margin-left: 10px; 
   } 
`;

const DashedLine = styled.div`
   border-top: 1px dashed #e5e7eb; 
   width: calc(100% - 60px); 
   margin: 20px; 
`;

const Form = styled.form`
   padding: 20px; 

   
    @media (max-width: 600px) {
     padding: 5px;
     
   }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 20px;
  padding: 15px;

    @media (max-width: 600px) {
  padding: 0;
  gap: 5px;
   }
`;

const FormGroup = styled.div`
   flex-basis: calc(50% - 10px); 

   @media (max-width: 600px) { 
       flex-basis: calc(100% - 10px); 
       margin-bottom: 15px; 
       width: 100%; 
   } 
`;

const Label = styled.label`
   display:block; 
   margin-bottom:5px; 
`;

const Input = styled.input`
   padding:10px; 
   border:1px solid #ccc; 
   border-radius:15px; 
   width:100%; 

   @media (max-width:600px) { height:30px; width:100%; }
`;

const Button = styled.button`
   height: 60px; 
   background-color:#43474A; 
   color:white; 
   text-align:center; 
   border-radius:10px; 
   width: 150px; 
   margin-top:20px; 
   justify-content: end;
   left: 600px;
   position: relative;
   font-size: 20px;


     @media (max-width: 600px) {
    position: relative;
    left: 20px;
    width: 80px;
    font-size: 10px;
    height: 30px;
    justify-content: center;
   }
`;

const StyledSelect = styled.select`
   padding :10px;
   border-radius :15px;
   border :1px solid #ccc;
   width :100%;
`;

const ModalHeader = styled.div`
   display:grid; 
   align-items:center; 
   justify-content:center; 
   cursor:pointer; 
   border-radius:10px; 
   height: 150px;
   border: 1px solid #ccc; 
   padding-top:10px;
      display: flex;
  flex-direction: column;
     align-items: center;
    cursor: pointer;


   h2 {
     margin-left: 0px; 
     color: rgb(156, 163, 175);
    font-weight: 600;
    font-size: 18px;
    position: relative;
    top: 0px;

    @media (max-width: 600px){
    text-align: center;
    // padding-top: -20px;
      position: relative;
    top: -10px;
    }
   }
       @media (max-width: 600px) {
   border-radius:10px; 
   width: 100%;
   border: 1 px solid #ccc;
   height: 50px;
   }
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  width: 100%;  
  height: 200px; 
  overflow: hidden; 
  border: 1px solid #ccc; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const DeleteButton = styled.button`
background-color:red ;
color:white ;
border:none ;
padding:.5em .75em ;
border-radius:.25em ;

`;

const HiddenInput = styled.input`
display:none ;

`;

const ErrorMessage = styled.div`
 color: red;
`;


const AddHotelModal: React.FC<ModalProps> = ({ isOpen, onClose, onHotelAdded }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        pricePerNight: "",
        currency: "EUR",
        address: "",
        imageUrl: "",
    });
    const [error, setError] = useState<string>("");
     const [loading, setLoading] = useState<boolean>(false);
    const user = JSON.parse(localStorage.getItem('user') ?? "null")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError("");
    };

    

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        
            if (file.size > 300 * 1024 * 1024) {
                setError("L'image est trop grande. Taille maximale : 300 Mo.");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    imageUrl: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

       
        const { name, email, tel, pricePerNight, address, currency, imageUrl } = formData;

        if (!name || !email || !tel || !pricePerNight || !address || !currency) {
            setError("Tous les champs sont requis.");
            return;
        }

        const price = Number(pricePerNight);
        if (isNaN(price) || price <= 0) {
            setError("Le prix doit être un nombre positif.");
            return;
        }

        if (!imageUrl) {
            setError("Veuillez ajouter une image.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/hotels', {
                name,
                email,
                tel,
                pricePerNight: price,
                currency,
                address,
                imageUrl,
                userId: user.id
            });

           
            setFormData({
                name: "",
                email: "",
                tel: "",
                pricePerNight: "",
                currency: "EUR",
                address: "",
                imageUrl: "",
            });
            onHotelAdded(response.data.hotel);

            
            onClose();

        } catch (err: any) {
            setError(err.response?.data?.message || "Erreur lors de l'ajout de l'hôtel");
            console.error(err);
        }
    };

    if (!isOpen) return null;

    return (
        <Overlay onClick={(e) => e.target === e.currentTarget && onClose()}>
            <ModalContainer>
                <Title onClick={onClose}>
                    <WiDirectionLeft />
                    <h2>Créer un nouvel hôtel</h2>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </Title>
                <DashedLine />
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <FormGroup>
                            <Label htmlFor="name">Nom de l'hôtel</Label>
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="address">Adresse</Label>
                            <Input
                                type="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="tel">Numéro de téléphone</Label>
                            <Input
                                type="tel"
                                name="tel"
                                value={formData.tel}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label htmlFor="pricePerNight">Prix par nuit</Label>
                            <Input
                                type="text"
                                name="pricePerNight"
                                value={formData.pricePerNight}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="currency">Devise</Label>
                            <StyledSelect
                                name="currency"
                                value={formData.currency}
                                onChange={handleChange}
                            >
                                <option value="EUR">Euro (€)</option>
                                <option value="USD">Dollar ($)</option>
                                <option value="XOF">Franc CFA (XOF)</option>
                            </StyledSelect>
                        </FormGroup>
                    </Row>

                    <Label>Ajouter une photo</Label>

<ModalHeader onClick={() => document.getElementById('fileInput')?.click()}>
      {formData.imageUrl ? (
        <>
          <ImagePreviewContainer>
            <ImagePreview src={formData.imageUrl} alt="Selected" />
          </ImagePreviewContainer>
        </>
      ) : (
        <>
          <IoImageOutline style={{ fontSize: '70px', color: '#D1D5DB' }} />
          <h2>Ajouter une photo</h2>
        </>
      )}
    </ModalHeader>
          <HiddenInput id="fileInput" type="file" accept="image/*" onChange={handleImageChange} />

                    <Button type="submit">Enregistrer</Button>
                </Form>
            </ModalContainer>
        </Overlay>
    );
};

export default AddHotelModal;