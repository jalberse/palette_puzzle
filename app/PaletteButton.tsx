import React from 'react';

interface PaletteButtonProps {
  increase: boolean;
  backgroundColor: string;
  onClick: () => void;
}

const PaletteButton: React.FC<PaletteButtonProps> = ({ increase, backgroundColor, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        width: "50px", 
        height: "50px", 
        backgroundColor: backgroundColor, 
        borderRadius: "10px", 
        color: "white"
      }}
    >
      {increase ? '+' : '-'}
    </button>
  );
};

export default PaletteButton;