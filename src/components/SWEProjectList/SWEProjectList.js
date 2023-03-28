import React from "react";
import { Link } from 'react-router-dom';
import "./SWEProjectList.css";
import CodingProject from "../CodingProject/CodingProject";
import WWXImage from "../MobileProjectList/ProjectImages/WWXImage.png";

var projects = [
    {
        title: "Water Weather Stations",
        description: "In progress 10-person software engineering project partnered with the SEA Discovery Center in Poulsbo, WA, that monitors Puget Sound weather conditions using telemetry processing. Contains a website (Angular), API (Node.js), mobile app (Flutter), and hardware (C). I hold the position of mobile application team lead, managing and directing around 3-4 engineers.",
        image: WWXImage,
        buttonTitle: "SEA DISCOVERY CENTER",
        link: "https://sea.wwu.edu",
    },
]
// 
function SWEProjectList() {
    return (
        <div className="sweProjectList">
            <h1 className="sectionTitle">My Other SWE Projects</h1>
            <CodingProject project={projects[0]} />
        </div>
    );
}

export default SWEProjectList;