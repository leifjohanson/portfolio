import React from 'react';
import { Link } from 'react-router-dom';
import './ProgrammingLanguage.css';

function ProgrammingLanguage(props) {
    return (
        <div className="container">
            <img src={props.imageSrc} alt="Swift" />
            <div className="text-container">
                <h2>{props.title}</h2>
                <div className="progress-bar">
                    <div className="progress-bar-background"></div>
                    <div className="progress-bar-indicator" style={{ width: props.percent, backgroundColor: "#5727B0" }}></div>
                    <div className="progress-percent">
                        {props.percent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgrammingLanguage;