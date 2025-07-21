import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const FaceScanner = ({ onMoodDetected }) => {
  const videoRef = useRef();
  const [loading, setLoading] = useState(true);
  const [mood, setMood] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models"; // pastikan folder models tersedia di public/
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      startVideo();
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: {} })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Camera Error:", err));
    };

    loadModels();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (videoRef.current && faceapi.nets.faceExpressionNet.params) {
        const result = await faceapi
          .detectSingleFace(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceExpressions();

        if (result && result.expressions) {
          const detectedMood = getDominantExpression(result.expressions);
          setMood(detectedMood);
          onMoodDetected(detectedMood);
          clearInterval(interval); // hanya ambil sekali
        }
      }
    }, 2000); // cek setiap 2 detik

    return () => clearInterval(interval);
  }, []);

  const getDominantExpression = (expressions) => {
    let max = 0;
    let dominant = "neutral";
    for (let [expr, value] of Object.entries(expressions)) {
      if (value > max) {
        max = value;
        dominant = expr;
      }
    }
    return dominant;
  };

  return (
    <div className='flex flex-col items-center text-white gap-4'>
      <video
        ref={videoRef}
        autoPlay
        muted
        width='300'
        height='225'
        className='rounded-lg border-4 border-accentPurple'
      />
      <p className='text-sm text-softPurple'>
        {mood ? `Detected mood: ${mood}` : "Scanning your face..."}
      </p>
    </div>
  );
};

export default FaceScanner;
