import * as React from 'react';
import '../style.css';
import { Link} from "react-router-dom";

export default function HomeScreen() {
    return (
      <div>
        <section>
        <h1>TSW Security Solutions</h1>
        <p>Start editing to see some magic happen </p>
        </section>
        <section className='ServicesSection'>
        <a className='ServiceItem_1'>
          <a className='ServiceLabel'><Link style={{color:'white'}} to="/services">Assest Protection</Link></a>
        </a>
        <a className='ServiceItem_2'>
          <a className='ServiceLabel'><Link style={{color:'white'}} to="/services">Drug & Alcohol Screening</Link></a>
        </a>
        <a className='ServiceItem_3'>
          <a className='ServiceLabel'><Link style={{color:'white'}} to="/services">Static Gaurd</Link></a>
        </a>

        </section>
        <section>
        <h1>Industry Sectors</h1>
        <p>Start editing to see some magic happen </p>
        </section>
        <section className='Footer'> 
        
        </section>
      </div>
    );
  }