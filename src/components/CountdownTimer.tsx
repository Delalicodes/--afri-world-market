'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-1 sm:gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 p-1.5 sm:p-2 rounded-lg shadow-md max-w-2xl mx-auto">
      {timeBlocks.map(({ label, value }) => (
        <motion.div
          key={label}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow p-1 sm:p-1.5 w-10 sm:w-14 border border-white/50 hover:border-white transition-all duration-200">
            <motion.span
              key={value}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500 block text-center"
            >
              {value.toString().padStart(2, '0')}
            </motion.span>
          </div>
          <span className="text-[8px] sm:text-[10px] mt-0.5 text-white font-medium tracking-wider uppercase">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;