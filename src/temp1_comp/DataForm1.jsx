
import { useParams, useNavigate } from 'react-router-dom';
import { useUserData } from '../UserDataContext';
import React, { useState } from 'react'

const DataCollection1 = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const { setUserData } = useUserData();
  
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    bio: '',
    aboutSummary: '',
    profileImage: '',
    projects: [],
    skills: {
      frontend: [],
      backend: [],
      design: [],
      databases: [],
      devops: []
    },
    contact: {
      email: '',
      phone: '',
      location: ''
    },
    workExperience: [],
    socialLinks: {
      github: '',
      linkedin: '',
      twitter: '',
      instagram: '',
      youtube: ''
    }
  });

  const handleChange = (e, parentField = null) => {
    const { name, value } = e.target;
    if (parentField) {
      setFormData(prev => ({
        ...prev,
        [parentField]: {
          ...prev[parentField],
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleArrayChange = (field, index, key, value) => {
    setFormData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = { ...newArray[index], [key]: value };
      return { ...prev, [field]: newArray };
    });
  };

  const addArrayItem = (field, template) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], template]
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    navigate(`/portfolio/template${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Personalize Your Portfolio
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Professional Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-1">Short Biography</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-1">About Summary</label>
                <textarea
                  name="aboutSummary"
                  value={formData.aboutSummary}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Profile Image URL</label>
                <input
                  type="text"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                  placeholder="https://example.com/profile.jpg"
                />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Projects</h2>
            {formData.projects.map((project, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-700 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Title</label>
                    <input
                      type="text"
                      value={project.title || ''}
                      onChange={(e) => handleArrayChange('projects', index, 'title', e.target.value)}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Image URL</label>
                    <input
                      type="text"
                      value={project.image || ''}
                      onChange={(e) => handleArrayChange('projects', index, 'image', e.target.value)}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-1">Description</label>
                    <textarea
                      value={project.description || ''}
                      onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
                      rows={2}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-1">Technologies (comma separated)</label>
                    <input
                      type="text"
                      value={project.technologies ? project.technologies.join(', ') : ''}
                      onChange={(e) => handleArrayChange('projects', index, 'technologies', e.target.value.split(',').map(t => t.trim()))}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">GitHub URL</label>
                    <input
                      type="url"
                      value={project.githubUrl || ''}
                      onChange={(e) => handleArrayChange('projects', index, 'githubUrl', e.target.value)}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Live Demo URL</label>
                    <input
                      type="url"
                      value={project.liveUrl || ''}
                      onChange={(e) => handleArrayChange('projects', index, 'liveUrl', e.target.value)}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeArrayItem('projects', index)}
                  className="mt-2 text-red-400 hover:text-red-300 text-sm"
                >
                  Remove Project
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('projects', {
                title: '',
                description: '',
                technologies: [],
                image: '',
                githubUrl: '',
                liveUrl: ''
              })}
              className="text-blue-400 hover:text-blue-300"
            >
              + Add Project
            </button>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Skills</h2>
            {Object.entries(formData.skills).map(([category, skills]) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-300 capitalize">{category}</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={skill.name || ''}
                      onChange={(e) => {
                        const newSkills = [...formData.skills[category]];
                        newSkills[index] = { ...newSkills[index], name: e.target.value };
                        setFormData(prev => ({
                          ...prev,
                          skills: { ...prev.skills, [category]: newSkills }
                        }));
                      }}
                      placeholder="Skill name"
                      className="flex-1 bg-gray-700 border border-gray-600 rounded p-2 text-white mr-2"
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={skill.level || ''}
                      onChange={(e) => {
                        const newSkills = [...formData.skills[category]];
                        newSkills[index] = { ...newSkills[index], level: parseInt(e.target.value) };
                        setFormData(prev => ({
                          ...prev,
                          skills: { ...prev.skills, [category]: newSkills }
                        }));
                      }}
                      placeholder="Level (0-100)"
                      className="w-24 bg-gray-700 border border-gray-600 rounded p-2 text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newSkills = [...formData.skills[category]];
                        newSkills.splice(index, 1);
                        setFormData(prev => ({
                          ...prev,
                          skills: { ...prev.skills, [category]: newSkills }
                        }));
                      }}
                      className="ml-2 text-red-400 hover:text-red-300"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      skills: {
                        ...prev.skills,
                        [category]: [...prev.skills[category], { name: '', level: 80 }]
                      }
                    }));
                  }}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  + Add {category} Skill
                </button>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.contact.email}
                  onChange={(e) => handleChange(e, 'contact')}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.contact.phone}
                  onChange={(e) => handleChange(e, 'contact')}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.contact.location}
                  onChange={(e) => handleChange(e, 'contact')}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                />
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Social Media Links</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-1">GitHub URL</label>
                <input
                  type="url"
                  name="github"
                  value={formData.socialLinks.github}
                  onChange={(e) => handleChange(e, 'socialLinks')}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">GitHub Username</label>
                <input
                  type="text"
                  name="githubUsername"
                  value={formData.socialLinks.githubUsername}
                  onChange={(e) => handleChange(e, 'socialLinks')}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.socialLinks.linkedin}
                  onChange={(e) => handleChange(e, 'socialLinks')}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">LinkedIn Username</label>
                <input
                  type="text"
                  name="linkedinUsername"
                  value={formData.socialLinks.linkedinUsername}
                  onChange={(e) => handleChange(e, 'socialLinks')}
                  className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                />
              </div>
              {/* Add similar fields for other social media */}
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Work Experience</h2>
            {formData.workExperience.map((exp, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-700 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Year</label>
                    <input
                      type="text"
                      value={exp.year || ''}
                      onChange={(e) => handleArrayChange('workExperience', index, 'year', e.target.value)}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Job Title</label>
                    <input
                      type="text"
                      value={exp.title || ''}
                      onChange={(e) => handleArrayChange('workExperience', index, 'title', e.target.value)}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Company</label>
                    <input
                      type="text"
                      value={exp.company || ''}
                      onChange={(e) => handleArrayChange('workExperience', index, 'company', e.target.value)}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-1">Description</label>
                    <textarea
                      value={exp.description || ''}
                      onChange={(e) => handleArrayChange('workExperience', index, 'description', e.target.value)}
                      rows={2}
                      className="w-full bg-gray-600 border border-gray-500 rounded p-2 text-white"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeArrayItem('workExperience', index)}
                  className="mt-2 text-red-400 hover:text-red-300 text-sm"
                >
                  Remove Experience
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('workExperience', {
                year: '',
                title: '',
                company: '',
                description: ''
              })}
              className="text-blue-400 hover:text-blue-300"
            >
              + Add Work Experience
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/50"
          >
            Generate My Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataCollection1;