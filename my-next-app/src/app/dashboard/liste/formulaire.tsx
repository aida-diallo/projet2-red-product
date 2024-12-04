
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
 height: 700px;
  width: 50%; 


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
  margin: 20px; 
`;

const Form = styled.form`
  padding: 20px; 
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 20px;
  padding: 15px;

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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  width: 100%;
  

    @media (max-width: 600px) {
    height: 30px;
    width: 100%;
   }
 
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
     padding-top: 5px;
   }
`;

const StyledSelect = styled.select`
   padding: 10px; 
   border-radius:15px; 
   border:1px solid #ccc; 
   width: 100%;


   @media (max-width: 600px) {
  height: 40px;
    width: 100%;
   }
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
   }
       @media (max-width: 600px) {
   border-radius:10px; 
   width: 100%;
   border: 1 px solid #ccc;
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
  isOpen: boolean;
  onClose(): void;
  onSubmit(data: any): void;
}

const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
 
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    tel: "",
    pricePerNight: "",
    currency: "XOF",
    imageUrl: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (e: any) => {
    e.stopPropagation();
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
    console.log('image enregistrer')
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Vérification des champs obligatoires
    if (!formData.name || !formData.description || !formData.email || !formData.tel || !formData.pricePerNight) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
  
    const dataURLtoFile = (dataurl: string, filename: string): File | null => {
      // Vérifier si la Data URL est valide
      if (!dataurl.startsWith('data:')) {
        console.error('La Data URL n\'est pas valide.');
        return null;
      }
    
      const arr = dataurl.split(',');
      if (arr.length !== 2) {
        console.error('La Data URL est mal formatée.');
        return null;
      }
    
      const mime = arr[0].match(/:(.*?);/);
      if (!mime || !mime[1]) {
        console.error('Le type MIME est manquant dans la Data URL.');
        return null;
      }
    
      const bstr = atob(arr[1]);
      const n = bstr.length;
      const u8arr = new Uint8Array(n);
    
      // Utiliser une boucle normale (avec un indice au lieu de décrémenter n)
      for (let i = 0; i < n; i++) {
        u8arr[i] = bstr.charCodeAt(i);
      }
    
      return new File([u8arr], filename, { type: mime[1] });
    };
    
  
    // Créer un FormData pour envoyer les données et l'image
    const form = new FormData();
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("email", formData.email);
    form.append("tel", formData.tel);
    form.append("pricePerNight", formData.pricePerNight);
    form.append("currency", formData.currency);
  
    // Ajouter l'image si elle existe
    if (formData.imageUrl) {
      try {
        const file = dataURLtoFile(formData.imageUrl, "image.png");
        if (file) {
          form.append("image", file);
        } else {
          alert("L'image est invalide.");
          return;
        }
      } catch (error) {
        console.error("Erreur lors de la conversion de l'image :", error);
        alert("L'image est invalide.");
        return;
      }
    }
  
    try {
      // Envoyer les données au backend
      const response = await fetch("http://localhost:3001/hotels", {
        method: 'POST',
        body: form,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erreur API :", errorData);
        throw new Error(errorData.message || "Erreur inconnue");
      }
  
      const newHotel = await response.json();
      console.log("Nouvel hôtel ajouté :", newHotel);
      onSubmit(newHotel.hotel); 
      onClose(); 
    } catch (error: any) {
      console.error("Erreur lors de l'envoi des données :", error);
      alert("Une erreur est survenue lors de l'ajout de l'hôtel. Détails : " + (error.message || "Erreur inconnue"));
    }
  };
  
  

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title onClick={onClose}>
          <WiDirectionLeft />
          <h2>Créer un nouvel hôtel</h2>
        </Title>
        <DashedLine />
        <Form onSubmit={handleSubmit}>
          <Row>
            <FormGroup>
              <Label htmlFor="name">Nom de l'hôtel</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Adresse</Label>
              <Input
                type="text"
                name="description"
                id="description"
                value={formData.description}
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
                id="email"
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
                <option value="XOF">F XOF</option>
                <option value="EUR">Euro</option>
                <option value="USD">Dollar</option>
              </StyledSelect>
            </FormGroup>
          </Row>

          {/* Image Upload Section */}
          <Label>Ajouter une photo</Label>
          <ModalHeader onClick={() => document.getElementById('fileInput')?.click()}>
      {formData.imageUrl ? (
        <>
          <ImagePreviewContainer>
            <ImagePreview src={formData.imageUrl} alt="Selected" />
            <DeleteButton onClick={handleDeleteImage}>X</DeleteButton>
          </ImagePreviewContainer>
        </>
      ) : (
        <>
          <IoImageOutline style={{ fontSize: '70px', color: '#D1D5DB' }} />
          <h2>Ajouter une image</h2>
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

export default Modal;





// import React, { useState } from "react";
// import styled from "styled-components";
// import { WiDirectionLeft } from "react-icons/wi";
// import { IoImageOutline } from "react-icons/io5";


// // Styles pour Modal (existant)
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
 

//     @media (max-width: 600px) {
      
//    }
// `;

// const ModalContainer = styled.div`
//   background: white;
//   padding: 0;
//   border-radius: 8px;
//  height: 700px;
//   width: 50%; 


//   @media (max-width: 600px) {
//        width: 90%; 
//   max-width: 600px; 
 
//    }
// `;

// const Title = styled.div`
//   display: flex;
//   padding: 10px;
//   font-size: 20px;
  
//   h2 {
//     font-size: 15px;
//     margin-top: -3px;
//     margin-left: 10px; 
//   }
// `;

// const DashedLine = styled.div`
//   border-top: 1px dashed #e5e7eb;
//   width: calc(100% - 60px); 
//   margin: 20px; 
// `;

// const Form = styled.form`
//   padding: 20px; 
// `;

// const Row = styled.div`
//   display: flex;
//   flex-wrap: wrap; 
//   gap: 20px;
//   padding: 15px;

//     @media (max-width: 600px) {
//   padding: 0;
//    }
// `;

// const FormGroup = styled.div`
//   flex-basis: calc(50% - 10px); 
  
//   @media (max-width: 600px) {
//     flex-basis: calc(100% - 10px); 
//     margin-bottom: 15px; 
//     width: 100%;
//    }
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 15px;
//   width: 100%;
  

//     @media (max-width: 600px) {
//     height: 30px;
//     width: 100%;
//    }
 
// `;

// const Button = styled.button`
//    height: 60px; 
//    background-color:#43474A; 
//    color:white; 
//    text-align:center; 
//    border-radius:10px; 
//    width: 150px; 
//    margin-top:20px; 
//    justify-content: end;
//    left: 600px;
//    position: relative;
//    font-size: 20px;


//      @media (max-width: 600px) {
//      padding-top: 5px;
//    }
// `;

// const StyledSelect = styled.select`
//    padding: 10px; 
//    border-radius:15px; 
//    border:1px solid #ccc; 
//    width: 100%;


//    @media (max-width: 600px) {
//   height: 40px;
//     width: 100%;
//    }
// `;

// const ModalHeader = styled.div`
//    display:grid; 
//    align-items:center; 
//    justify-content:center; 
//    cursor:pointer; 
//    border-radius:10px; 
//    height: 150px;
//    border: 1px solid #ccc; 
//    padding-top:10px;
//       display: flex;
//   flex-direction: column;
//      align-items: center;
//     cursor: pointer;


//    h2 {
//      margin-left: 0px; 
//      color: rgb(156, 163, 175);
//     font-weight: 600;
//     font-size: 18px;
//     position: relative;
//     top: 0px;
//    }
//        @media (max-width: 600px) {
//    border-radius:10px; 
//    width: 100%;
//    border: 1 px solid #ccc;
//    }
// `;


// export const ImagePreviewContainer = styled.div`
//   position: relative;
//   width: 100%;  
//   height: 200px; 
//   overflow: hidden; 
//   border: 1px solid #ccc; 
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const ImagePreview = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover; 
// `;

// // Modal Component
// interface ModalProps {
//    isOpen: boolean;
//    onClose(): void;
//    onSubmit(data: any): void;
// }

// const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
//    const [formData, setFormData] = useState({
//        name: "",
//        description: "",
//        email: "",
//        tel: "",
//        pricePerNight: "",
//        currency: "XOF",
//    });

//    const handleChange = (e:any) => {
//        setFormData({ ...formData, [e.target.name]: e.target.value });
//    };

//    const handleSubmit = async (e:any) => {
//        e.preventDefault();
//        await onSubmit(formData); // Call the onSubmit function passed from ListePage
//        onClose(); // Close modal after submission
//    };

//    if (!isOpen) return null;

//    return (
//        <Overlay>
//            <ModalContainer>
//                <h2>Créer un nouvel hôtel</h2>
//                <Form onSubmit={handleSubmit}>
//                    <Input type="text" name="name" placeholder="Nom de l'hôtel" required onChange={handleChange} />
//                    <Input type="text" name="description" placeholder="Description" required onChange={handleChange} />
//                    <Input type="email" name="email" placeholder="Email" required onChange={handleChange} />
//                    <Input type="tel" name="tel" placeholder="Numéro de téléphone" required onChange={handleChange} />
//                    <Input type="number" name="pricePerNight" placeholder="Prix par nuit" required onChange={handleChange} />
//                    <button type="submit">Enregistrer</button>
//                </Form>
//            </ModalContainer>
//        </Overlay>
//    );
// };

// export default Modal;






// import { useState, useRef, useEffect } from "react";
// import styled from "styled-components";
// import { WiDirectionLeft } from "react-icons/wi";
// import { IoImageOutline } from "react-icons/io5";

// // Styles pour Modal
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
//   z-index: 999;
// `;

// const ModalContainer = styled.div<{ isOpen: boolean }>`
//   background: white;
//   padding: 0;
//   border-radius: 8px;
//   height: 700px;
//   width: 50%;
//   transform: scale(${props => (props.isOpen ? 1 : 0.9)});
//   opacity: ${props => (props.isOpen ? 1 : 0)};
//   transition: all 0.3s ease;

//   @media (max-width: 600px) {
//     width: 90%;
//     max-width: 600px;
//   }
// `;

// const Title = styled.div`
//   display: flex;
//   padding: 10px;
//   font-size: 20px;

//   h2 {
//     font-size: 15px;
//     margin-top: -3px;
//     margin-left: 10px;
//   }
// `;

// const DashedLine = styled.div`
//   border-top: 1px dashed #e5e7eb;
//   width: calc(100% - 60px);
//   margin: 20px;
// `;

// const Form = styled.form`
//   padding: 20px;
// `;

// const Row = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   padding: 15px;

//   @media (max-width: 600px) {
//     padding: 0;
//   }
// `;

// const FormGroup = styled.div`
//   flex-basis: calc(50% - 10px);

//   @media (max-width: 600px) {
//     flex-basis: calc(100% - 10px);
//     margin-bottom: 15px;
//   }
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 15px;
//   width: 100%;
// `;

// const Button = styled.button`
//   height: 60px;
//   background-color: #43474a;
//   color: white;
//   text-align: center;
//   border-radius: 10px;
//   width: 150px;
//   margin-top: 20px;
//   font-size: 20px;
// `;

// const StyledSelect = styled.select`
//   padding: 10px;
//   border-radius: 15px;
//   border: 1px solid #ccc;
//   width: 100%;
// `;

// const ModalHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   border-radius: 10px;
//   height: 150px;
//   border: 1px solid #ccc;
// `;

// export const ImagePreviewContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 200px;
//   overflow: hidden;
//   border: 1px solid #ccc;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const ImagePreview = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const DeleteButton = styled.button`
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   background-color: red;
//   color: white;
//   border: none;
//   padding: 0.5em;
//   border-radius: 50%;
//   cursor: pointer;
//   font-size: 16px;
// `;

// const HiddenInput = styled.input`
//   display: none;
// `;

// // Modal Component
// interface ModalProps {
//   isOpen: boolean;
//   onClose(): void;
//   onSubmit(data: any): void;
// }

// const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     email: "",
//     tel: "",
//     pricePerNight: "",
//     currency: "XOF",
//     imageUrl: "",
//   });

//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [onClose]);

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

//   const handleDeleteImage = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.stopPropagation();
//     setFormData((prev) => ({ ...prev, imageUrl: "" }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!formData.name || !formData.description || !formData.email || !formData.tel || !formData.pricePerNight) {
//       alert("Veuillez remplir tous les champs obligatoires.");
//       return;
//     }

//     let dataToSubmit = { ...formData };

//     if (!dataToSubmit.imageUrl) {
//       const { imageUrl, ...dataWithoutImage } = dataToSubmit;
//       dataToSubmit = dataWithoutImage;
//     }

//     try {
//       const response = await fetch("http://localhost:3001/hotels", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSubmit),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Erreur lors de l'ajout de l'hôtel.");
//       }

//       const newHotel = await response.json();
//       onSubmit(newHotel.hotel);
//       setFormData({
//         name: "",
//         description: "",
//         email: "",
//         tel: "",
//         pricePerNight: "",
//         currency: "XOF",
//         imageUrl: "",
//       });
//       onClose();
//     } catch (error: any) {
//       alert("Erreur : " + (error.message || "Erreur inconnue"));
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <Overlay>
//       <ModalContainer isOpen={isOpen}>
//         <Title onClick={onClose}>
//           <WiDirectionLeft />
//           <h2>Créer un nouvel hôtel</h2>
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
//               <Label htmlFor="email">E-mail</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
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
//               <StyledSelect
//                 name="currency"
//                 value={formData.currency}
//                 onChange={handleChange}
//               >
//                 <option value="XOF">F XOF</option>
//                 <option value="EUR">Euro</option>
//                 <option value="USD">Dollar</option>
//               </StyledSelect>
//             </FormGroup>
//           </Row>
//           <Label>Ajouter une photo</Label>
//           {formData.imageUrl ? (
//             <ImagePreviewContainer>
//               <ImagePreview src={formData.imageUrl} alt="Aperçu de l'image" />
//               <DeleteButton onClick={handleDeleteImage}>X</DeleteButton>
//             </ImagePreviewContainer>
//           ) : (
//             <ModalHeader onClick={() => fileInputRef.current?.click()}>
//               <IoImageOutline size={40} />
//               <h3>Sélectionnez une image</h3>
//               <HiddenInput
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </ModalHeader>
//           )}
//           <Button type="submit">Créer</Button>
//         </Form>
//       </ModalContainer>
//     </Overlay>
//   );
// };

// export default Modal;