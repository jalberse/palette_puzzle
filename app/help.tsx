import React from 'react';

const Help: React.FC<{ handleHelpClose: () => void }> = ({ handleHelpClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Help</h2>
        <p>Here is some helpful information about the Palette Puzzle.</p>
        <button onClick={handleHelpClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Help;