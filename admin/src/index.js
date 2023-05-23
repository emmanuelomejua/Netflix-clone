import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext'   
import { MoviesContextProvider } from './context/movieContext/MovieContext'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <AuthContextProvider>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
    </AuthContextProvider>
);
