import React from 'react'
import aboutimage from '../images/About.png';
export default function About() {
    return (
        <div id='about'>
        <div className='about-image'>
        <img src={aboutimage} alt=''/>

        </div>
        <div  className='about-text'>
            <h2>mobile developement</h2>
            <p>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a 
            network connection to work with remote computing resources.</p>
            <button>Click me</button>
        </div>
            
        </div>
    )
}
