import React from 'react'
import Navbar from '../Components/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from '../Components/Home.js';
import Footer from '../Components/Footer.js';
import Contact from '../Components/Contact.js';
import Resume from '../Components/Resume.js';
import Project from '../Components/Projects.js';
import Journey from '../Components/Journey.js';
function Com() {
    return (
        <div>
            <div className='bg-slate-900 '>
                <BrowserRouter >
                    <div className='md:hidden block'>
                        <Navbar />
                        <Hero />
                        <Journey />
                        <Project />
                        <Resume />
                        <Contact />

                    </div>
                    <div className=' md:block hidden'></div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Hero className="App" />} />
                        <Route path="/about" element={<Journey />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/resume" element={< Resume />} />
                        <Route path="/contact" element={< Contact />} />
                    </Routes>
                    <div />
                    <Footer />
                </BrowserRouter>
            </div >
        </div>
    )
}

export default Com