import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center mt-4 w-full">
      <p>&copy; John Alberse 2024</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.johnalberse.com/" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
        <a href="https://x.com/JohnAlberseArt" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/jalberse" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;