
// src/temp1_comp/HomePage.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();
  
  // Update the templates array in HomePage.jsx
  const templates = [
    {
      id: 1,
      name: "Modern Developer",
      description: "Clean, professional portfolio with multiple pages",
      previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop",
      features: [
        "Multiple page navigation",
        "Project showcase",
        "Skills visualization",
        "Responsive design"
      ]
    },
    {
      id: 2,
      name: "Single Page Portfolio",
      description: "Beautiful one-page scrolling portfolio",
      previewImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop",
      features: [
        "Smooth scrolling navigation",
        "All sections in one page",
        "Modern gradient design",
        "Interactive elements"
      ]
    }
  ];

  useEffect(() => {
    // Load Chatbot script
    const loadChatbot = () => {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q;
            }
            return (...args) => target(prop, ...args);
          }
        });
      }

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "hR8xCtFsU8NXzy7OMlU7R";
      script.defer = true;
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      loadChatbot();
    } else {
      window.addEventListener("load", loadChatbot);
    }

    return () => {
      // Cleanup if needed
      const chatbaseScript = document.getElementById("hR8xCtFsU8NXzy7OMlU7R");
      if (chatbaseScript) {
        chatbaseScript.remove();
      }
    };
  }, []);

  const selectTemplate = (templateId) => {
    navigate(`/login?template=${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="w-full py-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white border-b border-gray-700">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">
                Project for Web Development
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-gray-800/80 backdrop-blur-lg p-5 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
                  <h2 className="text-xl font-semibold mb-1 text-gray-100">Aditya Vasu Rana</h2>
                  <p className="text-emerald-400 font-mono">23BDS1020</p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-lg p-5 rounded-xl border border-gray-700 hover:border-violet-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/10">
                  <h2 className="text-xl font-semibold mb-1 text-gray-100">Keshav Sharma</h2>
                  <p className="text-violet-400 font-mono">23BDS1008</p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-lg p-5 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
                  <h2 className="text-xl font-semibold mb-1 text-gray-100">Aditya Yadav</h2>
                  <p className="text-emerald-400 font-mono">23BDS1009</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mt-10">
            Build Your Perfect Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select a template and customize it with your information to create a stunning portfolio in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-700"
              onClick={() => selectTemplate(template.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={template.previewImage} 
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">Preview</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{template.name}</h3>
                  <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">
                    Template #{template.id}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{template.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
                  Select Template
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>Can't decide? You can change templates later.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;