import * as React from 'react';
import '../style.css';


export default function AboutScreen() {
    return (
      <div style={{height:'800px'}}>
        <div className='aboutTitleBg'>About TSW Security Solutions</div>
        <div className='aboutTextcon'><p className='aboutText'>Fast, efficient, and honest, TSW Security Solutions has become a reputable and well-known Security Firm servicing the Cairns and surrounding regions.
Established in 2016, our business is family owned and run. We Are heavily involved in our community and supporting our locals. We provide regular training for our personnel, ensuring their skills are second to none.
Reach out to us to learn more about TSW, our business and staff, and how we can best serve you.</p>
</div>
<img src='/asset/AboutPic.png'/>

      </div>
    );
  }