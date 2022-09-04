import * as React from 'react';
import '../style.css';
//import AboutPic from './asset/AboutPic.jpg';

export default function ContactScreen() {
    return (
      <div style={{height:'800px'}}>
        <div className='aboutTitleBg'>Contact Us</div>
          <div  className='ContactCenter'>
            <form className='ContactForm' action="contact.php" method="post">
              <label >Name</label>
              <input name='ClientName' />
              <label >Phone Number</label>
              <input name='ClientPhone'/>
              <label >Email</label>
              <input name='ClientEmail'/>
              <label >Message</label>
              <textarea className='ContactMessage' name='ClientMessage'/>
              <button className='ContactButton'>Send</button>
            </form>
          </div>
      </div>
    );
  }