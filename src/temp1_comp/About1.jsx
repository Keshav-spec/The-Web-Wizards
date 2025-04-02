import { FaUser, FaCode, FaTools, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useUserData } from '../UserDataContext';

const Card = ({ children }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const About1 = () => {
  const { userData } = useUserData();

  // Provide safe defaults for all userData fields
  const safeUserData = {
    bio: userData?.bio || "A dedicated developer with a passion for creating efficient and elegant solutions.",
    whatIDo: userData?.whatIDo || "Building web applications, optimizing performance, and constantly learning new technologies.",
    techStack: userData?.techStack || "React, Tailwind, Node.js, Python, and more.",
    experienceSummary: userData?.experienceSummary || "I have experience working on various projects, from web applications to backend systems.",
    vision: userData?.vision || "To innovate and create solutions that make a difference in the tech world.",
    aboutSummary: userData?.aboutSummary || "I am a passionate developer dedicated to building high-quality web applications and solving challenging problems with innovative solutions.",
    ...userData
  };

  const aboutCards = [
    {
      icon: FaUser,
      color: "text-blue-400",
      title: "Who I Am",
      content: safeUserData.bio
    },
    {
      icon: FaCode,
      color: "text-green-400",
      title: "What I Do",
      content: safeUserData.whatIDo
    },
    {
      icon: FaTools,
      color: "text-yellow-400",
      title: "Tech Stack",
      content: safeUserData.techStack
    },
    {
      icon: FaLaptopCode,
      color: "text-purple-400",
      title: "My Experience",
      content: safeUserData.experienceSummary
    },
    {
      icon: FaLightbulb,
      color: "text-orange-400",
      title: "My Vision",
      content: safeUserData.vision
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <p className="text-gray-300 text-center max-w-3xl mb-8">
        {safeUserData.aboutSummary}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {aboutCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Card>
              <CardContent className="flex flex-col items-center text-center">
                <card.icon className={`text-5xl ${card.color} mb-4`} />
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-300 mt-2">{card.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About1;