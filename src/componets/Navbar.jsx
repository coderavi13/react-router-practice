import React from 'react'
import logo from '../assets/logo-test.png'
 const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} width="50" alt="" />
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar;