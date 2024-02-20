import { useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, About, Contact } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
