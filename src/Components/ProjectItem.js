import React from "react";

function ProjectItem({ project, title, link }) {

    return (
        <>
            <div
                href="##"
                className="bg-white dark:bg-dark border border-gray-400 overflow-hidden w-80 h-72 md:w-96 md:h-72 lg:w-[30em] lg:h-[20em] rounded-md items-center justify-center"
            >
                <div className="w-full bg-cover overflow-hidden">
                    <img src={project} alt="" className="w-full h-[13em] md:h-[13em] lg:h-[15em] transform transition duration-1000 hover:scale-125" />
                </div>
                <div class="flex mt-4 justify-between items-center px-4">
                    <h3 className="font-bold text-md dark:text-white">
                        {title}
                    </h3>
                    <a
                        href={link}
                        class="items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-purple-400 hover:bg-purple-500 duration-500"
                    >
                        Source
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProjectItem;