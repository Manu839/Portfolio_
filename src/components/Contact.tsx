import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        const mailtoLink = `mailto:2003manusai@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoLink;
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: '2003manusai@gmail.com',
            link: 'mailto:2003manusai@gmail.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+91 7987177566',
            link: 'tel:+917987177566',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Raipur, Chhattisgarh, India',
            link: '#',
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            name: 'GitHub',
            url: 'https://github.com/Manu839',
            color: 'hover:text-gray-400',
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/manu-sai-5a3b8b257',
            color: 'hover:text-blue-400',
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                        Let's create something amazing together!
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                I'm always open to discussing new opportunities, creative projects,
                                or just having a friendly chat about technology and development.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-900 to-blue-900/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
                                >
                                    <div className="p-3 bg-blue-600/20 rounded-lg">
                                        <info.icon className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{info.title}</p>
                                        <p className="text-white font-medium">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 bg-gray-800 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                                    >
                                        <social.icon className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 p-8 rounded-2xl border border-purple-500/20 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-purple-400">Send Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                                    placeholder="Let's work together"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/25"
                            >
                                <Send className="mr-2 h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;