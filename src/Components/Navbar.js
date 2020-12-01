import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default function Navbar() {
  return (
    <div className="NavbarContainer" >
      <ul>
        <Link className="Link" to="/" >Home</Link>
        <Link className="Link" to="/about" >About</Link>
        <Link className="Link" to="/projects" >Projects</Link>
        <Link className="Link" to="/research" >Research</Link>
        <a className="Link" href="./Rizvi_Syed_Resume.pdf" target="_blank">Resume</a>
      </ul>
    </div>
  )
}