import * as React from 'react';
import '../style.css';
import { Link} from "react-router-dom";

export default function Header() {
    return (
      <div>
      <div className='MenuBar'>
        <div className='MenuName'>
        <h2>TSW Secuirty Solutions </h2>
        </div>
        <div className='MenuLinks'>
          <a className='Link'><Link style={{color:'black'}} to="/">Home</Link></a>
          <a className='Link'><Link style={{color:'black'}} to="about">About</Link></a>
          <a className='Link'><Link style={{color:'black'}} to="Services">Our Services</Link></a>
          <a className='Link'><Link style={{color:'black'}} to="Contact">Contact Us</Link></a>
        </div>
        
      </div>
      <image src=''/>
      </div>
    );
  }