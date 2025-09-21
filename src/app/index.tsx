import './styles/App.css'
import Home from '../pages/home'
import { Login } from '../pages/login'
import { Register } from '../pages/register'
import { Profile } from '../pages/profile'
import { Catalog } from '../pages/catalog'
import 'normalize.css';
import { BrowserRouter, Routes, Route, } from 'react-router';

function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
