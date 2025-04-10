import React from 'react';
import './LanguageList.css';
import ProgrammingLanguage from '../ProgrammingLanguage/ProgrammingLanguage';

import SwiftLogo from './languageImages/SwiftLogo.png';
import JavaLogo from './languageImages/JavaLogo.png';
import DartLogo from './languageImages/DartLogo.png';
import SQLLogo from './languageImages/SQLLogo.png';
import CLogo from './languageImages/CLogo.png';
import PythonLogo from './languageImages/PythonLogo.png';
import JavaScriptLogo from './languageImages/JavaScriptLogo.png';
import { Element } from 'react-scroll'


function LanguageList() {
    return (
        <Element name='my-skills'>
            <div className='languageList'>
                <h1 className='sectionTitle'>My Skills</h1>
                <ProgrammingLanguage title="JavaScript" imageSrc={JavaScriptLogo} title2='Swift' image2Src={SwiftLogo}/>
                <ProgrammingLanguage title="Java" imageSrc={JavaLogo} title2='Python' image2Src={PythonLogo}/>
                <ProgrammingLanguage title="Dart" imageSrc={DartLogo} title2='SQL' image2Src={SQLLogo}/>
            </div>
        </Element>
        
    );
}

export default LanguageList;
