import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import farm from "../assets/farm.png";
import stock from "../assets/stock.png";
import upi from "../assets/upi.png";
import youtube from "../assets/youtube.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "YouTube Sentiment Analyzer",
      description:
        "Sentiment analysis web app using React, Flask, MongoDB, and YouTube API. Processes 10,000+ comments using NLTK VADER and Plotly.",
      image: youtube,
      technologies: ["React", "Flask", "MongoDB", "NLTK", "Plotly"],
      github: "https://github.com/Manu839/Youtube-sentiment-analysis",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Stock Forecast & Risk Analyzer",
      description:
        "Forecasting platform using FastAPI and ARIMA models for 500+ stocks with CAPM-based risk analytics.",
      image: stock,
      technologies: ["React", "FastAPI", "Python", "ARIMA", "CAPM"],
      github:
        "https://github.com/Manu839/Stocks_risk-analysis_and_prediction",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Farm Help",
      description:
        "Smart agriculture platform providing crop recommendations, weather alerts, and ML-based insights for farmers.",
      image: farm,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "FastAPI",
        "Random Forest",
      ],
      github: "https://github.com/Manu839/Farm_help",
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      title: "UPI Fraud Detection System",
      description:
        "Machine learning system to detect fraudulent UPI transactions using behavior patterns.",
      image: upi,
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      github: "https://github.com/Manu839/Payment-Fraud_detection",
      demo: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Hostel Management System",
      description:
        "Complete hostel management solution with room allocation and student management.",
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      technologies: ["React", "MongoDB", "Material UI", "Auth"],
      github:
        "https://github.com/Manu839/Hostel-Management-system",
      demo: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack
            development, machine learning, and problem solving.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* ================= FEATURED ================= */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-10 text-blue-400">
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-blue-900/20 rounded-2xl border border-blue-500/20 overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Links */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black/60 backdrop-blur rounded-lg hover:bg-blue-600 transition"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-black/60 backdrop-blur rounded-lg hover:bg-blue-600 transition"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= OTHER PROJECTS ================= */}
        <div>
          <h3 className="text-2xl font-bold mb-10 text-purple-400">
            Other Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-xl border border-purple-500/20 overflow-hidden shadow-xl hover:shadow-purple-500/30 transition"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-700/30 text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
