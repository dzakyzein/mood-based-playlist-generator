import { useState } from "react";
import { motion } from "framer-motion";
import FaceScanner from "./facescanner";
import { fetchSpotifyTracks } from "../api/spotify";

const moodToQuery = {
  happy: "happy",
  sad: "sad",
  angry: "rock",
  fear: "dark ambient",
  surprise: "electro pop",
  neutral: "pop",
};

const Demo = () => {
  const [scanning, setScanning] = useState(false);
  const [detectedMood, setDetectedMood] = useState(null);
  const [tracks, setTracks] = useState([]);

  const handleMoodDetected = async (mood) => {
    const moodKey = mood.toLowerCase();
    const query = moodToQuery[moodKey] || "chill vibes";

    setDetectedMood(mood);
    setScanning(false);

    const fetchedTracks = await fetchSpotifyTracks(query);
    setTracks(fetchedTracks);
  };

  const handleReset = () => {
    setDetectedMood(null);
    setTracks([]);
    setScanning(false);
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

      <div className='max-w-4xl mx-auto bg-[#2b1b42] p-10 rounded-2xl shadow-2xl'>
        {!scanning && !detectedMood && (
          <div>
            <p className='text-gray-300 mb-6'>
              Click to activate your camera and detect your current mood.
            </p>
            <button
              onClick={() => setScanning(true)}
              className='bg-accentPurple px-6 py-3 rounded-full font-semibold hover:brightness-110 transition'
            >
              Start Mood Scan
            </button>
          </div>
        )}

        {scanning && (
          <div className='mt-6'>
            <FaceScanner onMoodDetected={handleMoodDetected} />
          </div>
        )}

        {detectedMood && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mt-10 text-left bg-[#1f1230] p-6 rounded-xl shadow-inner'
          >
            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
              <p className='text-lg font-semibold text-accentPurple'>
                Mood Detected:{" "}
                <span className='text-softPurple'>{detectedMood}</span>
              </p>
              <button
                onClick={handleReset}
                className='mt-4 md:mt-0 bg-accentPurple px-4 py-2 rounded-full text-sm font-medium hover:brightness-110 transition'
              >
                Scan Again
              </button>
            </div>

            {tracks.length > 0 ? (
              <div className='space-y-6'>
                {tracks.map((track) => (
                  <div key={track.id}>
                    <p className='mb-1 text-sm text-gray-300'>
                      {track.title} – {track.artist}
                    </p>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${track.id}`}
                      width='100%'
                      height='80'
                      frameBorder='0'
                      allow='encrypted-media'
                      className='rounded-lg'
                    ></iframe>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-gray-400 mt-4'>
                No tracks found for this mood.
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Demo;
