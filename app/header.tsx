'use client';

import React, { useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [helpOpen, setHelpOpen] = useState(false);

  const handleHelpOpen = () => {
    setHelpOpen(true);
  };

  const handleHelpClose = () => {
    setHelpOpen(false);
  };

  return (
    <header className="relative flex justify-between items-center p-4 bg-gray-100">
      <div className="p-2">
        {/* Placeholder for left-aligned content - e.g. hamburger menu, later */}
      </div>
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">Palette Puzzle</h1>
      <button onClick={handleHelpOpen} className="p-2">
        <QuestionMarkCircleIcon className="h-6 w-6 text-gray-700" />
      </button>
      {helpOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Help</h2>
            <p>Here is some helpful information about the Palette Puzzle.</p>
            <button onClick={handleHelpClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;