import * as React from 'react';
import '../style.css';
import { Link} from "react-router-dom";

export default function HomeScreen() {
    return (
      <div>
        <section>
        <h1>TSW Security Solutions - Your North Queensland Security Experts</h1>
        <p className='Sec1_blub'>Since 2016, TSW Security Solutions has been providing exceptional security services in the Cairns and surrounding region.  Family owned and operated, TWS is well equipped to assist with your business or event security needs, and we welcome your enquiry.</p>
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
        <div className='IndContainer'>
          <div className='IndItem'>
            <div className='IndItemTitle_Left'>Commercial</div>
            <div className='IndItemText'>We cater to a number of commerical facilitys </div>
          </div>

          <div className='IndItem'>
            <div className='IndItemText'>We cater to a number of commerical facilitys </div>
            <div className='IndItemTitle_Right'>Government</div>
          </div>

          <div className='IndItem'>
            <div className='IndItemTitle_Left'>Residential</div>
            <div className='IndItemText'>We cater to a number of commerical facilitys </div>
          </div>
        </div>
        <p></p>
        </section>
        <section className='Footer'> 
        
        </section>
      </div>
    );
  }