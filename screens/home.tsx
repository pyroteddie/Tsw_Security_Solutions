import * as React from 'react';
import '../style.css';


export default function HomeScreen() {
    return (
      <div>
        <section>
        <h1>TSW Security Solutions</h1>
        <p>Start editing to see some magic happen </p>
        </section>
        <section className='ServicesSection'>
        <a className='ServiceItem_1'>
          <a className='ServiceLabel'>Assest Protection</a>
        </a>
        <a className='ServiceItem_2'>
          <a className='ServiceLabel'>Drug & Alcohol Screening</a>
        </a>
        <a className='ServiceItem_3'>
          <a className='ServiceLabel'>Static Gaurd</a>
        </a>

        </section>
        <section>
        <h1>Industry Sectors</h1>
        <p>Start editing to see some magic happen </p>
        </section>
        <section className='GallerySection'>
        <h1>Gallery</h1>
        
        </section>
        <section className='Footer'> 
        
        </section>
      </div>
    );
  }