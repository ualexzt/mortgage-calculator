import React from 'react';
import Header from './components/header';
import { Container } from '@mui/material';
import BankList from './components/bankList';
import { Route, Routes } from 'react-router-dom';
import BankDetail from './components/bankDetail';

function App() {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, justifyContent: 'center', gap: 5 }}
      >
        <Routes>
          <Route path="/" element={<BankList />} />
          <Route path="/bank/:id" element={<BankDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
