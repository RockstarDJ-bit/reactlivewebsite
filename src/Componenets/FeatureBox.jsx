import React from 'react'
import Feature from './Feature'
export default function FeatureBox(props) {
    return (
        <div className="a-box">
        <div className="a-b-img">
            <img src={props.image}/>
        </div>
        <div className="s-b-text">
            <h2>{props.title}</h2>
            <p>Book seat for your project at low cost.</p><br />
            <button className="btn-b" onClick="#">Book Now</button>
        </div>
            
        </div>
    )
}
