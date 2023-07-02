import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from './Context/AuthContextProvider';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
   </ChakraProvider>
);


reportWebVitals();
