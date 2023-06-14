import React from 'react';
import './ProgrammingLanguage.css';

function ProgrammingLanguage(props) {
    return (
        <div className="row">
            <div className='column'>
                <img src={props.imageSrc} alt="Swift" />
                <div className="text-container">
                    <h2>{props.title}</h2>
                </div>
            </div>
            <div className='column'>
                <img src={props.image2Src} alt="Swift" />
                <div className="text-container">
                    <h2>{props.title2}</h2>
                </div>
            </div>
        </div>
    );
}

export default ProgrammingLanguage;