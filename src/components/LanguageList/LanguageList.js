import React from 'react';
import { Link } from 'react-router-dom';
import './LanguageList.css';
import ProgrammingLanguage from '../ProgrammingLanguage/ProgrammingLanguage';

import SwiftLogo from './languageImages/SwiftLogo.png';
import JavaLogo from './languageImages/JavaLogo.png';
import DartLogo from './languageImages/DartLogo.png';
import SQLLogo from './languageImages/SQLLogo.png';
import CLogo from './languageImages/CLogo.png';
import PythonLogo from './languageImages/PythonLogo.png';
import JavaScriptLogo from './languageImages/JavaScriptLogo.png';



function LanguageList() {
    return (
        <div className='languageList'>
            <h1 className='sectionTitle'>My Skills</h1>
            <ProgrammingLanguage title="Swift" imageSrc={SwiftLogo} percent="90%"/>
            <ProgrammingLanguage title="Java" imageSrc={JavaLogo} percent="85%"/>
            <ProgrammingLanguage title="Dart" imageSrc={DartLogo} percent="80%"/>
            <ProgrammingLanguage title="C" imageSrc={CLogo} percent="75%"/>
            <ProgrammingLanguage title="Python" imageSrc={PythonLogo} percent="75%"/>
            <ProgrammingLanguage title="JavaScript" imageSrc={JavaScriptLogo} percent="70%"/>
            <ProgrammingLanguage title="SQL" imageSrc={SQLLogo} percent="70%"/>
        </div>
        
    );
}

export default LanguageList;