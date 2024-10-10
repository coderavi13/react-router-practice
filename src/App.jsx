import React from 'react'
import Navbar from './componets/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Navbar />
<div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </div>
    </div>
  )
}

export default App;

