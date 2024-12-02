
import { useState } from "react";
import styled from "styled-components";
import { WiDirectionLeft } from "react-icons/wi";
import { IoImageOutline } from "react-icons/io5";

// Styles pour Modal (existant)
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
      
   }
`;

const ModalContainer = styled.div`
  background: white;
  padding: 0;
  border-radius: 8px;
  width: 90%; 
  max-width: 600px; 


  @media (max-width: 600px) {
       width: 90%; 
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
  margin: 20px auto; 
`;

const Form = styled.form`
  padding: 20px; 
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 20px;

    @media (max-width: 600px) {
  padding: 0;
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
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 15px;

    @media (max-width: 600px) {
    height: 30px;
    width: 100%;
   }
 
`;

const Button = styled.button`
   padding:10px; 
   height:50px; 
   background-color:#43474A; 
   color:white; 
   text-align:center; 
   border-radius:10px; 
   width:auto; 
   margin-top:20px; 


     @media (max-width: 600px) {
     padding-top: 5px;
   }
`;

const StyledSelect = styled.select`
   padding:8px; 
   border-radius:15px; 
   border:1px solid #ccc; 


   @media (max-width: 600px) {
  height: 40px;
    width: 100%;
   }
`;

const ModalHearder = styled.div`
   display:grid; 
   align-items:center; 
   justify-content:center; 
   cursor:pointer; 
   border-radius:10px; 
   height:auto;
   padding-top:10px;

   h2 {
     margin-left:5px; 
   }
       @media (max-width: 600px) {
   border-radius:10px; 
   width: 100%;
   border: 1 px solid #ccc;
   }
`;

const ImagePreview = styled.img`
   width:auto; 
   max-width:100%; 
   height:auto; 
`;

const DeleteButton = styled.button`
   background-color:red; 
   color:white; 
   border:none; 
   padding:.5em .75em; 
   border-radius:.25em; 
`;

const HiddenInput = styled.input`
   display:none;
`;

// Modal Component
interface ModalProps {
    isOpen:boolean,
    onClose:()=>void,
    onSubmit:(data:any)=>void
}

const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
    const [formData, setFormData] = useState({
        name:"",
        description:"",
        email:"",
        tel:"",
        pricePerNight:"",
        currency:"XOF",
        imageUrl:"",
    });

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e:any) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, imageUrl: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = (e:any) => {
        e.stopPropagation();
        setFormData((prev) => ({ ...prev, imageUrl:"" }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
      <Overlay>
          <ModalContainer>
              <Title onClick={onClose}>
                  <WiDirectionLeft />
                  <h2>Créer un nouveau hôtel</h2>
              </Title>
              <DashedLine />
              <Form onSubmit={handleSubmit}>
                  <Row>
                      <FormGroup>
                          <Label htmlFor="name">Nom de l'hôtel</Label>
                          <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor="description">Adresse</Label>
                          <Input type="text" name="description" id="description" value={formData.description} onChange={handleChange} required />
                      </FormGroup>
                  </Row>
                  <Row>
                      <FormGroup>
                          <Label htmlFor="email">E-mail</Label>
                          <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor="tel">Numéro de téléphone</Label>
                          <Input type="tel" name="tel" value={formData.tel} onChange={handleChange} required />
                      </FormGroup>
                  </Row>
                  <Row>
                      <FormGroup>
                          <Label htmlFor="pricePerNight">Prix par nuit</Label>
                          <Input type="text" name="pricePerNight" value={formData.pricePerNight} onChange={handleChange} required />
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor="currency">Devise</Label>
                          <StyledSelect name="currency" value={formData.currency} onChange={handleChange}>
                              <option value="XOF">F XOF</option>
                              <option value="EUR">Euro</option>
                              <option value="USD">Dollar</option>
                          </StyledSelect>
                      </FormGroup>
                  </Row>

                  {/* Image Upload Section */}
                  <Label>Ajouter une photo</Label>
                  <ModalHearder onClick={() => document.getElementById('fileInput')?.click()}>
                      {formData.imageUrl ? (
                          <>
                              <ImagePreview src={formData.imageUrl} alt="Selected" />
                              <DeleteButton onClick={handleDeleteImage}>X</DeleteButton>
                          </>
                      ) : (
                          <>
                              <IoImageOutline style={{ fontSize:'50px', color:'#D1D5DB' }} />
                              <h2>Ajouter une image</h2>
                          </>
                      )}
                  </ModalHearder>
                  <HiddenInput id="fileInput" type="file" accept="image/*" onChange={handleImageChange} />
                  <Button type="submit">Enregistrer</Button>
              </Form>
          </ModalContainer>
      </Overlay>
    );
};

export default Modal;