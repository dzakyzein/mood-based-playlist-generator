import { motion } from "framer-motion";
import { FaCamera, FaBrain, FaMusic } from "react-icons/fa";
import { useState } from "react";

const steps = [
  {
    icon: <FaCamera size={24} />,
    title: "Snap Your Mood",
    description: "Our AI scans your facial expression with your camera.",
  },
  {
    icon: <FaBrain size={24} />,
    title: "Analyze Emotion",
    description: "Your emotion is detected using real-time ML classification.",
  },
  {
    icon: <FaMusic size={24} />,
    title: "Play The Vibe",
    description: "A playlist is generated to match your emotional state.",
  },
];

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id='how-it-works'
      className='py-24 px-6 md:px-20 bg-[#231138] text-white text-center relative overflow-hidden'
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-3xl md:text-4xl font-bold text-softPurple mb-16'
      >
        How It Works
      </motion.h2>

      <div className='relative flex flex-col items-center space-y-[-60px]'>
        {steps.map((step, index) => {
          const isHovered = hoveredIndex === index;
          const baseZ = 10 - index;
          const zIndex = isHovered ? 50 : baseZ;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              style={{ zIndex }}
              className={`relative bg-[#2b1b42] p-8 pt-10 pb-10 w-full max-w-lg rounded-3xl shadow-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.03] ${
                index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
              }`}
            >
              <div className='bg-accentPurple text-white p-3 rounded-full w-fit mx-auto mb-4 shadow-md'>
                {step.icon}
              </div>
              <h3 className='text-xl font-semibold text-softPurple mb-2'>
                {step.title}
              </h3>
              <p className='text-sm text-gray-300'>{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
