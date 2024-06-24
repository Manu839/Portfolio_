import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "PROJECTS", link: "/projects" },
        { name: "RESUME", link: "/resume" },
        { name: "CONTACT", link: "/contact" },
    ];
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);
    return (
        <nav
            className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/30 hover:border-purple-500  text-gray-900 hover:border-b-4 duration-500 " : "text-white"
                }`}
        >
            <div className="flex items-center w-full justify-between">
                <div className="mx-8">
                    <div className="text-4xl border-b-2 border-b-purple-400 font-bold text-purple-500">
                        <Typewriter
                            options={{
                                strings: ["MANU", "SAI"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <div
                    className={` ${sticky ? "md:bg-white text-purple-900 bg-white" : "bg-white"
                        } text-gray-900  md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
                >
                    <ul className="flex items-center gap-1 py-2  text-lg">
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className="px-3 lg:px-6 hover:text-[#919eff] duration-300">
                                <Link to={menu?.link}>{menu?.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={`z-[999]  ${open ? "text-gray-900" : "text-gray-100"
                        } text-3xl md:hidden m-5`}
                >
                    <ion-icon name="menu"></ion-icon>
                </div>
                <div
                    className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
                        }`}
                >
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {menuLinks?.map((menu, i) => (
                            <li
                                onClick={() => setOpen(false)}
                                key={i}
                                className="px-6 duration-300 hover:text-[#919eff]"
                            >
                                <Link to={menu?.link}>{menu?.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;