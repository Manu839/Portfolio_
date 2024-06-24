import React from 'react'
import pro1 from "../images/url.png"
import pro2 from "../images/tec.jpg"
import pro4 from "../images/ip.png"
import pro6 from "../images/timer.png"
import pro7 from "../images/traffic.jpg"
import pro8 from "../images/hostel.png"

import { Helmet } from "react-helmet"
import ProjectItem from '../Components/ProjectItem'

import ReactLoading from 'react-loading';
import { useState, useEffect } from "react";

const projects = [
    {
        item: 6,
        title: "techub",
        img: pro2,
        source: "https://github.com/Manu839/Hostel-Management-system"
    },
    {
        item: 1,
        title: "url shortner",
        img: pro1,
        source: "https://github.com/Manu839/Url_shortner/tree/main"
    },
    {
        item: 4,
        title: "Ip address tracker",
        img: pro4,
        source: "https://github.com/Manu839/IP_adress_tracker"
    },
    {
        item: 5,
        title: "Hostel management system",
        img: pro8,
        source: "https://github.com/Manu839/Hostel-Management-system"
    },
    {
        item: 2,
        title: "Advance traffic control system",
        img: pro7,
        source: "https://github.com/Manu839/Advance_traffic_control_system"
    },
    {
        item: 3,
        title: "Fresh_mood",
        img: pro6,
        source: "https://github.com/Manu839/Fresh_Mood"
    }
]

projects.sort((a, b) => a.item - b.item);

function Projects() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const Example = ({ type, color }) => (
        <ReactLoading className="ml-auto mr-auto pt-24" type={"spinningBubbles"} color={"white"} height={200} width={100} />
    );
    return (
        <div>
            {isLoading ? (
                <Example />
            ) : (
                <div>
                    <Helmet>
                        <title>Project | Manu Sai</title>
                    </Helmet>
                    <section className="bg-slate-900">
                        <div className="pb-8 text-center pt-20">
                            <p className="font-bold font-Lobster text-white text-5xl inline border-b-4 hover:border-purple-500 border-gray-500 border-[lenth:0%] hover:border[length:100%] duration-500 transition-all ease-out ">
                                PROJECTS
                            </p>
                            <div className='md:mt-11 text-white'>Check out some of my work</div>
                        </div>
                        <div className="flex flex-col text-black flex-wrap justify-center md:flex-row gap-4 mt-5 content-center md:ml-0">
                            {projects.map(function (d, index) {
                                return (
                                    <div key={index}
                                        data-aos="zoom-in-up"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        data-aos-once="false"
                                        className='p-4'
                                    >
                                        <ProjectItem
                                            title={d.title}
                                            project={d.img}
                                            link={d.source}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}

export default Projects