import React from "react";
import { Github, FileDown } from 'lucide-react';
import { useUserData } from '../UserDataContext';

const Home1 = () => {
  const { userData } = useUserData(); // Get userData from context instead of props

  // Add safe navigation with fallbacks
  const profileImage = userData?.profileImage || "https://avatars.githubusercontent.com/u/000000?v=4";
  const name = userData?.name || "Your Name";
  const title = userData?.title || "Your Profession";
  const githubUrl = userData?.socialLinks?.github || "#";
  const workExperience = userData?.workExperience || [];

  return (
    <div className="pt-16 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-xl"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
            Hi, I'm <span className="text-blue-400">{name}</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mt-4">
            {title}
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
            >
              <Github className="mr-2" size={20} />
              Visit GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transform hover:scale-105 transition duration-300"
            >
              <FileDown className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-gray-500"></div>

          {workExperience.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"} md:w-1/2`}
            >
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <div className="absolute top-6 -ml-3 md:-ml-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-gray-500 rounded-full border-4 border-gray-900"></div>
                <span className="text-blue-300 font-semibold">{item.year}</span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-400 font-medium">{item.company}</p>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home1;