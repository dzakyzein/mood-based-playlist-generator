import { motion } from "framer-motion";
import {
  FaSmileBeam,
  FaBrain,
  FaSpotify,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSmileBeam size={30} />,
    title: "Real-Time Mood Scan",
    description:
      "Analyze facial expressions directly from your webcam in real-time.",
  },
  {
    icon: <FaBrain size={30} />,
    title: "Emotion AI",
    description:
      "Our AI detects emotions like happy, sad, neutral, and more with high accuracy.",
  },
  {
    icon: <FaSpotify size={30} />,
    title: "Smart Playlist Generator",
    description:
      "Get instant playlists curated from Spotify based on your mood.",
  },
  {
    icon: <FaBolt size={30} />,
    title: "Fast & Lightweight",
    description:
      "Minimal latency. Smooth performance across devices and browsers.",
  },
  {
    icon: <FaGlobe size={30} />,
    title: "Works on Web",
    description:
      "No installs, no downloads. Experience it right in the browser.",
  },
];

const Features = () => {
  return (
    <section
      id='features'
      className='py-24 px-6 md:px-20 bg-[#2b1b42] text-white overflow-x-hidden'
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-3xl md:text-4xl font-bold text-softPurple text-center mb-16'
      >
        Features
      </motion.h2>

      <div className='relative overflow-x-auto scrollbar-hide'>
        <div className='flex md:flex-row flex-col gap-20 md:gap-12 items-start justify-start min-w-[800px] md:justify-center px-2 md:px-0'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className='flex flex-col items-center text-center max-w-[220px] relative'
            >
              {/* Animated Icon Bubble */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='bg-accentPurple p-4 rounded-full shadow-[0_0_25px_#7e3ff2aa] text-white mb-4 z-10'
              >
                {feature.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.25 }}
                className='text-base font-semibold text-softPurple mb-2'
              >
                {feature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.1 }}
                className='text-sm text-gray-300'
              >
                {feature.description}
              </motion.p>

              {/* Connector line (except last) */}
              {index < features.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className='hidden md:block origin-left absolute top-8 right-[-80px] w-32 h-1 bg-softPurple opacity-30'
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
