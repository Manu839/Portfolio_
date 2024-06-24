import React from 'react';
import image from '../images/img.jpg'
import Emoji from "react-emoji-render";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Hero = () => {
    return (
        <>
            <Helmet>
                <title>Home | Manu Sai</title>
            </Helmet>
            <section className="relative w-full h-screen mx-auto">
                <div className='flex flex-col pt-12 md:flex-row-reverse'>
                    <div
                        className={`sm:px-16 px-6 absolute pt-12 inset-0 top-[120px] max-w-7xl mx-14 flex flex-row items-start gap-5`}
                    >
                        <div className="flex flex-col justify-center items-center mt-5">
                            <div className="w-5 h-6 rounded-full bg-[#919eff]" />
                            <div className="w-1 sm:h-96 md:h-[400px] lg:h-[350px] h-[530px] bg-purple-600" />
                        </div>
                        <div>
                            <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white text-left`}>
                                HI, I'm <span className="font text-[#919eff]">Manu Sai</span>{' '}
                            </h1>
                            <p className='text-left text-xl lg:pr-96 text-white
                            pt-10'>
                                With a strong commitment to continuous learning,<br></br> I aspire to contribute my expertise as a web developer to<br></br> create dynamic and interactive web solutions that enhance<br></br> user engagement and drive client success.
                            </p>
                            <div className="ml-auto mr-auto md:mr-auto md:pt-10 pt-8 md:ml-0">
                                <Link
                                    to="/contact"
                                    smooth
                                    duration={500}
                                    className="group hover:scale-105 duration-300 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-[#919eff] cursor-pointer"
                                >
                                    Say hello<Emoji className="text-xl">👋</Emoji>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex hidden mr-48 w-full lg:w-[480px] border-2 border-white/15 rounded-full h-[550px] mt-10 items-center justify-center">
                            <img className='rounded-full '
                                src={image}
                                x="0"
                                y="15"
                                width="400"
                                height="400"
                            />
                        </div>
                    </div>

                </div>
            </section >

        </>
    );
};

export default Hero;