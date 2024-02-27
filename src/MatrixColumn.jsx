import React, { useEffect, useState } from "react";

export const MatrixColumn = ({ speed }) => {
    const [characters, setCharacters] = useState([]);

    // Function to generate random characters
    const randomChar = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return chars[Math.floor(Math.random() * chars.length)];
    };
  
    // Function to initialize characters array
    const initializeCharacters = () => {
      const newCharacters = Array.from({ length: 50 }, () => randomChar());
      setCharacters(newCharacters);
    };
  
    // Function to update characters array with new character
    const updateCharacters = () => {
      const newCharacters = [...characters];
      newCharacters.pop(); // Remove the last character
      newCharacters.unshift(randomChar()); // Add a new random character at the beginning
      setCharacters(newCharacters);
    };
  
    useEffect(() => {
      initializeCharacters();
  
      const interval = setInterval(() => {
        updateCharacters();
      }, speed);
  
      return () => clearInterval(interval);
    }, [speed]);
  
    return (
      <div className="matrix-column">
        {characters.map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 50}ms` }}>{char}</span>
        ))}
      </div>
    );
  };
