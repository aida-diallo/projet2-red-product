'use client';

import React, { useEffect, useState } from 'react';
import Login from './login/page';
import { Container, Main } from './styles';

const HomePage = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data-endpoint`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Une erreur inconnue s\'est produite');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Main>
        {loading && <p>Chargement...</p>}
        {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}
        {!loading && !error && <Login data={data} />}
      </Main>
    </Container>
  );
};

export default HomePage;
