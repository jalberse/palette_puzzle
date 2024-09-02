import React from 'react';

interface PaletteButtonProps {
  increase: boolean;
  className: string;
  onClick: () => void;
}

const PaletteButton: React.FC<PaletteButtonProps> = ({
  increase,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick} 
      type="button"
      className={
        "rounded-md " +
        "text-2xl " +
        className
      }
      >
        {increase ? '+' : '-'}
      </button>
  );
};

export default PaletteButton;