import React from 'react';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 text-white text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      <p>&copy; {currentYear} TextToSpeech. All rights reserved.</p>
    </footer>
  );
};

export default Footer;