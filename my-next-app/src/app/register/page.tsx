
'use client';

import React, { useState } from 'react';
import {
    Container, FormContainer, Input, Button,
    LinkContainer, Label, LabelText, Icon
} from './style';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const RegisterPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = () => {
        router.push('/login');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
       
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                router.push('/login');
            })
            .catch(err => {
                console.error("Erreur lors de la requête :", err);
                if (err.response) {
                    console.error("Réponse du serveur : ", err.response.data);
                } else if (err.request) {
                    console.error("Problème avec la requête : ", err.request);
                } else {
                    console.error("Erreur inconnue : ", err.message);
                }
            });
    };
    

    return (
        <Container>
            <Icon>
                <img src="/icon.png" alt="icon" />
                <h1>RED PRODUCT</h1>
            </Icon>
            <FormContainer onSubmit={handleSubmit}>
                <p>Inscrivez-vous en tant que Admin</p>
                <Input
                    type="text"
                    placeholder="Nom"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Label>
                    <Input type="checkbox" required />
                    <LabelText>Accepter les termes et la politique</LabelText>
                </Label>
                <Button type="submit">S'inscrire</Button>
            </FormContainer>
            <LinkContainer>
                <div>
                    Vous avez déjà un compte ?{' '}
                    <span
                        onClick={handleRegisterClick}
                        style={{ cursor: 'pointer', color: '#FCD34D' }}
                    >
                        Se connecter
                    </span>
                </div>
            </LinkContainer>
        </Container>
    );
};

export default RegisterPage;