// // ./app/dashboard/page.tsx
// 'use client';
// import styled from 'styled-components';
// import React from 'react';
// import { FaEnvelopeOpen } from "react-icons/fa6";
// import { FaUserFriends } from "react-icons/fa";



//  const Div = styled.div`
// background-color: #F0F0F0;
// height: 140vh;
// padding-top: 70px;

//   @media (max-width: 768px) {
//         width: 100%;
//     }
// `;
// const Product = styled.div`
//     box-shadow: 0 0.2px 0.5px rgba(0, 0, 0, 0.2); 
//     height: 75px;
//     background-color: white;
    
//     p{
//      padding: 15px;
//    font-family: Inter, sans-serif;
//    font-size: 12px;
//    font-weight: 400;
//    line-height: 16px;
//    margin-top: -30px;
//    color: #ACACAC;
//     }
//  `;
//  const P = styled.div`
//    padding: 15px;
//    font-family: Inter, sans-serif;
//    font-size: 20px;
//  `;
// const Flex = styled.div`
//    display: flex;
//    flex-wrap: wrap;
//    width: 100%;
//    padding: 25px;
//    gap: 30px;
// `;
//  const Box = styled.div`
//   width: 30%;
//   display: flex;
//   background-color: white;
//   height: 70px;
//   justify-content: center;
//   padding: 10px;
//   padding-right: 10px;
//   border-radius: 20px;
//    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 

//    ul{
//      display: flex;
//    }

//      @media (max-width: 768px) {
//         flex: 1 1 calc(45% - 20px); 
//         width: 100%;
//     }
    
//     @media (max-width: 480px) {
//         flex: 1 1 100%; 
//         width: 100%;
//     }
// `;
// const Name = styled.div`
//    background-color: #A88ADD;
//    justify-content: center;
//    border-radius: 50px;
//    height: 50px;
//    width: 50px
// `;
// const Name1 = styled.div`
//    background-color: #0CC2AA;
//    justify-content: center;
//    border-radius: 50px;
//    height: 50px;
//    width: 50px
// `;
//  const Name2 = styled.div`
//    background-color: #FCC100;
//    justify-content: center;
//    border-radius: 50px;
//    height: 50px;
//    width: 50px
// `;
//  const Glob = styled.div`
//    display: flex;
//    gap: 5px;


  
// `;
//  const Hotel = styled.div`
//    background-color:#9C27B0;
//    justify-content: center;
//    border-radius: 50px;
//    height: 50px;
//    width: 50px
// `;
//  const Entite = styled.div`
//    background-color:#1565C0;
//    justify-content: center;
//    border-radius: 50px;
//    height: 50px;
//    width: 50px
// `;
//  const Monbox = styled.div`
//    display: grid;
//    margin-left: 10px;
//    margin-bottom: 0;
//    p{
//       font-size: 13px;
//       color: #8D8D8D;

//       span{
//         font-size: 20px;
//         padding: 5px;
//         color: black;
//       }
//         li{
//          top: 0;
//         }
//          #2{
//             background-color: #0CC2AA;
//          }
//    }
// `;
//  const Icon = styled.div`
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     padding: 17px;
//     color: white;
//     font-size: 15px;
// `;
//  const IconWrapper = styled.div<{ bgColor?: string }>`
//       justify-content: center;
//     align-items: center;
//     text-align: center;
//     padding: 17px;
//     color: white;
//     font-size: 15px;
//     background-color: ${(props) => props.bgColor};
//     border-radius: 50%; 

//     @media (max-width: 768px) {
//         top: 15px; 

//     }
// `;
//  const Icon1 = styled.div`
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     padding: 10px;
//     color: white;
//     font-size: 20px;
// `;
//  const Monli = styled.div`
//    font-size: 18px;
//    margin-bottom: 5px;
// `;

// // const kpis = [
// //   {

// //     id: 1,
// //     number: "125",
// //     name: "formulaires",
// //     para: "Je ne sais pas quoi mettre",
// //     icon: <FaEnvelopeOpen />,
// //   },
// //   {
// //     id: 2,
// //     number: "40",
// //     name: "formulaires",
// //     para: "Je ne sais pas quoi mettre",
// //     icon: "P",
// //     bgColor: '#0CC2AA',
// //   },
// //   ,
// //   {
// //     id: 3,
// //     number: "600",
// //     name: "formulaires",
// //     para: "Je ne sais pas quoi mettre",
// //     icon: <FaUserFriends />,
// //     bgColor: '#0CC2AA',
// //   },

// //   {

// //     id: 4,
// //     number: "25",
// //     name: "E-mails",
// //     para: "Je ne sais pas quoi mettre",
// //     icon: <FaEnvelopeOpen />,
// //     bgColor: '#F90000',
// //   },
// //   {
// //     id: 5,
// //     number: "40",
// //     name: "Hôtels",
// //     para: "Je ne sais pas quoi mettre",
// //     icon: "P",
// //     bgColor: '#9C27B0',
// //   },
// //   ,
// //   {
// //     id: 6,
// //     number: "02",
// //     name: "Entités",
// //     para: "Je ne sais pas quoi mettre",
// //     icon: <FaUserFriends />,
// //     bgColor: '#1565C0',
// //   },




// // ]

// // const Page = () => {
// //   return (
// //     <Div>
// //       <Product>
// //         <P> Bienvenue sur RED Product </P>
// //         <p>Lorem ipsum dolor sit amet consectetur</p>
// //       </Product>
// //       <Flex>
// //         {kpis.map((a) => (
// //           <Box >
// //             <div>
// //               <ul>
// //                 <Name>
// //                   <IconWrapper bgColor={a?.bgColor}>
// //                     <li>{a?.icon}</li>
// //                   </IconWrapper>
// //                 </Name>
// //                 <Monbox>
// //                   <Glob>
// //                     <Monli> <li>{a?.number} </li></Monli>
// //                     <li>{a?.name} </li> </Glob>
// //                   <li>{a?.para} </li>
// //                 </Monbox>

// //               </ul>

// //             </div>
// //           </Box>


// //         ))}

// //       </Flex>
// //     </Div>
// //   );
// // };
// // export default Page; 



// const kpis = [
//     {
//       id: 1,
//       number: "125",
//       name: "formulaires",
//       para: "Je ne sais pas quoi mettre",
//       icon: <FaEnvelopeOpen />,
//     },
//     {
//       id: 2,
//       number: "40",
//       name: "formulaires",
//       para: "Je ne sais pas quoi mettre",
//       icon: "P",
//       bgColor: '#0CC2AA',
//     },
//     {
//       id: 3,
//       number: "600",
//       name: "formulaires",
//       para: "Je ne sais pas quoi mettre",
//       icon: <FaUserFriends />,
//       bgColor: '#0CC2AA',
//     },
//     {
//       id: 4,
//       number: "25",
//       name: "E-mails",
//       para: "Je ne sais pas quoi mettre",
//       icon: <FaEnvelopeOpen />,
//       bgColor: '#F90000',
//     },
//     {
//       id: 5,
//       number: "40",
//       name: "Hôtels",
//       para: "Je ne sais pas quoi mettre",
//       icon: "P",
//       bgColor: '#9C27B0',
//     },
//     {
//       id: 6,
//       number: "02",
//       name: "Entités",
//       para: "Je ne sais pas quoi mettre",
//       icon: <FaUserFriends />,
//       bgColor: '#1565C0',
//     }
//   ];
  
//   const Page = () => {
//     return (
//       <Div>
//         <Product>
//           <P>Bienvenue sur RED Product</P>
//           <p>Lorem ipsum dolor sit amet consectetur</p>
//         </Product>
//         <Flex>
//           {kpis.map((a) => (
//             <Box key={a.id}>
//               <div>
//                 <ul>
//                   <Name>
//                     <IconWrapper bgColor={a.bgColor}>
//                       <li>{a.icon}</li>
//                     </IconWrapper>
//                   </Name>
//                   <Monbox>
//                     <Glob>
//                       <Monli><li>{a.number}</li></Monli>
//                       <li>{a.name}</li>
//                     </Glob>
//                     <li>{a.para}</li>
//                   </Monbox>
//                 </ul>
//               </div>
//             </Box>
//           ))}
//         </Flex>
//       </Div>
//     );
//   };
// export default Page;
  


'use client';

import React from 'react';
import styled from 'styled-components';
import { FaEnvelopeOpen } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";

// Définir vos styled-components
const Div = styled.div`
  background-color: #F0F0F0;
  height: 140vh;
  padding-top: 70px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
  const Box = styled.div`
   width: 30%;
   display: flex;
   background-color: white;
   height: 70px;
   justify-content: center;
   padding: 10px;
   padding-right: 10px;
   border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 

    ul{
      display: flex;
    }

      @media (max-width: 768px) {
         flex: 1 1 calc(45% - 20px); 
         width: 100%;
     }
    
     @media (max-width: 480px) {
         flex: 1 1 100%; 
         width: 100%;
     }
 `;

  const Name = styled.div`
    background-color: #A88ADD;
    justify-content: center;
    border-radius: 50px;
    height: 50px;
    width: 50px
 `;

   const Monli = styled.div`
    font-size: 18px;
    margin-bottom: 5px;
 `;

const Product = styled.div`
  box-shadow: 0 0.2px 0.5px rgba(0, 0, 0, 0.2);
  height: 75px;
  background-color: white;
  p {
    padding: 15px;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-top: -30px;
    color: #ACACAC;
  }
`;
  const Glob = styled.div`
    display: flex;
    gap: 5px;
 `;

   const Monbox = styled.div`
    display: grid;
    margin-left: 10px;
    margin-bottom: 0;
    p{
       font-size: 13px;
       color: #8D8D8D;

       span{
         font-size: 20px;
         padding: 5px;
         color: black;
       }
         li{
          top: 0;
         }
          #2{
             background-color: #0CC2AA;
          }
    }
 `;
  const IconWrapper = styled.div<{ bgColor?: string }>`
       justify-content: center;
     align-items: center;
     text-align: center;
     padding: 17px;
     color: white;
     font-size: 15px;
     background-color: ${(props) => props.bgColor};
     border-radius: 50%; 

     @media (max-width: 768px) {
         top: 15px; 

     }
 `;
 

const P = styled.div`
  padding: 15px;
  font-family: Inter, sans-serif;
  font-size: 20px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 25px;
  gap: 30px;
`;

// Définir les autres styled-components (comme Box, Name, etc.)

// Tableau des KPI
const kpis = [
  {
    id: 1,
    number: "125",
    name: "formulaires",
    para: "Je ne sais pas quoi mettre",
    icon: <FaEnvelopeOpen />,
  },
  {
    id: 2,
    number: "40",
    name: "formulaires",
    para: "Je ne sais pas quoi mettre",
    icon: "P",
    bgColor: '#0CC2AA',
  },
  {
    id: 3,
    number: "600",
    name: "formulaires",
    para: "Je ne sais pas quoi mettre",
    icon: <FaUserFriends />,
    bgColor: '#0CC2AA',
  },
  {
    id: 4,
    number: "25",
    name: "E-mails",
    para: "Je ne sais pas quoi mettre",
    icon: <FaEnvelopeOpen />,
    bgColor: '#F90000',
  },
  {
    id: 5,
    number: "40",
    name: "Hôtels",
    para: "Je ne sais pas quoi mettre",
    icon: "P",
    bgColor: '#9C27B0',
  },
  {
    id: 6,
    number: "02",
    name: "Entités",
    para: "Je ne sais pas quoi mettre",
    icon: <FaUserFriends />,
    bgColor: '#1565C0',
  }
];

const Page = () => {
  return (
    <Div>
      <Product>
        <P>Bienvenue sur RED Product</P>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </Product>
      <Flex>
        {kpis.map((a) => (
          <Box key={a.id}>
            <div>
              <ul>
                <Name>
                  <IconWrapper bgColor={a.bgColor}>
                    <li>{a.icon}</li>
                  </IconWrapper>
                </Name>
                <Monbox>
                  <Glob>
                    <Monli><li>{a.number}</li></Monli> 
                    <li>{a.name}</li>
                  </Glob>
                  <li>{a.para}</li>
                </Monbox>
              </ul>
            </div>
          </Box>
        ))}
      </Flex>
    </Div>
  );
};

export default Page;
