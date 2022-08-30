import * as React from 'react';
import '../style.css';
//import AboutPic from './asset/AboutPic.jpg';

export default function ContactScreen() {
    return (
      <div style={{height:'800px'}}>
        <div className='aboutTitleBg'>Contact Us</div>
          <div  className='ContactCenter'>
            <form className='ContactForm'>
              <label>Name</label>
              <input/>
              <label>Number</label>
              <input/>
              <label>Email</label>
              <input/>
              <label>Message</label>
              <textarea className='ContactMessage'/>
              <button className='ContactButton'>Send</button>
            </form>
          </div>
      </div>
    );
  }