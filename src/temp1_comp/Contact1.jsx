import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useUserData } from '../UserDataContext';

const Contact1 = () => {
  const { userData } = useUserData();

  // Safe defaults for contact information
  const safeContact = {
    email: userData?.contact?.email || 'your.email@example.com',
    phone: userData?.contact?.phone || '+1 (234) 567-890',
    location: userData?.contact?.location || 'San Francisco, CA',
    socialLinks: {
      github: userData?.socialLinks?.github || '#',
      githubUsername: userData?.socialLinks?.githubUsername || '@yourusername',
      linkedin: userData?.socialLinks?.linkedin || '#',
      linkedinUsername: userData?.socialLinks?.linkedinUsername || 'Your Name',
      twitter: userData?.socialLinks?.twitter || '#',
      twitterUsername: userData?.socialLinks?.twitterUsername || '@yourusername',
      instagram: userData?.socialLinks?.instagram || '#',
      instagramUsername: userData?.socialLinks?.instagramUsername || '@yourusername',
      youtube: userData?.socialLinks?.youtube || '#',
      youtubeUsername: userData?.socialLinks?.youtubeUsername || '@yourusername'
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: safeContact.socialLinks.github,
      label: 'GitHub',
      username: safeContact.socialLinks.githubUsername
    },
    {
      icon: Linkedin,
      href: safeContact.socialLinks.linkedin,
      label: 'LinkedIn',
      username: safeContact.socialLinks.linkedinUsername
    },
    {
      icon: Twitter,
      href: safeContact.socialLinks.twitter,
      label: 'Twitter',
      username: safeContact.socialLinks.twitterUsername
    },
    {
      icon: Instagram,
      href: safeContact.socialLinks.instagram,
      label: 'Instagram',
      username: safeContact.socialLinks.instagramUsername
    },
    {
      icon: Youtube,
      href: safeContact.socialLinks.youtube,
      label: 'YouTube',
      username: safeContact.socialLinks.youtubeUsername
    }
  ];

  return (
    <div className="relative pt-16 bg-[#121212] text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80"
          alt="Tech Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#1e1e1e] bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-blue-500/50 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
              Send Me a Message
            </h2>
            
            <form className="space-y-6">
              {/* Form fields remain the same */}
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-[#1e1e1e] bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-purple-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-purple-400 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a 
                      href={`mailto:${safeContact.email}`} 
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {safeContact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a 
                      href={`tel:${safeContact.phone}`} 
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {safeContact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">
                      {safeContact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1e1e1e] bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-blue-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                Social Media
              </h2>
              
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, href, label, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-blue-400 mr-4" />
                    <div>
                      <p className="font-medium text-white">{label}</p>
                      <p className="text-sm text-gray-400">{username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;