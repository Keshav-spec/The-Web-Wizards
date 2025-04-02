// context/UserDataContext.js
import { createContext, useContext, useState } from 'react';

// Provide initial structure as default value
const UserDataContext = createContext({
  userData: {
    name: '',
    title: '',
    bio: '',
    projects: [],
    skills: {},
    contact: {},
    workExperience: [],
    socialLinks: {}
  },
  setUserData: () => {
    throw new Error('setUserData must be used within a UserDataProvider');
  }
});

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    title: '',
    bio: '',
    projects: [],
    skills: {},
    contact: {},
    workExperience: [],
    socialLinks: {}
  });

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Custom hook with error handling
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};