import React from 'react'
import FeatureBox from "./FeatureBox";
import feature_1 from '../images/Wavedevelop.png';
import featureimage1 from '../images/Appdevlope.png';
import featureimage2 from '../images/javaDevelopment.png';
export default function Feature() {
    return (
        <div id="feature">
        <div className="a-container">
            <FeatureBox image={feature_1} title='Web Development'/>
            <FeatureBox image={featureimage1} title='App Development'/>
            <FeatureBox image={featureimage2} title='Java Application'/>
        </div>
            
        </div>
    )
}
