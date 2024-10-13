"use client";

import React, { useState } from "react";
import Confetti from "react-confetti";

const BirthdayApp: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState<boolean[]>([false, false, false, false]);
  const [balloons, setBalloons] = useState([true, true, true]);
  const [celebrate, setCelebrate] = useState(false);


  const lightCandle = (index: number) => {
    const updatedCandles = [...candlesLit];
    updatedCandles[index] = true;
    setCandlesLit(updatedCandles);
  };

  
  const popBalloon = (index: number) => {
    const updatedBalloons = [...balloons];
    updatedBalloons[index] = false;
    setBalloons(updatedBalloons);
  };

 
  const handleCelebrate = () => {
    setCelebrate(true);
    setTimeout(() => {
      setCelebrate(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
      <div className="bg-white p-3 rounded-lg shadow-lg text-center w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-2 text-pink-500">Happy Birthday! 🎉</h1>

        
        <h2 className="text-lg font-semibold mb-1">Light the Candles 🕯️</h2>
        <div className="flex justify-center gap-1 mb-3">
          {candlesLit.map((lit, idx) => (
            <div key={idx} className="relative">
              <svg
                className="w-6 h-16 cursor-pointer"
                viewBox="0 0 24 40"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => lightCandle(idx)} 
              >
                <rect
                  x="10"
                  y="10"
                  width="4"
                  height="18"
                  fill={lit ? "gold" : "#ccc"}
                />
                <circle
                  cx="12"
                  cy="6"
                  r="3"
                  fill={lit ? "orange" : "#ccc"}
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Balloons Section */}
        <h2 className="text-lg font-semibold mb-1">Pop the Balloons 🎈</h2>
        <div className="flex justify-center gap-1 mb-3">
          {balloons.map((balloon, index) =>
            balloon ? (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => popBalloon(index)} // Pop balloon on click
              >
                <svg
                  className="w-10 transition-transform hover:scale-110"
                  viewBox="0 0 64 80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="32" cy="40" rx="20" ry="28" fill="#FF6F61" />
                  <line x1="32" y1="64" x2="32" y2="80" stroke="#000" strokeWidth="2" />
                </svg>
              </div>
            ) : (
              <div key={index} className="w-10 h-16 opacity-0 transition-opacity"></div>
            )
          )}
        </div>

        {/* Celebrate Section */}
        <button
          onClick={handleCelebrate}
          className="px-3 py-1 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
        >
          Celebrate 🎉
        </button>

        {celebrate && <Confetti />}
      </div>
    </div>
  );
};

export default BirthdayApp;    
