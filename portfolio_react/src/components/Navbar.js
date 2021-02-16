import React from 'react';
import { Link, Router } from 'react-router-dom';
import '../components/Navbar.css'

function Navbar() {
    return (
        
        <div className='Navbar'>
            <Router>
            <Link to="/about">ABOUT</Link>
            <Link to="/work">WORK</Link>
            <Link to="/contact">CONTACT</Link>
            </Router>
        </div>
      
    )
}

export default Navbar
