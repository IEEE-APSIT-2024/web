import React from 'react';
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import ReactDOM from 'react-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
    </Container>
  </React.StrictMode>
);
