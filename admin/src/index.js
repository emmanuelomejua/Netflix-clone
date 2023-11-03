import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext'   
import { MoviesContextProvider } from './context/movieContext/MovieContext'
import { ListConntextProvider } from './context/listContext/listContext';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MoviesContextProvider>
       <ListConntextProvider>
         <App />
       </ListConntextProvider>
     </MoviesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
