import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    function clickMe(){
     alert("Welcome contact on 6289128773 or jhadivakarkumar77@gmail.com");
    }
   
    return (
        <div id='main'>
            <Navbar />
            <div className="name">
                <h1><span>Launch Your Websites </span> with Confidence and Creativity</h1>
                <p claassName='details'>Make your own website and app in just few minutes with low cost and get
                delivery to fast. </p>
                <a href="#" className='cv-btn' onClick={clickMe}>Contct Us</a>
            </div>
        </div>
    )
}
