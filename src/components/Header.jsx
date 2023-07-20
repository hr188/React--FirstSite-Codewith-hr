import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function header() {
  return (
    <nav>
        <h1>Random naam</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/Contact"}>Contact</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/Services"}>Services</HashLink>
            
        </main>
    </nav>
  );
}

export default header