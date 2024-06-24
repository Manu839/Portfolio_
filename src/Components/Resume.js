import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import ReactLoading from 'react-loading';
import { useState, useEffect } from "react";

function Resume() {
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
                        <title>CV | Manu Sai</title>
                    </Helmet>
                    <div className="bg-slate-900 h-screen">
                        <div className="pb-8 text-center text-white pt-20">
                            <p className="font-bold font-Lobster text-5xl inline border-b-4 hover:border-purple-500 border-gray-500 border-[lenth:0%] hover:border[length:100%]  duration-500 transition-all ease-out">
                                RESUME
                            </p>
                        </div>

                        <div
                            id="pdf-container"
                            className=" flex h-96 mx-auto mt-10 bg-blue p-3 rounded-xl dark:bg-none dark:drop-shadow-xl dark:text-white"
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-once="false"
                        >
                            <iframe
                                className="w-full h-full justify-center"
                                title="Resume"
                                src="https://drive.google.com/file/d/1raeKsy3OxnXIbXnfpqxVacs-dg9z3iWv/view?usp=drive_link"
                                allow="autoplay"
                            ></iframe>
                        </div>
                        <a href="https://drive.google.com/file/d/1raeKsy3OxnXIbXnfpqxVacs-dg9z3iWv/view?usp=sharing" className="flex py-10 items-center justify-center">
                            <button
                                className="group hover:scale-105 duration-300 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-[#919eff] cursor-pointer"
                            >
                                Download
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Resume;
