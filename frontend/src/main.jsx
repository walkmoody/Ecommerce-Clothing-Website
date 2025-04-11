import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename = "/Ecommerce-Clothing-Website">
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
)
