import React, { useState, useEffect } from 'react';
import { useUserData } from './UserDataContext';
import { 
  Github, Linkedin, Twitter, Mail, Phone,
  Home, User, ChevronRight, ChevronDown, ExternalLink,
  Code2, Briefcase, GraduationCap, MapPin,
  Moon, Sun, Server, Palette, Database, Terminal
} from 'lucide-react';
import { motion } from 'framer-motion';

function Template2() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const { userData } = useUserData();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'dark bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100' 
        : 'bg-gradient-to-b from-emerald-50 to-white text-gray-800'
    } font-sans`}>
      
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="text-amber-400" /> : <Moon className="text-violet-600" />}
      </button>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-br from-violet-900/50 to-gray-900/80' 
            : 'bg-gradient-to-br from-emerald-100/50 to-violet-100/50'
        }`} />
        
        <div className="absolute inset-0 opacity-20">
          <img
            src={darkMode 
              ? "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?auto=format&fit=crop&q=80&w=1000" 
              : "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            }
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="animate-fade-in"
          >
            <motion.div variants={itemVariants}>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
                darkMode 
                  ? 'bg-gradient-to-r from-emerald-400 to-violet-500' 
                  : 'bg-gradient-to-r from-emerald-600 to-violet-600'
              } bg-clip-text text-transparent drop-shadow-sm`}>
                {userData?.name || 'Your Name'}
              </h1>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl mb-8 font-light">
              {userData?.title || 'Your Profession'}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#about" className={`group ${
                darkMode 
                  ? 'bg-emerald-600 hover:bg-emerald-700' 
                  : 'bg-emerald-600 hover:bg-emerald-700'
              } text-white px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}>
                About Me
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#projects" className={`group ${
                darkMode 
                  ? 'bg-violet-600 hover:bg-violet-700' 
                  : 'bg-violet-600 hover:bg-violet-700'
              } text-white px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}>
                View Projects
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className={`h-8 w-8 ${
            darkMode ? 'text-emerald-400' : 'text-violet-600'
          }`} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 md:py-32 relative ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center ${
              darkMode ? 'text-emerald-400' : 'text-emerald-600'
            }`}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative max-w-md mx-auto"
            >
              <div className={`absolute -inset-4 ${
                darkMode 
                  ? 'bg-gradient-to-br from-emerald-900/50 to-violet-900/50' 
                  : 'bg-gradient-to-br from-emerald-200 to-violet-200'
              } rounded-2xl transform rotate-3 -z-10`}></div>
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={userData?.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"}
                  alt="Profile"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className={`text-lg md:text-xl leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {userData?.bio || 'Add your bio in the portfolio generator'}
              </p>
              <div className="flex space-x-6">
                {userData?.socialLinks?.github && (
                  <a href={userData.socialLinks.github} className={`${
                    darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                  } transition-all duration-300 transform hover:scale-110`}>
                    <Github size={28} />
                  </a>
                )}
                {userData?.socialLinks?.linkedin && (
                  <a href={userData.socialLinks.linkedin} className={`${
                    darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-violet-600 hover:text-violet-700'
                  } transition-all duration-300 transform hover:scale-110`}>
                    <Linkedin size={28} />
                  </a>
                )}
                {userData?.socialLinks?.twitter && (
                  <a href={userData.socialLinks.twitter} className={`${
                    darkMode ? 'text-sky-400 hover:text-sky-300' : 'text-sky-500 hover:text-sky-600'
                  } transition-all duration-300 transform hover:scale-110`}>
                    <Twitter size={28} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 md:py-32 relative ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
          : 'bg-gradient-to-b from-emerald-50 to-white'
      }`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center ${
              darkMode ? 'text-violet-400' : 'text-violet-600'
            }`}
          >
            My Skills
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          >
            {/* Frontend Skills */}
            {userData?.skills?.frontend?.length > 0 && (
              <motion.div 
                variants={itemVariants}
                className={`p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700 hover:border-emerald-400' 
                    : 'bg-white border border-emerald-100 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-lg ${
                    darkMode 
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500' 
                      : 'bg-gradient-to-br from-emerald-500 to-teal-500'
                  } flex items-center justify-center mr-4 shadow-md`}>
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl md:text-2xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>Frontend</h3>
                </div>
                <ul className="space-y-3">
                  {userData.skills.frontend.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className={darkMode ? 'text-emerald-400' : 'text-emerald-500'} size={16} />
                      <span className={`text-base md:text-lg ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Backend Skills */}
            {userData?.skills?.backend?.length > 0 && (
              <motion.div 
                variants={itemVariants}
                className={`p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700 hover:border-violet-400' 
                    : 'bg-white border border-violet-100 hover:border-violet-300'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-lg ${
                    darkMode 
                      ? 'bg-gradient-to-br from-violet-500 to-purple-500' 
                      : 'bg-gradient-to-br from-violet-500 to-purple-500'
                  } flex items-center justify-center mr-4 shadow-md`}>
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl md:text-2xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>Backend</h3>
                </div>
                <ul className="space-y-3">
                  {userData.skills.backend.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className={darkMode ? 'text-violet-400' : 'text-violet-500'} size={16} />
                      <span className={`text-base md:text-lg ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Other skill categories would follow the same pattern */}
            {/* Add UI/UX, Databases, DevOps sections similarly */}
            
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 md:py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center ${
              darkMode ? 'text-emerald-400' : 'text-emerald-600'
            }`}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {userData?.projects?.map((project, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700 hover:border-emerald-400' 
                    : 'bg-emerald-50 border border-emerald-100 hover:border-emerald-300'
                }`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"}
                    alt={project.title || `Project ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${
                    darkMode 
                      ? 'bg-gradient-to-t from-black/60 to-transparent' 
                      : 'bg-gradient-to-t from-black/40 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {project.title || `Project ${index + 1}`}
                  </h3>
                  <p className={`mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description || 'Project description'}
                  </p>
                  <div className="flex justify-between items-center">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className={`flex items-center gap-2 group font-medium ${
                          darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                        }`}
                      >
                        View Project
                        <ExternalLink className="group-hover:translate-x-1 transition-transform" size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className={`transform hover:scale-110 transition-all duration-300 ${
                          darkMode ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-600'
                        }`}
                      >
                        <Github size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 md:py-32 ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-white to-emerald-50'
      }`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center ${
              darkMode ? 'text-violet-400' : 'text-violet-600'
            }`}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`max-w-2xl mx-auto rounded-2xl shadow-xl p-8 md:p-10 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-lg font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-5 py-3 ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-emerald-50'
                  } border ${
                    darkMode ? 'border-gray-600' : 'border-gray-200'
                  } rounded-xl focus:outline-none focus:ring-2 ${
                    darkMode ? 'focus:ring-emerald-500' : 'focus:ring-emerald-500'
                  } transition-all duration-200`}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-lg font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-5 py-3 ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-emerald-50'
                  } border ${
                    darkMode ? 'border-gray-600' : 'border-gray-200'
                  } rounded-xl focus:outline-none focus:ring-2 ${
                    darkMode ? 'focus:ring-emerald-500' : 'focus:ring-emerald-500'
                  } transition-all duration-200`}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-lg font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-5 py-3 ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-emerald-50'
                  } border ${
                    darkMode ? 'border-gray-600' : 'border-gray-200'
                  } rounded-xl focus:outline-none focus:ring-2 ${
                    darkMode ? 'focus:ring-emerald-500' : 'focus:ring-emerald-500'
                  } transition-all duration-200`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full ${
                  darkMode 
                    ? 'bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700' 
                    : 'bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700'
                } text-white px-6 py-4 rounded-xl transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl`}
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {userData?.contact?.email && (
                <a 
                  href={`mailto:${userData.contact.email}`} 
                  className={`flex items-center gap-2 ${
                    darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                  } transition-all duration-300`}
                >
                  <Mail size={20} />
                  <span>{userData.contact.email}</span>
                </a>
              )}
              
              {userData?.contact?.phone && (
                <a 
                  href={`tel:${userData.contact.phone}`} 
                  className={`flex items-center gap-2 ${
                    darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-violet-600 hover:text-violet-700'
                  } transition-all duration-300`}
                >
                  <Phone size={20} />
                  <span>{userData.contact.phone}</span>
                </a>
              )}
              
              {userData?.contact?.location && (
                <div className={`flex items-center gap-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <MapPin size={20} />
                  <span>{userData.contact.location}</span>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex justify-center space-x-6">
              {userData?.socialLinks?.github && (
                <a 
                  href={userData.socialLinks.github} 
                  className={`transform hover:scale-110 transition-all duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  <Github size={24} />
                </a>
              )}
              
              {userData?.socialLinks?.linkedin && (
                <a 
                  href={userData.socialLinks.linkedin} 
                  className={`transform hover:scale-110 transition-all duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-violet-400' : 'text-gray-600 hover:text-violet-600'
                  }`}
                >
                  <Linkedin size={24} />
                </a>
              )}
              
              {userData?.socialLinks?.twitter && (
                <a 
                  href={userData.socialLinks.twitter} 
                  className={`transform hover:scale-110 transition-all duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-sky-400' : 'text-gray-600 hover:text-sky-500'
                  }`}
                >
                  <Twitter size={24} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 ${
        darkMode ? 'bg-gray-800/90' : 'bg-white/90'
      } backdrop-blur-sm px-6 py-3 rounded-full z-50 shadow-lg ${
        darkMode ? 'border border-gray-700' : 'border border-gray-100'
      }`}>
        <ul className="flex space-x-8">
          {[
            { href: '#home', icon: Home, section: 'home' },
            { href: '#about', icon: User, section: 'about' },
            { href: '#skills', icon: Code2, section: 'skills' },
            { href: '#projects', icon: Briefcase, section: 'projects' },
            { href: '#contact', icon: Mail, section: 'contact' }
          ].map(({ href, icon: Icon, section }) => (
            <li key={href}>
              <a
                href={href}
                className={`${
                  activeSection === section
                    ? `${darkMode ? 'text-emerald-400' : 'text-emerald-600'} scale-110`
                    : `${darkMode ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-600'}`
                } transition-all duration-300 transform hover:scale-110`}
              >
                <Icon size={22} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Template2;