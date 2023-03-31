import React from 'react';
import './Education.css';

function Education() {
    return (
        <div className="education">
            <h1 className='sectionTitle'>My Education</h1>
            <div className='educationCardWrapper'>
                <div className='educationCard'>
                    <p className="educationCardTitle">
                        B.S., Computer Science
                    </p>
                    <p className="educationCardSubtitle">
                        Minor in Business Administration
                    </p>
                </div>
                <div className='educationCard'>
                    <p className="educationCardTitle">
                        3.55 GPA
                    </p>
                    <p className="educationCardSubtitle">
                        Western Washington University
                    </p>
                </div>
                <div className='educationCard'>
                    <p className="educationCardTitle">
                        June 2023
                    </p>
                    <p className="educationCardSubtitle">
                        Graduation Date
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;