import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, About, Contact, Cart } from './pages';
import { Header } from './components';
import Breadcrumbs from './components/Breadcrumb';
import ColourTheme from './components/ColourTheme';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    <ColourTheme/>
  </>
  )
}

export default App
