import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";

const blogConfig = [
    {
        id: "project-1",
        title: "NeuroBank - Real-time Fraud Analysis",
        links: [
            {
                name: "repo",
                url: "https://github.com/Javoo-bot/NeuroBank",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://raw.githubusercontent.com/Javoo-bot/NeuroBank/main/preview.png",
        description: "Advanced real-time fraud detection system for banking transactions using machine learning and neural networks for enhanced security monitoring.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Alertium - MCP Protocol Server",
        links: [
            {
                name: "repo",
                url: "https://github.com/Javoo-bot/Alertium",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://raw.githubusercontent.com/Javoo-bot/Alertium/main/preview.png",
        description: "Modular server implementation for handling MCP (Monitoring Control Protocol) with advanced alerting capabilities and robust protocol management.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "CrewAI Agents - Automated Pentesting",
        links: [
            {
                name: "repo",
                url: "https://github.com/Javoo-bot/crewai_agents",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://raw.githubusercontent.com/Javoo-bot/crewai_agents/main/preview.png",
        description: "An innovative agentic flow system designed to automate penetration testing actions using AI agents for enhanced security assessment.",
        target: "_blank"
    }
]

export default blogConfig