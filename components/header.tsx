import * as React from 'react';
import '../style.css';
import { Link} from "react-router-dom";

export default function Header() {
    return (
      <div>
        <img src={'https://firebasestorage.googleapis.com/v0/b/tswsecuritysolutions.appspot.com/o/MainPage%2F1.png?alt=media&token=e57c4f2f-40b0-4568-947b-5bf38392ba85'} className='HeaderImg'/>
      <div className='MenuBar'>
        <div className='MenuName'>
        <h2>TSW Secuirty Solutions </h2>
        </div>
        <div className='MenuLinks'>
          <a className='Link'><Link style={{color:'white'}} to="/">Home</Link></a>
          <a className='Link'><Link style={{color:'white'}} to="/about">About</Link></a>
          <a className='Link'><Link style={{color:'white'}} to="/services">Our Services</Link></a>
          <a className='Link'><Link style={{color:'white'}} to="Contact">Contact Us</Link></a>
        </div>
        
      </div>
      
      </div>
    );
  }