import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProvider from './components/Provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { FavoritesProvider } from './components/Provider/AuthFavorite'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
        <FavoritesProvider>
          <RouterProvider router={Router} />
        </FavoritesProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
