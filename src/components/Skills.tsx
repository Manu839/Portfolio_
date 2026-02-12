import React from "react";
import { Code, Database, Globe, Server } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Scripting",
      color: "blue",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "Java",
        "SQL",
        "HTML5 / CSS3",
      ],
    },
    {
      icon: Server,
      title: "Web & Application Development",
      color: "purple",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Flask / FastAPI",
        "Tailwind CSS",
        "Bootstrap / Material UI",
      ],
    },
    {
      icon: Database,
      title: "Databases & DevOps",
      color: "green",
      skills: [
        "MongoDB",
        "MySQL / PostgreSQL",
        "Docker",
        "Git & GitHub",
        "Postman",
        "Agile / Scrum",
      ],
    },
    {
      icon: Globe,
      title: "Machine Learning & Data Science",
      color: "pink",
      skills: [
        "Python (ML / NLP)",
        "TensorFlow / PyTorch",
        "Scikit-learn",
        "Pandas / NumPy",
        "Matplotlib / Seaborn",
        "NLTK / Plotly.js",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-600 to-blue-800",
        border: "border-blue-500/20",
        text: "text-blue-400",
        badge: "bg-blue-600/20 text-blue-300 border-blue-500/30",
      },
      purple: {
        bg: "from-purple-600 to-purple-800",
        border: "border-purple-500/20",
        text: "text-purple-400",
        badge: "bg-purple-600/20 text-purple-300 border-purple-500/30",
      },
      green: {
        bg: "from-green-600 to-green-800",
        border: "border-green-500/20",
        text: "text-green-400",
        badge: "bg-green-600/20 text-green-300 border-green-500/30",
      },
      pink: {
        bg: "from-pink-600 to-pink-800",
        border: "border-pink-500/20",
        text: "text-pink-400",
        badge: "bg-pink-600/20 text-pink-300 border-pink-500/30",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, modern applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* ================= SKILLS GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {skillCategories.map((category, index) => {
            const color = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border ${color.border} p-8 shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div
                    className={`p-4 bg-gradient-to-r ${color.bg} rounded-xl shadow-lg`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ml-4 ${color.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${color.badge}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
