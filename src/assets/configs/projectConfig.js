import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import React from 'react'

const projectConfig = [
    {
        id: "project-1",
        title: "NeuroBank",
        links: [
            {
                name: "repo",
                url: "https://github.com/Javoo-bot/NeuroBank",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/Javoo-bot/NeuroBank/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/Javoo-bot/NeuroBank/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: require("../images/neurobank-preview.png"),
        description: "Advanced real-time fraud detection system leveraging machine learning and neural networks for enhanced banking security monitoring.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Alertium",
        links: [
            {
                name: "repo",
                url: "https://github.com/Javoo-bot/Alertium",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/Javoo-bot/Alertium/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/Javoo-bot/Alertium/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: require("../images/alertium-preview.png"),
        description: "Modular server implementation for handling MCP (Monitoring Control Protocol) with advanced alerting capabilities.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "CrewAI Agents",
        links: [
            {
                name: "repo",
                url: "https://github.com/Javoo-bot/crewai_agents",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/Javoo-bot/crewai_agents/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/Javoo-bot/crewai_agents/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: require("../images/crewai-preview.png"),
        description: "An innovative agentic flow system designed to automate penetration testing actions using AI agents.",
        target: "_blank"
    }
]

export default projectConfig