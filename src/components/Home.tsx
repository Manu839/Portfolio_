import React from "react";
import img from "../assets/image.jpeg"
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMemo } from "react";


/* ================= TYPEWRITER HOOK ================= */
const useTypewriter = (
  words: string[],
  speed = 80,
  delay = 1500
) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(words[index].substring(0, subIndex));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, delay]);

  return text;
};


const Home = () => {
  const words = useMemo(
    () => ["Software Developer", "Full Stack Developer"],
    []
  );

  const typingText = useTypewriter(words);

  return (
    <section className="min-h-screen animated-gradient flex items-center justify-center relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-blue-400 text-lg font-medium">
              Hello, I'm
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
                Manu Sai
              </span>
            </h1>

            {/* TYPEWRITER */}
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light h-10">
              {typingText}
              <span className="text-blue-400 animate-pulse">|</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Software Developer with experience in building scalable
              full-stack web applications using the MERN stack, API
              integration, and responsive UI design. Passionate about
              performance and clean architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>

              <a
                href="https://drive.google.com/file/d/1EOEJjP4ImRwTjxyy100T63JdpxmZGCFo/view"
                className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            {/* Socials */}
<div className="flex space-x-5 pt-4">
  <a
    href="https://github.com/Manu839"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition transform hover:scale-110"
  >
    <Github className="h-6 w-6" />
  </a>

  <a
    href="https://www.linkedin.com/in/manu-sai-5a3b8b257/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition transform hover:scale-110"
  >
    <Linkedin className="h-6 w-6" />
  </a>

  <a
    href="mailto:2003manusai@email.com"
    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition transform hover:scale-110"
  >
    <Mail className="h-6 w-6" />
  </a>
</div>

          </motion.div>

          {/* RIGHT – IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-30 rounded-full" />
              <div className="relative w-full h-full rounded-full overflow-hidden border hover:shadow-2xl hover:shadow-purple-950 hover:duration-500 border-white/10">
<img
  src={img}
  alt="Profile"
  className="w-full h-full object-cover object-top scale-150"
/>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
