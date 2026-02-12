import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        {
            icon: Github,
            url: 'https://github.com/Manu839',
            label: 'GitHub',
        },
        {
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/manu-sai-5a3b8b257',
            label: 'LinkedIn',
        },
        {
            icon: Mail,
            url: 'mailto:2003manusai@gmail.com',
            label: 'Email',
        },
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Skills', href: '/skills' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-blue-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                                <Code2 className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Manu Sai
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Full Stack Developer passionate about creating innovative web solutions
                            and bringing ideas to life through code.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg group"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                                    >
                                        <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
                        <div className="space-y-3">
                            <p className="text-gray-400 flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-blue-400" />
                                <span>2003manusai@gmail.com</span>
                            </p>
                            <p className="text-gray-400">
                                Raipur, Chhattisgarh, India
                            </p>
                            <p className="text-gray-400">
                                Available for freelance opportunities
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>© {new Date().getFullYear()} Made</span>
                            <span>by Manu Sai</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;