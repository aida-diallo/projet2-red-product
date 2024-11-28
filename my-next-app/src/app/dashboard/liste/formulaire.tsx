// // 'use client';
// // import styled from 'styled-components';
// // import { useState } from 'react';
// // import { WiDirectionLeft } from "react-icons/wi";
// // import { IoImageOutline } from "react-icons/io5";


// //   const Overlay = styled.div`
// //     position: fixed;
// //     top: 0;
// //     left: 0;
// //     right: 0;
// //     bottom: 0;
// //     background: rgba(0, 0, 0, 0.5);
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //   `;
// //   const P = styled.p`
   
// //   `;
// //   const Tete = styled.div`
// //       font-size: 50px;
// //       color: #D1D5DB;
// //       margin-left: 220px;
// //   `;
// //   const ModalContainer = styled.div`
// //     background: white;

// //     padding: 0px; 
// //     border-radius: 8px;
// //     width: 600px;
// //   `;
// //   const Form = styled.form`
// //     padding: 40px;
// //     box-sizing: border-box;
// //   `;
// //   const Button = styled.button`
// //     margin-left: 350px;
// //     padding: 10px;
// //     height: 50px;
// //     background-color: #43474A;
// //     color: white;
// //     text-align: center;
// //     border-radius: 10px;
// //   `;

// //   const FormGroup = styled.div`
// //     width: 50%;
// //     gap: 10;
// //     box-sizing: border-box;
// //     margin-bottom: 15px;
// //   `;

// //   const Label = styled.label`
// //     display: block;  
// //   margin-bottom: 5px;  
// //   font-size: 12px;
// //   `;

// //   const Input = styled.input`
// //     padding: 8px;
// //     border: 1px solid #ccc;
// //     width: 100%;
// //     border-radius: 15px;
// //     height: 35px;
// //   `;

// //   const Row = styled.div`
// //     display: flex;
// //     gap: 20px;
// //     width: 100%;
// //   `;
// //   const ButtonGroup = styled.div`
// //      display: flex; 
// //      align-items: center;
// //      justify-content: center;
// //      margin: 0px auto;
// //      padding: 15px;
// //   `;
 
// //   const Img = styled.div`
// //    position: relative; 
// //    left: 50px;
// //   `;
// //  const Title = styled.div`
// //    display: flex;
// //    padding: 10px;
// //    font-size: 20px;
// //    position: relative;
// //    top: 10px;
// //     h2{
// //      font-size: 15px;
// //      margin-top: -3px;
// //    }
// //   `;

// // // Styled Select
// // const StyledSelect = styled.select`
// //     padding: 8px;
// //     border-radius: 15px;
// //     border: 1px solid #ccc;
// //     width: 100%;
// //     height: 35px;
// //     font-size: 13px;
// // `;


// // const ModalHearder  = styled.div`
// //     display: grid;
// //     align-items: center; 
// //     justify-content: center;
// //     cursor: pointer;
    
// //     position: relative;
// //     width: 100%;
// //     border: 0.3px solid #CCCCCC;
// //     border-radius: 10px;
// //     height: 100px;
// //     h2 {
// //         margin-left: 10px; 
// //     }
     
// // `;

// // const ImagePreview = styled.img`
// //     width: 600px;
// //     height: 100px;
// //     border-radius: 8px; 
// // `;

// // const DeleteButton = styled.button`
// //     background-color: red;
// //     color: white;
// //     border: none;
// //     padding:0 10px;
// //     border-radius: 5px;
// //     cursor: pointer;
// //     position: absolute;
// //     top: 0;
// //      right: 0;
// //     &:hover {
// //         background-color: darkred; 
// //     }
// // `;

// // const HiddenInput = styled.input`
// //     display: none; 
// // `;
// // const DashedLine = styled.div`
// //     border-top: 1px dashed #E5E7EB; 
// //     width: 90%;
// //    position: relative;
// //    top: 20px;
// //    left: 30px;
// // `;

// // interface ModalProps {
// //     isOpen: boolean; 
// //     onClose: () => void; 
// // }

// // const Modal = ({ isOpen, onClose }: ModalProps) => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         description: '',
// //         dosage: '',
// //         tel: '', 
// //         pricePerNight: '', 
// //         currency: 'XOF', 
// //         imageUrl: '',
// //     });

// //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //         setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value,
// //         });
// //     };

// //     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //       const file = e.target.files?.[0];
// //       if (file) {
// //           const reader = new FileReader();
// //           reader.onloadend = () => {
// //               setFormData((prev) => ({ ...prev, imageUrl: reader.result as string })); 
// //           };
// //           reader.readAsDataURL(file);
// //       }
// //   };

// //   const handleDeleteImage = () => {
// //       setFormData((prev) => ({ ...prev, imageUrl: '' })); 
// //       document.getElementById('fileInput')!.value = ''; 
// //   };

// //     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();
       
// //         console.log(formData);
// //         onClose(); 
// //     };

// //     if (!isOpen) return null;

// //     return (
// //         <Overlay>
// //             <ModalContainer>
// //                 <Title onClick={onClose}>
// //                     <WiDirectionLeft />
// //                     <h2>Créer un nouveau hôtel</h2>
// //                 </Title>
// //                 <DashedLine />
// //                 <Form onSubmit={handleSubmit}>
// //                     <Row>
// //                         <FormGroup>
// //                             <Label htmlFor="name">Nom de l'hôtel</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="name"
// //                                 id="name"
// //                                 value={formData.name}
// //                                 onChange={handleChange}
// //                                 required
// //                             />
// //                         </FormGroup>
// //                         <FormGroup>
// //                             <Label htmlFor="description">Adresse</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="description"
// //                                 id="description"
// //                                 value={formData.description}
// //                                 onChange={handleChange}
// //                                 required
// //                             />
// //                         </FormGroup>
// //                     </Row>
// //                     <Row>
// //                         <FormGroup>
// //                             <Label htmlFor="dosage">E-mail</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="dosage"
// //                                 id="dosage" 
// //                                 value={formData.dosage}
// //                                 onChange={handleChange}
// //                                 required
// //                             />
// //                         </FormGroup>
// //                         <FormGroup>
// //                             <Label htmlFor="tel">Numéro de téléphone</Label>
// //                             <Input
// //                                 type="tel"
// //                                 name="tel" 
// //                                 value={formData.tel} 
// //                                 onChange={handleChange}
// //                                 required
// //                             />
// //                         </FormGroup>
// //                     </Row>
// //                     <Row>
// //                         <FormGroup>
// //                             <Label htmlFor="pricePerNight">Prix par nuit</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="pricePerNight" 
// //                                 value={formData.pricePerNight} 
// //                                 onChange={handleChange}
// //                                 required
// //                             />
// //                         </FormGroup>
// //                         <FormGroup>
// //                             <Label htmlFor="currency">Devise</Label>
// //                             <StyledSelect name="currency" value={formData.currency} onChange={handleChange}>
// //                              <option value="" disabled hidden>Choisissez une devise</option>
// //                              <option value="XOF">F XOF</option>
// //                              <option value="EUR">Euro</option>
// //                              <option value="USD">Dollar</option>
// //                              </StyledSelect>
// //                         </FormGroup>
// //                     </Row>

                    
// //                     {/* Image Upload Section */}
// //                     <Label>Ajouter une photo</Label>
// //                     <ModalHearder  onClick={() => document.getElementById('fileInput')?.click()}>
// //                         {formData.imageUrl ? (
// //                             <>
                           
// //                                 <ImagePreview src={formData.imageUrl} alt="Selected" />
// //                                 <DeleteButton onClick={handleDeleteImage}> X
                                  
// //                                 </DeleteButton>
// //                             </>
// //                         ) : (
// //                             <>
// //                                 <Img> <IoImageOutline style={{ fontSize:'50px', color:'#D1D5DB' }} /></Img>
// //                                 <h2>Ajouter une image test</h2>
                                
// //                             </>
// //                         )}
// //                     </ModalHearder >

                    
// //                     <HiddenInput
// //                         id="fileInput"
// //                         type="file"
// //                         accept="image/*"
// //                         onChange={handleImageChange}
// //                     />
// //                     <ButtonGroup>
// //                         <Button type="submit" 
// //                         style={{ padding:"10px 30px", fontSize:"18px", border:"1px solid #BBB" }}>
// //                           Enregistrer
// //                         </Button>
// //                     </ButtonGroup>
// //                 </Form>
// //             </ModalContainer>
// //         </Overlay>
// //     );
// // };

// // export default Modal;




// 'use client'; // Cette ligne marque ce fichier comme client-side

// import styled from 'styled-components';
// import { useState } from 'react';
// import { WiDirectionLeft } from "react-icons/wi";
// import { IoImageOutline } from "react-icons/io5";

// // Définition des composants Styled
// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const P = styled.p``;

// const Tete = styled.div`
//   font-size: 50px;
//   color: #D1D5DB;
//   margin-left: 220px;
// `;

// const ModalContainer = styled.div`
//   background: white;
//   padding: 0px;
//   border-radius: 8px;
//   width: 600px;
// `;

// const Form = styled.form`
//   padding: 40px;
//   box-sizing: border-box;
// `;

// const Button = styled.button`
//   margin-left: 350px;
//   padding: 10px;
//   height: 50px;
//   background-color: #43474A;
//   color: white;
//   text-align: center;
//   border-radius: 10px;
// `;

// const FormGroup = styled.div`
//   width: 50%;
//   gap: 10;
//   box-sizing: border-box;
//   margin-bottom: 15px;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-size: 12px;
// `;

// const Input = styled.input`
//   padding: 8px;
//   border: 1px solid #ccc;
//   width: 100%;
//   border-radius: 15px;
//   height: 35px;
// `;

// const Row = styled.div`
//   display: flex;
//   gap: 20px;
//   width: 100%;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px auto;
//   padding: 15px;
// `;

// const Img = styled.div`
//   position: relative;
//   left: 50px;
// `;

// const Title = styled.div`
//   display: flex;
//   padding: 10px;
//   font-size: 20px;
//   position: relative;
//   top: 10px;
//   h2 {
//     font-size: 15px;
//     margin-top: -3px;
//   }
// `;

// const StyledSelect = styled.select`
//   padding: 8px;
//   border-radius: 15px;
//   border: 1px solid #ccc;
//   width: 100%;
//   height: 35px;
//   font-size: 13px;
// `;

// const ModalHearder = styled.div`
//   display: grid;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   position: relative;
//   width: 100%;
//   border: 0.3px solid #CCCCCC;
//   border-radius: 10px;
//   height: 100px;
//   h2 {
//     margin-left: 10px;
//   }
// `;

// const ImagePreview = styled.img`
//   width: 600px;
//   height: 100px;
//   border-radius: 8px;
// `;

// const DeleteButton = styled.button`
//   background-color: red;
//   color: white;
//   border: none;
//   padding: 0 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   position: absolute;
//   top: 0;
//   right: 0;
//   &:hover {
//     background-color: darkred;
//   }
// `;

// const HiddenInput = styled.input`
//   display: none;
// `;

// const DashedLine = styled.div`
//   border-top: 1px dashed #E5E7EB;
//   width: 90%;
//   position: relative;
//   top: 20px;
//   left: 30px;
// `;

// // Définition des types pour les props
// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Modal = ({ isOpen, onClose }: ModalProps) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     dosage: '',
//     tel: '',
//     pricePerNight: '',
//     currency: 'XOF',
//     imageUrl: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData((prev) => ({ ...prev, imageUrl: reader.result as string }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setFormData((prev) => ({ ...prev, imageUrl: '' }));
//     document.getElementById('fileInput')!.value = '';
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <Overlay>
//       <ModalContainer>
//         <Title onClick={onClose}>
//           <WiDirectionLeft />
//           <h2>Créer un nouveau hôtel</h2>
//         </Title>
//         <DashedLine />
//         <Form onSubmit={handleSubmit}>
//           <Row>
//             <FormGroup>
//               <Label htmlFor="name">Nom de l'hôtel</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="description">Adresse</Label>
//               <Input
//                 type="text"
//                 name="description"
//                 id="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//           </Row>
//           <Row>
//             <FormGroup>
//               <Label htmlFor="dosage">E-mail</Label>
//               <Input
//                 type="text"
//                 name="dosage"
//                 id="dosage"
//                 value={formData.dosage}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="tel">Numéro de téléphone</Label>
//               <Input
//                 type="tel"
//                 name="tel"
//                 value={formData.tel}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//           </Row>
//           <Row>
//             <FormGroup>
//               <Label htmlFor="pricePerNight">Prix par nuit</Label>
//               <Input
//                 type="text"
//                 name="pricePerNight"
//                 value={formData.pricePerNight}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="currency">Devise</Label>
//               <StyledSelect name="currency" value={formData.currency} onChange={handleChange}>
//                 <option value="" disabled hidden>Choisissez une devise</option>
//                 <option value="XOF">F XOF</option>
//                 <option value="EUR">Euro</option>
//                 <option value="USD">Dollar</option>
//               </StyledSelect>
//             </FormGroup>
//           </Row>

//           {/* Image Upload Section */}
//           <Label>Ajouter une photo</Label>
//           <ModalHearder onClick={() => document.getElementById('fileInput')?.click()}>
//             {formData.imageUrl ? (
//               <>
//                 <ImagePreview src={formData.imageUrl} alt="Selected" />
//                 <DeleteButton onClick={handleDeleteImage}> X</DeleteButton>
//               </>
//             ) : (
//               <>
//                 <Img>
//                   <IoImageOutline style={{ fontSize: '50px', color: '#D1D5DB' }} />
//                 </Img>
//                 <h2>Ajouter une image test</h2>
//               </>
//             )}
//           </ModalHearder>

//           <HiddenInput
//             id="fileInput"
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//           <ButtonGroup>
//             <Button type="submit" style={{ padding: "10px 30px", fontSize: "18px", border: "1px solid #BBB" }}>
//               Enregistrer
//             </Button>
//           </ButtonGroup>
//         </Form>
//       </ModalContainer>
//     </Overlay>
//   );
// };

// export default Modal;




'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { WiDirectionLeft } from "react-icons/wi";

// Composants Styled
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
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 600px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

const Tete = styled.div`
  font-size: 30px;
  color: #6b7280;
  cursor: pointer;
`;

const Form = styled.form`
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #4b5563;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: #1f2937;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #111827;
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHotelAdded: () => void;  // Callback function for refreshing the hotel list
}

const Modal = ({ isOpen, onClose, onHotelAdded }: ModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    email: '',
    tel: '',
    pricePerNight: '',
    currency: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/formulaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Hôtel ajouté avec succès:', result);
        onHotelAdded(); // Rafraîchir la liste des hôtels dans le Dashboard
        onClose(); // Fermer le modal après succès
      } else {
        const errorResult = await response.json();
        console.error('Erreur:', errorResult.error);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la requête:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <Tete onClick={onClose}>
            <WiDirectionLeft />
          </Tete>
          <h2>Ajouter un hôtel</h2>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nom de l'Hôtel</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tel">Numéro de Téléphone</Label>
            <Input
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="pricePerNight">Prix par Nuit</Label>
            <Input
              id="pricePerNight"
              name="pricePerNight"
              type="number"
              value={formData.pricePerNight}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="currency">Devise</Label>
            <StyledSelect
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner une devise</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </StyledSelect>
          </FormGroup>
          <Button type="submit">Ajouter Hôtel</Button>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
