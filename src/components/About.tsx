import React from "react";
import { User, MapPin, Calendar, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const personalInfo = [
    { icon: User, label: "Name", value: "Manu Sai" },
    { icon: MapPin, label: "Location", value: "Raipur, Chhattisgarh" },
    { icon: Calendar, label: "Age", value: "21 years old" },
    { icon: GraduationCap, label: "Education", value: "B.Tech CSE, IIIT Naya Raipur" },
  ];

  const timeline = [
    {
      year: "Jul 2024 - Nov 2024",
      title: "Frontend Developer Intern",
      institution: "Teraffic",
      description:
        "Built 5+ responsive UI components using React and Tailwind. Collaborated in agile teams and tested 20+ REST APIs using Postman.",
    },
    {
      year: "Sep 2023 - Nov 2023",
      title: "Full-Stack Developer Intern",
      institution: "EDXL Learning & Innovation",
      description:
        "Developed full-stack web apps using the MERN stack, improved app performance by 10%, and enhanced team workflow by 25%.",
    },
    {
      year: "2022 – 2026",
      title: "B.Tech in Computer Science",
      institution: "IIIT Naya Raipur, Chhattisgarh",
      description:
        "Currently in 3rd year. CGPA: 7.4. Passionate about full-stack development and machine learning.",
    },
    {
      year: "2020 – 2022",
      title: "High School",
      institution: "Holy Cross Sr. Sec. School, Raipur",
      description:
        "Science Stream – 82%. Developed early interest in algorithms and software development.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full" />

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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ================= LEFT ================= */}
          <div className="space-y-10">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-blue-900/20 p-8 rounded-2xl border border-blue-500/20 shadow-2xl hover:border-blue-400/40 transition"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Personal Information
              </h3>

              <div className="space-y-5">
                {personalInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-blue-600/20 rounded-lg group-hover:scale-110 transition">
                      <info.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/20 p-8 rounded-2xl border border-purple-500/20 shadow-2xl hover:border-purple-400/40 transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                My Story
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a Computer Science undergraduate at IIIT Naya Raipur with a
                strong foundation in full-stack development and a growing
                passion for machine learning and data science.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                I enjoy building scalable applications, crafting interactive
                UIs, optimizing APIs, and collaborating in agile teams to
                deliver real-world solutions with clean, maintainable code.
              </p>
            </motion.div>
          </div>

          {/* ================= RIGHT / TIMELINE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-br from-gray-900 to-blue-900/10 p-6 rounded-xl border border-blue-500/20 shadow-xl hover:border-blue-400/40 transition">
                    <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                      <h4 className="text-xl font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="text-blue-400 text-sm font-medium bg-blue-600/20 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-blue-300 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
