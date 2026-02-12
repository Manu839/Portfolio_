import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { motion} from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
              group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
            >
              <Code2 className="h-6 w-6 text-white" />
            </div>

            <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Manu Sai
            </span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition"
                >
                  {item.name}

                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
{/* ================= MOBILE MENU ================= */}
<motion.div
  initial={false}
  animate={isOpen ? "open" : "closed"}
  variants={{
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
    },
  }}
  className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
>
  <div className="px-6 py-4 space-y-3">
    {navItems.map((item) => {
      const isActive = location.pathname === item.path;

      return (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className={`block text-base font-medium transition ${
            isActive
              ? "text-blue-400"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {item.name}
        </Link>
      );
    })}
  </div>
</motion.div>

    </motion.nav>
  );
};

export default Navbar;
