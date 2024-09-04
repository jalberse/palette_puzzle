'use client';

import React, { useState, useEffect } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Help from './help';

const Header: React.FC = () => {
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(()=>{
    let show_help = localStorage.getItem('show_help');
    // If show_help isn't found, show the help menu by default.
    if(!show_help){
      setHelpOpen(true);
      localStorage.setItem('show_help', 'true');
    }
    else if (show_help === 'true'){
      setHelpOpen(true);
    }
    else{
      setHelpOpen(false);
    }
  },[])

  const handleHelpOpen = () => {
    localStorage.setItem('show_help', 'true');
    setHelpOpen(true);
  };

  const handleHelpClose = () => {
    localStorage.setItem('show_help', 'false');
    setHelpOpen(false);
  };

  return (
    <header className="relative flex justify-between items-center p-4 bg-gray-100">
      <div className="p-2">
        {/* Placeholder for left-aligned content - e.g. hamburger menu, later */}
      </div>
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">Palette Puzzle!</h1>
      <button onClick={handleHelpOpen} className="p-2">
        <QuestionMarkCircleIcon className="h-6 w-6 text-gray-700" />
      </button>
      {helpOpen && (
        <Help handleHelpClose={handleHelpClose} />
      )}
    </header>
  );
};

export default Header;