import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-blue-400 text-lg font-medium">Hello, I'm</p>
                            <h1 className="text-5xl lg:text-7xl font-bold">
                                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                                    Manu Sai
                                </span>
                            </h1>
<h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
    Software Developer
</h2>
                        </div>



<p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
    Software Developer with experience in building scalable full-stack web applications using the MERN stack, API integration, and responsive UI design. Passionate about optimizing performance and collaborating in agile environments to deliver impactful digital products.
</p>


                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/projects"
                                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25"
                            >
                                View My Work
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
<a
    href="https://drive.google.com/file/d/1EOEJjP4ImRwTjxyy100T63JdpxmZGCFo/view?usp=sharing" // Make sure the file is placed correctly in your public/assets folder
    download
    className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
>
    <Download className="mr-2 h-5 w-5" />
    Download CV
</a>

                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            <a
                                href="https://github.com/Manu839"
                                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/manu-sai-5a3b8b257"
                                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:2003manusai@gmail.com"
                                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="relative">
                        <div className="relative w-80 h-80 mx-auto">
                            {/* Glowing border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>

                            {/* Profile image container */}
                            <div className="relative w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
                                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                                    <img
                                        src=""
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600/20 rounded-full blur-xl animate-bounce delay-300"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/20 rounded-full blur-xl animate-bounce delay-700"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Home;