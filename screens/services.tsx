import * as React from 'react';
import '../style.css';


export default function ServicesScreen() {
    return (
      <div>
        <h1>Our Services</h1>
        <p> </p>
        <div className='DivBox'>
        <h2>Drug & Alcohol Testing</h2>
          <p>Business owners are responsible for ensuring the safety of staff and customers.  Your business could be at significant risk if workers are under the influence of drugs or alcohol. TSW rises to the occasion to meeting client specific needs, we offer on-site drugs and alcohol screening.
              The on-site oral fluid drug testing we offer provides for the use of quick, quality assured test devices, standardised and supervised/observed collections, accurate interpretation by experienced collectors and quick turn-around times for results.</p>

             <h3>Advantages of saliva drug testing</h3>
              <ul>
                <li>Drug testing using saliva is quick, with results available in as little as 5 minutes. This reduces downtime and allows more people to be tested. Compare this with laboratory based urine testing, where results can take days rather than minutes</li>
                <li>Saliva drug testing is non-intrusive and can be done virtually anywhere. Urine testing needs restroom facilities and, for some people, can make them feel uncomfortable.</li>
                <li>Testing using saliva is accurate. In fact, using the Drager 5000 drug testing unit results of 99% accuracy rate and greater are achieved.</li>
                <li>Saliva drug testing has been approved as a preferred method over urine drug testing by Fair Work Australia.</li>
                <li>The detection period for urine is greater than it is for saliva. This potentially means, for example, a person who took a drug 1 or 2 days before work and is able to perform their job safely could return a positive result using urine drug testing. This is why saliva drug testing is considered a more accurate way of determining if someone is fit to be at work.</li>
              </ul>
        </div>
        <div className='DivBox'>
        <h2>Assest Protection</h2>
        <p>We provide uniformed security for your business, or event. Our trained professionals know how to manage people, diffuse aggression, and manage any situation that may arise in protecting your business or major event, including: 
          <ul>
            <li>Gate House</li>
            <li>Patron Screenings</li>
            <li>Security Briefings</li>
            <li>Volunteer Inductions</li>
            <li>Situation Management</li>
          </ul>
        </p>
        </div>

        <div className='DivBox'>
        <h2>Static Gaurd</h2>
        <p>Business will encounter times where they are responsible for securing an entery point or equipment. TSW can provide this solution for your needs with officers trained 

        Generally, This includes manned services at access points, guarding equipment or valuables for loss prevention, crowd control, event security, screen security, or personal protection, essentially anything that requires a person to be on site. 
        <ul>
            <li>Gate House</li>
            <li>Liaison with Law Enforcement</li>
        </ul>
        </p>
        </div>

      </div>
    );
  }