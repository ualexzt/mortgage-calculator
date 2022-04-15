import React from 'react';
import Header from './components/header';
import { Container } from '@mui/material';
import BankList from './components/bankList';
import { Route, Routes } from 'react-router-dom';
import BankDetail from './components/bankDetail';
import EditBank from './components/editBank';
import Calculator from './components/calculator';

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
          <Route path="/calc" element={<Calculator />} />
          <Route path="/bank/add" element={<EditBank />} />
          <Route path="/bank/:id" element={<BankDetail />} />
          <Route path="/bank/edit/:id" element={<EditBank />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
