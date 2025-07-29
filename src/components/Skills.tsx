import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
 const skillCategories = [
    {
        icon: Code,
        title: 'Languages & Scripting',
        color: 'blue',
        skills: [
            { name: 'JavaScript (ES6+)', level: 85 },
            { name: 'TypeScript', level: 70 },
            { name: 'Python', level: 75 },
            { name: 'Java', level: 80 },
            { name: 'SQL', level: 80 },
            { name: 'HTML5 / CSS3', level: 90 },
        ],
    },
    {
        icon: Server,
        title: 'Web & Application Development',
        color: 'purple',
        skills: [
            { name: 'React.js', level: 90 },
            { name: 'Node.js', level: 80 },
            { name: 'Express.js', level: 75 },
            { name: 'Flask / FastAPI', level: 70 },
            { name: 'Tailwind CSS', level: 85 },
            { name: 'Bootstrap / Material-UI', level: 75 },
        ],
    },
    {
        icon: Database,
        title: 'Databases & DevOps',
        color: 'green',
        skills: [
            { name: 'MongoDB', level: 80 },
            { name: 'MySQL / PostgreSQL', level: 70 },
            { name: 'Docker', level: 65 },
            { name: 'Git & GitHub', level: 90 },
            { name: 'Postman', level: 85 },
            { name: 'Agile / Scrum', level: 75 },
        ],
    },
    {
        icon: Globe,
        title: 'Machine Learning & Data Science',
        color: 'pink',
        skills: [
            { name: 'Python (ML/NLP)', level: 80 },
            { name: 'TensorFlow / PyTorch', level: 70 },
            { name: 'Scikit-learn', level: 75 },
            { name: 'Pandas / NumPy', level: 85 },
            { name: 'Matplotlib / Seaborn', level: 75 },
            { name: 'NLTK / Plotly.js', level: 70 },
        ],
    },
];


    const getColorClasses = (color: string) => {
        const colors = {
            blue: {
                bg: 'from-blue-600 to-blue-800',
                border: 'border-blue-500/20',
                text: 'text-blue-400',
                progress: 'from-blue-500 to-blue-600',
                shadow: 'shadow-blue-500/25',
            },
            purple: {
                bg: 'from-purple-600 to-purple-800',
                border: 'border-purple-500/20',
                text: 'text-purple-400',
                progress: 'from-purple-500 to-purple-600',
                shadow: 'shadow-purple-500/25',
            },
            green: {
                bg: 'from-green-600 to-green-800',
                border: 'border-green-500/20',
                text: 'text-green-400',
                progress: 'from-green-500 to-green-600',
                shadow: 'shadow-green-500/25',
            },
            pink: {
                bg: 'from-pink-600 to-pink-800',
                border: 'border-pink-500/20',
                text: 'text-pink-400',
                progress: 'from-pink-500 to-pink-600',
                shadow: 'shadow-pink-500/25',
            },
        };
        return colors[color as keyof typeof colors];
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Skills & Technologies
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => {
                        const colorClasses = getColorClasses(category.color);
                        return (
                            <div
                                key={categoryIndex}
                                className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border ${colorClasses.border} p-8 shadow-2xl hover:${colorClasses.shadow} transition-all duration-500 transform hover:-translate-y-1`}
                            >
                                {/* Category Header */}
                                <div className="flex items-center mb-8">
                                    <div className={`p-4 bg-gradient-to-r ${colorClasses.bg} rounded-xl shadow-lg`}>
                                        <category.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className={`text-2xl font-bold ml-4 ${colorClasses.text}`}>
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="group">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-white font-medium group-hover:text-gray-300 transition-colors duration-300">
                                                    {skill.name}
                                                </span>
                                                <span className={`text-sm ${colorClasses.text} font-bold`}>
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-gray-900 to-blue-900/20 rounded-2xl border border-blue-500/20 p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Always Learning</h3>
                        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            Technology evolves rapidly, and I'm committed to continuous learning. I regularly explore new frameworks,
                            tools, and best practices to stay current with industry trends and deliver cutting-edge solutions.
                        </p>
                        <div className="flex justify-center space-x-4 mt-6">
                            <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                                Exploring: Web3 Development
                            </span>
                        </div>
                    </div>
                </div>
            </div>
<style>{`
  @keyframes slideIn {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`}</style>

        </section>
    );
};

export default Skills;