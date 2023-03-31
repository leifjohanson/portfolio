import React from "react";
import "./SWEProjectList.css";
import CodingProject from "../CodingProject/CodingProject";
import WWXImage from "../MobileProjectList/ProjectImages/WWXImage.png";
import TravelrImage from "../MobileProjectList/ProjectImages/TravelrImage.png";
import LabyrinthImage from "../MobileProjectList/ProjectImages/LabyrinthImage.png";

var projects = [
    {
        title: "Water Weather Stations",
        description: "In progress 10-person software engineering project partnered with the SEA Discovery Center in Poulsbo, WA, that monitors Puget Sound weather conditions using telemetry processing. Contains a website (Angular), API (Node.js), mobile app (Flutter), and hardware (C). I hold the position of mobile application team lead, managing and directing around 3-4 engineers.",
        image: WWXImage,
        buttonTitle: "SEA DISCOVERY CENTER",
        link: "https://sea.wwu.edu",
    },
    {
        title: "travelr",
        description: "Vacation planner web application built using React for WWU's web development course. Development team consisted of 5 students, including myself. Used multiple APIs, including Yelp's and Google Maps (see Activities page, pictured), as well as a backend, primarily using MongoDB.",
        image: TravelrImage,
        buttonTitle: "SEE ON GITHUB",
        link: "https://github.com/leifjohanson/labyrinth"
    },
    {
        title: "Labyrinth Game",
        description: "Three person OOP-focused software development project. I managed myself and two other engineers to create this single or co-op labyrinth game (see repository for rules and gameplay). This project was built fully in Java, including the UI elements.",
        image: LabyrinthImage,
        buttonTitle: "SEE ON GITHUB",
        link: "https://github.com/leifjohanson/travelr"
    },
]
// 
function SWEProjectList() {
    return (
        <div className="sweProjectList">
            <h1 className="sectionTitle">My Other SWE Projects</h1>
            <CodingProject project={projects[0]} />
            <CodingProject project={projects[1]} />
            <CodingProject project={projects[2]} />
        </div>
    );
}

export default SWEProjectList;