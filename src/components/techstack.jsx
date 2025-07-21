import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaSpotify, FaYoutube } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiTensorflow,
  SiExpress,
  SiJavascript,
  SiAxios,
} from "react-icons/si";

const categories = ["Frontend", "AI & ML", "Music & API", "Backend"];

const techByCategory = {
  Frontend: [
    { icon: <FaReact size={26} />, label: "React", color: "text-cyan-400" },
    {
      icon: <SiTailwindcss size={26} />,
      label: "Tailwind",
      color: "text-blue-300",
    },
    {
      icon: <SiFramer size={26} />,
      label: "Framer Motion",
      color: "text-pink-400",
    },
    { icon: <SiVite size={26} />, label: "Vite", color: "text-yellow-300" },
  ],
  "AI & ML": [
    {
      icon: <SiTensorflow size={26} />,
      label: "TensorFlow.js",
      color: "text-orange-400",
    },
    {
      icon: <SiJavascript size={26} />,
      label: "Webcam API",
      color: "text-yellow-400",
    },
  ],
  "Music & API": [
    {
      icon: <FaSpotify size={26} />,
      label: "Spotify API",
      color: "text-green-300",
    },
    {
      icon: <FaYoutube size={26} />,
      label: "YouTube API",
      color: "text-red-400",
    },
    { icon: <SiAxios size={26} />, label: "Axios", color: "text-blue-200" },
  ],
  Backend: [
    { icon: <FaNodeJs size={26} />, label: "Node.js", color: "text-green-400" },
    {
      icon: <SiExpress size={26} />,
      label: "Express.js",
      color: "text-gray-300",
    },
    { icon: <SiVite size={26} />, label: "Vite", color: "text-yellow-300" },
  ],
};

const bubbleVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  return (
    <section
      id='tech-stack'
      className='py-24 px-6 md:px-20 bg-[#1a092e] text-white text-center'
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-3xl md:text-4xl font-bold text-softPurple mb-10'
      >
        Tech Stack
      </motion.h2>

      {/* Category Buttons */}
      <div className='flex flex-wrap justify-center gap-4 mb-12'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-accentPurple text-white"
                : "bg-white/10 hover:bg-white/20 text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Bubble Items */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className='flex flex-wrap justify-center gap-6 max-w-5xl mx-auto'
        >
          {techByCategory[selectedCategory].map((tech, index) => (
            <motion.div
              key={index}
              variants={bubbleVariants}
              animate='animate'
              className={`w-24 h-24 bg-[#2b1b42] rounded-full flex flex-col items-center justify-center shadow-xl hover:scale-105 transition duration-300 ${tech.color}`}
            >
              {tech.icon}
              <span className='text-xs mt-1'>{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TechStack;
