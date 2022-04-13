import React from 'react';
import Header from './components/header';
import { Container } from '@mui/material';
import BankList from './components/bankList';

function App() {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, justifyContent: 'center', gap: 5 }}
      >
        <BankList />
      </Container>
    </>
  );
}

export default App;
