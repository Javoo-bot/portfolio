import React from 'react'
import {BsBank, BsShieldLock} from "react-icons/bs";
import {FaGraduationCap} from "react-icons/fa";
import {BiShield} from "react-icons/bi";

const homeConfig = {
    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Javier Lobato</strong>
        </h1>,
    titles: [
        "Data Analyst",
        "Python Developer",
        "Cybersecurity Enthusiast"
    ],
    about: {
        start: "Data Analyst with strong Python skills and banking sector experience. " +
            "Specialized in creating insightful dashboards and automating data processes.",
        exit: "Currently expanding into cybersecurity to combine data analytics with " +
            "financial security expertise."
    },
    workTimeline: [
        {
            id: "edu-2",
            title: "Master in Cybersecurity",
            company: "Universidad Oberta de Cataluña",
            description: "Focus on banking security and threat prevention.",
            date: "Starting September 2025",
            icon: <BsShieldLock/>,
            tags: ["cybersecurity", "security-analytics"]
        },
        {
            id: "work-2",
            title: "Data Analyst",
            company: "Ewala IT Services",
            description: "Building data pipelines and dashboards for security monitoring. " +
                "Achieved 40% faster compliance reviews through process automation.",
            date: "2025-Present",
            icon: <BiShield/>,
            tags: ["python", "powerbi", "cybersecurity"]
        },
        {
            id: "edu-1",
            title: "Master in Data Analysis",
            company: "University of Oviedo",
            description: "Specialized in data analysis and machine learning.",
            date: "2023-2025",
            icon: <FaGraduationCap/>,
            tags: ["data-analysis", "machine-learning"]
        },
        {
            id: "work-1",
            title: "Bank Counter Clerk",
            company: "Caja Rural Bank",
            description: "Handled financial operations and database maintenance while ensuring regulatory compliance.",
            date: "2023-2024",
            icon: <BsBank/>,
            tags: ["finance", "database"]
        },
        {
            id: "edu-0",
            title: "Bachelor in Economics & Philosophy",
            company: "University of Oviedo & Aberdeen",
            description: "Double degree with international experience.",
            date: "2015-2023",
            icon: <FaGraduationCap/>,
            tags: ["economics", "critical-thinking"]
        }
    ]
}

export default homeConfig