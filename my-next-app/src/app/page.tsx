
'use client';

import React from 'react';
// import './globals.css';
import Login from './login/page';
import { Container, Main} from './styles'



const HomePage = () => {
    return (
             <Container>
            <Main>
               <Login />
            </Main>
            </Container>
       
    );
};

export default HomePage;