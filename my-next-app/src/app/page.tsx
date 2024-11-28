
'use client';

import React from 'react';
import '../../src/app/globals.css';
import Login from './login/page';
import { Container, Main} from './styles'
import RegisterPage from './register/page';


const HomePage = () => {
    return (
             <Container>
            <Main>
               {/* <Login /> */}
               <RegisterPage />
            </Main>
            </Container>
       
    );
};

export default HomePage;