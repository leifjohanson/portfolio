import React from 'react';
import { Link } from 'react-router-dom';
import './CodingProject.css';
import logo from "../MobileProjectList/ProjectImages/SpellChamp.png";

function CodingProject(props) {
    return (
        <div className="codingProjectCard">
            <img src={props.project.image} alt={props.project.title} />
            <div className="codingProjectCard__content">
                <h2 className="codingProjectCard__title">{props.project.title}</h2>
                <p className="codingProjectCard__description">{props.project.description}</p>
                <a href={props.project.link} className="codingProjectCard__button">
                    <button className="codingProjectCard__button">
                        {props.project.buttonTitle}
                    </button>
                </a>
            </div>
        </div>
    );
}

export default CodingProject;