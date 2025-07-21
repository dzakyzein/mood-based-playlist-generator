import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const Demo = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [moodResult, setMoodResult] = useState(null);

  const handleStartDemo = () => {
    setIsScanning(true);
    setMoodResult(null);

    setTimeout(() => {
      setIsScanning(false);
      // Simulasi hasil mood (bisa random di versi lanjut)
      setMoodResult("Happy");
    }, 3000);
  };

  const playlistByMood = {
    Happy: [
      "Feel Good Inc - Gorillaz",
      "Good Vibes - Ayokay",
      "Happy - Pharrell",
    ],
    Sad: [
      "Someone Like You - Adele",
      "Let Her Go - Passenger",
      "Fix You - Coldplay",
    ],
    Energetic: [
      "Eye of the Tiger",
      "Can't Hold Us - Macklemore",
      "Believer - Imagine Dragons",
    ],
  };

  return (
    <section
      id='demo'
      className='py-24 px-6 md:px-20 bg-[#1a092e] text-white text-center relative'
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-3xl md:text-4xl font-bold text-softPurple mb-12'
      >
        Try The Demo
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-3xl mx-auto bg-[#2b1b42] p-10 rounded-2xl shadow-2xl relative'
      >
        <p className='text-gray-300 mb-6'>
          Experience how our AI detects your emotion and generates a
          personalized playlist based on your mood.
        </p>

        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          {/* Simulated Camera */}
          <div className='w-64 h-48 bg-black rounded-xl relative overflow-hidden border-4 border-accentPurple'>
            <div className='absolute inset-0 flex items-center justify-center text-gray-400 text-sm'>
              [ camera preview ]
            </div>
            <div className='absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500 animate-pulse' />
          </div>

          {/* Button */}
          <div className='text-left max-w-sm'>
            <p className='text-lg font-semibold text-softPurple mb-2'>
              Real-time Emotion Scan
            </p>
            <p className='text-sm text-gray-400 mb-4'>
              Click to simulate facial mood scanning and get a playlist.
            </p>
            <button
              onClick={handleStartDemo}
              className='flex items-center gap-2 bg-accentPurple px-6 py-3 rounded-full font-medium hover:brightness-110 transition'
            >
              <FaPlay />
              Start Demo
            </button>
          </div>
        </div>

        {/* Output Playlist */}
        {moodResult && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='mt-10 text-left bg-[#1f1230] p-6 rounded-xl shadow-inner'
          >
            <p className='text-lg font-semibold text-accentPurple mb-2'>
              Mood Detected:{" "}
              <span className='text-softPurple'>{moodResult}</span>
            </p>
            <ul className='list-disc list-inside text-sm text-gray-300'>
              {playlistByMood[moodResult].map((song, idx) => (
                <li key={idx}>{song}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>

      {/* Modal Loading */}
      <AnimatePresence>
        {isScanning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className='bg-[#2a1a3f] px-8 py-6 rounded-xl shadow-xl text-white text-center'
            >
              <p className='text-lg font-medium text-softPurple mb-3'>
                Scanning your face...
              </p>
              <div className='w-6 h-6 border-4 border-accentPurple border-t-transparent rounded-full animate-spin mx-auto'></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Demo;
