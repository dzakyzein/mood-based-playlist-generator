import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='relative flex flex-col items-center justify-center text-center min-h-screen bg-darkPurple text-white overflow-hidden px-6'>
      {/* Glowing Pulse Ball */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='absolute w-96 h-96 bg-accentPurple rounded-full blur-3xl opacity-40'
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='relative z-10 bg-[#2b1b42] p-10 rounded-3xl shadow-xl flex flex-col items-center max-w-lg'
      >
        <h1 className='text-4xl md:text-5xl font-bold text-softPurple'>
          Feel the Beat of <br />
          <span className='text-accentPurple'>Your Mood</span>
        </h1>
        <p className='text-gray-300 mt-4'>
          Our AI reads your facial expressions and plays music that vibes with
          your emotion.
        </p>
        <button className='mt-6 bg-accentPurple hover:brightness-110 transition px-6 py-3 rounded-full font-semibold'>
          Start MoodScan
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
