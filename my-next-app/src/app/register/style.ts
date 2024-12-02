// // 'use client';


// // import styled from 'styled-components';

// // export const Container = styled.div`
// //     display: grid;
// //     justify-content: center;
// //     align-items: center;
// //    width: 100%; 
// //     height: 100vh;
// //     margin: 0;
// //     paddding: 0;
// //     background-image: url(/background.jpg);
// //     background-size: cover;
// //     background-position: center;
// //      background-repeat: no-repeat; 

// //      h1{
// //        color: white;
// //        font-weight: 700;
// //        text-align: center;
// //        font-size: 20px;
// //        margin-left: 10px;
// //      }
// //        img{
// //        width: 30px;
// //        height: 30px;
// //       margin-top: 10px

// //        }
// // `;
// // export const Icon = styled.div`
// //    display: flex;
// //    justify-content: center;
// //    align-items: center;
// //    text-align: center;
// //   position: relative;
// //   top: 30px;
// //   margin-top: 40px;
 
// //   h1{
// //    font-size: 23px;
// //    color: rgba(255, 255, 255, 0.9);
// //    font-weight: 600;
// //    line-height: 16px;
// //    margin-top: 10px;
// //   }
// // `;
// // export const FormContainer = styled.form`
// //     background-color: white;
// //     padding: 40px;
// //     padding-left: 20px;
// //     border-radius: 3px;
// //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //     width: 360px;
// //     height: 500px; 
// // `;

// // export const Input = styled.input`
// //     margin: 15px 0;
// //     padding: 10px;
// //    border: none; 
// //     border-bottom: 1px solid #D2D2D2;
// //     width: 100%; 
// //     justify-content: center;
// //     align-items: center;
// //    margin-top: 30px;
     
// // `;

// // export const Button = styled.button`
// //     padding: 10px;
// //     background-color: #45484B;
// //     color: white;
// //     border: none;

// //     border-radius: 4px;
// //     cursor: pointer;
// //     width: 100%;
// //    margin: 15px 0;
// // `;

// // export const LinkContainer = styled.div`
    
// //     text-align: center;
// //     position: relative;
// //     top: -30px;
// //     color: white;

// //     a {
// //         color: #FCD34D; 
// //         text-decoration: none;
// //          margin: 10px 0;

       

// //         &:hover {
// //             text-decoration: underline; 
// //         }
// //     }
// // `;

// // export const Label = styled.label`
  
// //     display: flex;
// //     align-items: center; 
// //     justify-content: flex-start;
// //     gap: 8px; 
// //     flex-wrap: nowrap; 
// //     white-space: nowrap; 

// //     input{
// //     margin-left: -35px;
// //     }
// // `;

// // export const LabelText = styled.span`
// //     font-size: 16px; 
// //     display: flex;
// //      position: relative;
// //     left: -30px;
// //    top: 6px;

// // `;



// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
//   margin: 0;
//   padding: 0;
//   background-image: url(/background.jpg);
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;

//   h1 {
//     color: white;
//     font-weight: 700;
//     text-align: center;
//     font-size: 20px;
//     margin-left: 10px;
//   }

//   img {
//     width: 30px;
//     height: 30px;
//     margin-top: 10px;
//   }
// `;

// export const Icon = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   position: relative;
//   top: 30px;
//   margin-top: 40px;

//   h1 {
//     font-size: 23px;
//     color: rgba(255, 255, 255, 0.9);
//     font-weight: 600;
//     margin-top: 10px;

//     @media (max-width: 768px) {
//       font-size: 18px;
//     }
//   }
// `;

// export const FormContainer = styled.form`
//   background-color: white;
//   padding: 40px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 360px;

//   @media (max-width: 768px) {
//     width: 90%;
//     padding: 20px;
//   }

//   @media (max-width: 480px) {
//     width: 95%;
//   }

//   p {
//     font-size: 18px;
//     font-weight: bold;
//     margin-bottom: 20px;
//     color: #333;

//     @media (max-width: 768px) {
//       font-size: 16px;
//     }
//   }
// `;

// export const Input = styled.input`
//   margin: 15px 0;
//   padding: 10px;
//   border: none;
//   border-bottom: 1px solid #d2d2d2;
//   width: 100%;
//   margin-top: 30px;

//   &:focus {
//     outline: none;
//     border-bottom: 1px solid #45484b;
//   }

//   @media (max-width: 768px) {
//     margin-top: 20px;
//   }
// `;

// export const Button = styled.button`
//   padding: 10px;
//   background-color: #45484b;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   width: 100%;
//   margin: 15px 0;
//   font-size: 16px;

//   &:hover {
//     background-color: #333;
//   }

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// export const LinkContainer = styled.div`
//   text-align: center;
//   position: relative;
//   top: -30px;
//   color: white;

//   span {
//     color: #fcd34d;
//     cursor: pointer;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   @media (max-width: 768px) {
//     top: -20px;
//     font-size: 14px;
//   }
// `;

// export const Label = styled.label`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 8px;
//   flex-wrap: nowrap;
//   white-space: nowrap;

//   input {
//     margin-left: -35px;
//   }

//   @media (max-width: 768px) {
//     input {
//       margin-left: 0;
//     }
//   }
// `;

// export const LabelText = styled.span`
//   font-size: 16px;
//   position: relative;
//   left: -30px;
//   top: 6px;

//   @media (max-width: 768px) {
//     left: 0;
//     top: 0;
//     font-size: 14px;
//   }
// `;




'use client';


import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
   width: 100%; 
    height: 100vh;
    margin: 0;
    paddding: 0;
    background-image: url(/background.jpg);
    background-size: cover;
    background-position: center;
     background-repeat: no-repeat; 

     h1{
       color: white;
       font-weight: 700;
       text-align: center;
       font-size: 20px;
       margin-left: 10px;
     }
       img{
       width: 30px;
       height: 30px;
      margin-top: 10px

       }
`;
export const Icon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
  position: relative;
  top: 30px;
  margin-top: 40px;
 
  h1{
   font-size: 23px;
   color: rgba(255, 255, 255, 0.9);
   font-weight: 600;
   line-height: 16px;
   margin-top: 10px;
  }
`;
export const FormContainer = styled.form`
    background-color: white;
    padding: 40px;
    padding-left: 20px;
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 360px;
    height: 500px; 
`;

export const Input = styled.input`
    margin: 15px 0;
    padding: 10px;
   border: none; 
    border-bottom: 1px solid #D2D2D2;
    width: 100%; 
    justify-content: center;
    align-items: center;
   margin-top: 30px;
     
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #45484B;
    color: white;
    border: none;

    border-radius: 4px;
    cursor: pointer;
    width: 100%;
   margin: 15px 0;
`;

export const LinkContainer = styled.div`
    
    text-align: center;
    position: relative;
    top: -30px;
    color: white;

    a {
        color: #FCD34D; 
        text-decoration: none;
         margin: 10px 0;

       

        &:hover {
            text-decoration: underline; 
        }
    }
`;

export const Label = styled.label`
  
    display: flex;
    align-items: center; 
    justify-content: flex-start;
    gap: 8px; 
    flex-wrap: nowrap; 
    white-space: nowrap; 

    input{
    margin-left: -35px;
    }
`;

export const LabelText = styled.span`
    font-size: 16px; 
    display: flex;
     position: relative;
    left: -30px;
   top: 6px;

`;


