import React from 'react';
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
const personalInfo = [
    { icon: User, label: 'Name', value: 'Manu Sai' },
    { icon: MapPin, label: 'Location', value: 'Raipur, Chhattisgarh' },
    { icon: Calendar, label: 'Age', value: '21 years old' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE, IIIT Naya Raipur' },
];


const timeline = [
    {
        year: 'Jul 2024 - Nov 2024',
        title: 'Frontend Developer Intern',
        institution: 'Teraffic',
        description: 'Built 5+ responsive UI components using React and Tailwind. Collaborated in agile teams and tested 20+ REST APIs using Postman.',
    },
    {
        year: 'Sep 2023 - Nov 2023',
        title: 'Full-Stack Developer Intern',
        institution: 'EDXL Learning & Innovation',
        description: 'Developed full-stack web apps using the MERN stack, improved app performance by 10%, and enhanced team workflow by 25%.',
    },
    {
        year: '2022 – 2026',
        title: 'B.Tech in Computer Science',
        institution: 'IIIT Naya Raipur, Chhattisgarh',
        description: 'Currently in 3rd year. CGPA: 7.4. Passionate about full-stack development and machine learning.',
    },
    {
        year: '2020 – 2022',
        title: 'High School',
        institution: 'Holy Cross Sr. Sec. School, Raipur',
        description: 'Science Stream – 82%. Developed early interest in algorithms and software development.',
    },
];


    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Personal Info */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-gray-900 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">Personal Information</h3>
                            <div className="space-y-4">
                                {personalInfo.map((info, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="p-3 bg-blue-600/20 rounded-lg">
                                            <info.icon className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 p-8 rounded-2xl border border-purple-500/20 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-purple-400">My Story</h3>
<p className="text-gray-300 leading-relaxed">
    I'm a Computer Science undergraduate at IIIT Naya Raipur with a strong foundation in full-stack development and a growing passion for machine learning and data science. I’ve interned as both a frontend and full-stack developer, gaining hands-on experience in scalable applications and agile workflows.
</p>
<p className="text-gray-300 leading-relaxed mt-4">
    I love solving real-world problems with clean, maintainable code. I’m particularly skilled in React, Node.js, MongoDB, and enjoy building interactive UIs, optimizing APIs, and collaborating with cross-functional teams to build impactful solutions.
</p>

                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-center lg:text-left">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                My Journey
                            </span>
                        </h3>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

                            {timeline.map((item, index) => (
                                <div key={index} className="relative flex items-start space-x-6 pb-8">
                                    {/* Timeline dot */}
                                    <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/25">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                            <GraduationCap className="h-4 w-4 text-blue-600" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-gradient-to-br from-gray-900 to-blue-900/10 p-6 rounded-xl border border-blue-500/20 shadow-xl">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                            <span className="text-blue-400 text-sm font-medium bg-blue-600/20 px-3 py-1 rounded-full">
                                                {item.year}
                                            </span>
                                        </div>
                                        <p className="text-blue-300 font-medium mb-2">{item.institution}</p>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;