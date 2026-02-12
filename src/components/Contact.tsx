import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:2003manusai@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "2003manusai@gmail.com",
      link: "mailto:2003manusai@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7987177566",
      link: "tel:+917987177566",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Raipur, Chhattisgarh, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Manu839",
      hover: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/manu-sai-5a3b8b257",
      hover: "hover:text-blue-400",
    },
  ];

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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate?  
            Let’s build something impactful together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Let’s Connect
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I’m always open to discussing new opportunities, interesting
                projects, or just talking tech.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 p-5 rounded-xl
                             bg-gradient-to-r from-gray-900 to-blue-900/20
                             border border-blue-500/20 hover:border-blue-400/40
                             transition shadow-lg"
                >
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <info.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12 }}
                    className={`p-4 bg-gray-800 rounded-xl text-gray-300 ${social.hover}
                                transition shadow-lg`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-purple-900/20
                       p-8 rounded-2xl border border-purple-500/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg
                             focus:ring-2 focus:ring-purple-500 outline-none text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg
                             focus:ring-2 focus:ring-purple-500 outline-none text-white"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg
                           focus:ring-2 focus:ring-purple-500 outline-none text-white"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg
                           focus:ring-2 focus:ring-purple-500 outline-none text-white resize-none"
              />

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4
                           bg-gradient-to-r from-purple-600 to-blue-600
                           hover:from-purple-700 hover:to-blue-700
                           rounded-lg text-white font-medium
                           transition transform hover:scale-105 shadow-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
