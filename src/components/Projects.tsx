import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
   const projects = [
    {
        id: 1,
        title: 'YouTube Sentiment Analyzer',
        description: 'Sentiment analysis web app using React, Flask, MongoDB, and YouTube API. Processes 10,000+ comments using NLTK VADER and Plotly.',
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Flask', 'MongoDB', 'NLTK', 'Plotly'],
        github: 'https://github.com/Manu839/Youtube-sentiment-analysis',
        demo: '#',
        featured: true,
    },
    {
        id: 2,
        title: 'Stock Forecast & Risk Analyzer',
        description: 'Forecasting platform using FastAPI and ARIMA models for 500+ stocks, with real-time data and CAPM-based risk analytics.',
        image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'FastAPI', 'Python', 'scikit-learn', 'ARIMA'],
        github: 'https://github.com/Manu839/Stocks_risk-analysis_and_prediction',
        demo: '#',
        featured: true,
    },
    {
        id: 3,
        title: 'Farm Help',
        description: 'Smart agriculture assistance platform offering crop recommendations, weather alerts, and resource links for farmers.',
        image: 'https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'MongoDB', 'OpenWeather API','FastAPI', 'Random Forest'],
        github: 'https://github.com/Manu839/Farm_help',
        demo: '#',
        featured: true,
    },
    {
        id: 4,
        title: 'UPI Fraud Detection System',
        description: 'Machine learning-based system to detect fraudulent UPI transactions using transaction patterns and user behavior modeling.',
        image: 'https://images.pexels.com/photos/3943722/pexels-photo-3943722.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
        github: 'https://github.com/Manu839/Payment-Fraud_detection',
        demo: '#',
        featured: true,
    },
    {
        id: 7,
        title: 'Hostel Management System',
        description: 'Complete hostel management solution with room allocation and student management.',
        image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'MongoDB', 'Material-UI', 'Authentication'],
        github: 'https://github.com/Manu839/Hostel-Management-system',
        demo: '#',
        featured: false,
    },

];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            My Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for development
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-blue-400">Featured Projects</h3>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-gradient-to-br from-gray-900 to-blue-900/20 rounded-2xl border border-blue-500/20 overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        <a
                                            href={project.github}
                                            className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-purple-400">Other Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-xl border border-purple-500/20 overflow-hidden shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-3 right-3 flex space-x-2">
                                        <a
                                            href={project.github}
                                            className="p-1.5 bg-black/50 backdrop-blur-sm rounded-md hover:bg-purple-600 transition-colors duration-300"
                                        >
                                            <Github className="h-4 w-4" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="p-1.5 bg-black/50 backdrop-blur-sm rounded-md hover:bg-purple-600 transition-colors duration-300"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;