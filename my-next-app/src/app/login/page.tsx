'use client';
import React, { useState } from 'react';
import {
    Container, FormContainer, Input, Button,
    LinkContainer, Label, LabelText, Icon
} from './style';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login = ({ data }: { data: any }) => {
    
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3001/login',
                { email, password },
                { timeout: 5000 } 
            );

            console.log(response);
            if (response.data === "success") {
                router.push('/dashboard');
            } else {
                console.error('Authentication failed:', response.data);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('AxiosError:', error.message);
                console.error('Details:', error.response || error.request);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };
 
    return (
        <Container>
            <Icon>
                <img src="/icon.png" alt="icon" />
                <h1>RED PRODUCT</h1>
            </Icon>
            <FormContainer onSubmit={handleSubmit}>
                <p>Connectez-vous en tant que Admin</p>
                <Input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Mot de passe"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Label>
                    <Input type="checkbox" />
                    <LabelText>Gardez-moi connecté</LabelText>
                </Label>
                <Button type="submit">Se connecter</Button>
            </FormContainer>
            <LinkContainer>
                <div>
                    <Link href="/password">Mot de passe oublié</Link>
                </div>
                <div>
                    Vous n'avez pas de compte ?{' '}
                    <Link href="/register">S'inscrire</Link>
                </div>
            </LinkContainer>
        </Container>
    );
};

export default Login;





// 'use client';
// import React, { useState } from 'react';
// import {
//     Container, FormContainer, Input, Button,
//     LinkContainer, Label, LabelText, Icon
// } from './style';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// const Login = () => {
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(
//                 'http://localhost:3001/login',
//                 { email, password },
//                 { timeout: 5000 }
//             );

//             console.log('Réponse de l\'API:', response.data);  // Affiche la réponse pour débogage

//             if (response.data.status === "success") {
//                 router.push('/dashboard');
//             } else {
//                 console.error('Authentication failed:', response.data.message || 'No message available');
//             }
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 console.error('AxiosError:', error.message);
//                 if (error.response) {
//                     console.error('Erreur du serveur:', error.response.data);
//                     console.error('Code HTTP:', error.response.status);
//                 } else if (error.request) {
//                     console.error('Aucune réponse reçue:', error.request);
//                 }
//             } else {
//                 console.error('Unexpected error:', error);
//             }
//         }
//     };

//     return (
//         <Container>
//             <Icon>
//                 <img src="/icon.png" alt="icon" />
//                 <h1>RED PRODUCT</h1>
//             </Icon>
//             <FormContainer onSubmit={handleSubmit}>
//                 <p>Connectez-vous en tant que Admin</p>
//                 <Input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <Input
//                     type="password"
//                     placeholder="Mot de passe"
//                     required
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Label>
//                     <Input type="checkbox" />
//                     <LabelText>Gardez-moi connecté</LabelText>
//                 </Label>
//                 <Button type="submit">Se connecter</Button>
//             </FormContainer>
//             <LinkContainer>
//                 <div>
//                     <Link href="/password">Mot de passe oublié</Link>
//                 </div>
//                 <div>
//                     Vous n'avez pas de compte ?{' '}
//                     <Link href="/register">S'inscrire</Link>
//                 </div>
//             </LinkContainer>
//         </Container>
//     );
// };

// export default Login;






// 'use client';
// import React, { useState } from 'react';
// import {
//     Container, FormContainer, Input, Button,
//     LinkContainer, Label, LabelText, Icon
// } from './style';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// const Login = () => {
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setErrorMessage('');
//         setIsLoading(true);

//         try {
//             const response = await axios.post(
//                 'http://localhost:3001/login',
//                 { email, password },
//                 { timeout: 5000 }
//             );

//             if (response.data.message === "success") {
//                 const user = response.data.user;
//                 localStorage.setItem('user', JSON.stringify(user));
//                 router.push('/dashboard');
//             } else {
//                 setErrorMessage(response.data.message || 'Échec de l\'authentification.');
//             }
//         } catch (error) {
//             console.error('Erreur de connexion:', error);
//             setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <Container>
//             <Icon>
//                 <img src="/icon.png" alt="icon" />
//                 <h1>RED PRODUCT</h1>
//             </Icon>
//             <FormContainer onSubmit={handleSubmit}>
//                 <p>Connectez-vous en tant que Admin</p>
//                 <Input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <Input
//                     type="password"
//                     placeholder="Mot de passe"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Label>
//                     <Input type="checkbox" />
//                     <LabelText>Gardez-moi connecté</LabelText>
//                 </Label>
//                 <Button type="submit" disabled={isLoading}>
//                     {isLoading ? 'Connexion...' : 'Se connecter'}
//                 </Button>
//                 {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//             </FormContainer>
//             <LinkContainer>
//                 <div>
//                     <Link href="/password">Mot de passe oublié</Link>
//                 </div>
//                 <div>
//                     Vous n'avez pas de compte ?{' '}
//                     <Link href="/register">S'inscrire</Link>
//                 </div>
//             </LinkContainer>
//         </Container>
//     );
// };

// export default Login;