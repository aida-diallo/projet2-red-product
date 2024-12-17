"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios';
import { baseURL } from "../utils/constant"; 
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import {
    Container,
    FormContainer,
    Input,
    Button,
    LinkContainer,
    Label,
    LabelText,
    Icon,
} from '../app/login/style'; 

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Veuillez entrer une adresse email valide.");
            return;
        }

        const payload = { email, password };
        setLoading(true);

        try {
            const res = await axios.post(`${baseURL}/login`, payload);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data));
            router.push("/dashboard");
            toast.success("Connexion réussie");
        } catch (err: any) {
            console.error("Erreur de connexion:", err);
            if (err.response) {
                toast.error(err.response.data.message || "Échec de la connexion");
            } else {
                toast.error("Une erreur inattendue est survenue.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token) {
          router.push('/dashboard');
          return;
        }
        
    }, [router]);

    return (
        <Container>
           <Icon>
                <img src="/icon.png" alt="icon" />
                <h1>RED PRODUCT</h1>
            </Icon>

            <FormContainer onSubmit={handleSubmit}>
                <p>Connectez-vous en tant que Admin</p>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    required
                    aria-label="Email"
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Mot de passe"
                    required
                    aria-label="Mot de passe"
                />
                <Label>
                    <Input type="checkbox" />
                    <LabelText>Gardez-moi connecté</LabelText>
                </Label>
                <Button type="submit" disabled={loading}>
                    {loading ? "Chargement..." : "Connexion"}
                </Button>
            </FormContainer>
            
            <LinkContainer>
                <div>
                    <Link href="/password">Mot de passe oublié</Link>
                </div>
                <div>
                    Vous n'avez pas de compte ?{' '}
                    <Link href="/signUp">S'inscrire</Link>
                </div>
            </LinkContainer>
        </Container>
    );
};

export default Login;
