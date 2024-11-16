import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const rotatingWords = [
  'feedback',
  'reviews',
  'ratings',
  'reputation',
];

const RotatingText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex justify-center items-center mt-10 text-6xl font-bold text-gray-950 text-wrap">
      <h1 className='leading-18'>
        Simplifying how businesses manage{' '}
        
          <br className="m-0 p-0" />
        
        <motion.span
          key={rotatingWords[currentWordIndex]}
          className="font-semibold bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {rotatingWords[currentWordIndex]}
        </motion.span>{' '}
      </h1>
    </div>
  );
};

export default RotatingText;
