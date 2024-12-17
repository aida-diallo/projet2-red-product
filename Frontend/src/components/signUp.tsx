"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { baseURL } from "../utils/constant"; 
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  Container, FormContainer, Input, Button,
  LinkContainer, Label, LabelText, Icon
} from '../app/signUp/style'; 

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  
  const handleRegisterClick = () => {
    router.push('/login');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields (name, email, password) are required");
      return;
    }

    const payload = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(`${baseURL}/signup`, payload);
      
      localStorage.setItem('user', JSON.stringify({
        _id: response.data.user._id,
        name: response.data.user.name,
        email: response.data.user.email
      }));

      toast.success("Account Created Successfully! Please Login");
      router.push("/login");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "An error occurred");
    }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <Label>
              <Input type="checkbox" required />
              <LabelText>Accepter les termes et la politique</LabelText>
          </Label>
          
          <Button type="submit">Sign Up</Button>
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

export default SignUp;
