import React from 'react';
import { Code, Server, Palette, Database, Terminal } from 'lucide-react';
import { useUserData } from '../UserDataContext';

const Skills1 = () => {
  const { userData } = useUserData();

  // Safe defaults for all skill categories
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: userData?.skills?.frontend || [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: userData?.skills?.backend || [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: userData?.skills?.design || [
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 75 }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: userData?.skills?.databases || [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Terminal,
      skills: userData?.skills?.devops || [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 }
      ]
    }
  ];

  return (
    <div className="pt-16 bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center mb-12">
          Skills & Expertise
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mr-4 shadow-md">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const safeSkill = {
                    name: skill?.name || `Skill ${skillIndex + 1}`,
                    level: skill?.level || 0,
                    ...skill
                  };
                  
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{safeSkill.name}</span>
                        <span className="text-blue-400 font-semibold">{safeSkill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                          style={{ width: `${safeSkill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills1;