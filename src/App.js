import React from 'react'
import Header from "./Componenets/Header";
import Feature from './Componenets/Feature';
import About from './Componenets/About';
import aboutimage from './images/About.png';
import aboutimage1 from './images/download.png'
import Contact from './Componenets/Contact';

export default function App() {
    return (
        <div className="App">
            <Header />
            <Feature/>
            {/* <About image={aboutimage} title="App development" button="Get the App"/>
            <About image={aboutimage1} title='Download and Get tha App Now' button='Download'/>
             */}
             <About />
            
            <Contact />
        </div>
    )
}
