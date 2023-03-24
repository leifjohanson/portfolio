import React from "react";
import { Link } from 'react-router-dom';
import "./MobileProjectList.css";
import CodingProject from "../CodingProject/CodingProject";
import SpellChampImage from "./ProjectImages/SpellChamp.png";
import PassTheTriviaImage from "./ProjectImages/PassTheTrivia.png";

var projects = [
    {
        title: "Spell Champ",
        description: "Spell Champ is a single-player spelling bee iOS game with over 1500 levels built using UIKit. Published in February 2023, it is used in over 7 countries worldwide. It is an independently developed iOS application built outside of any university coursework.",
        image: SpellChampImage,
        buttonTitle: "SEE ON APP STORE",
        link: "https://apps.apple.com/us/app/spell-champ-bee-a-champion/id1670776147",
    },
    {
        title: "Pass The Trivia",
        description: "Pass The Trivia is a 1200 question, 4000 line multiplayer trivia game published June 2022. It is an independent iOS development project with hundreds of users in over 20 countries worldwide.",
        image: PassTheTriviaImage,
        buttonTitle: "SEE ON APP STORE",
        link: "https://apps.apple.com/us/app/pass-the-trivia/id1628448087",
    },
]
// 
function MobileProjectList() {
    return (
        <div className="mobileProjectList">
            <h1 className="sectionTitle">My iOS Projects</h1>
            <CodingProject project={projects[0]} />
            <CodingProject project={projects[1]} />
        </div>
    );
}

export default MobileProjectList;