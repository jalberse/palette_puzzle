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
    <div className="m-1">
    <button
      onClick={onClick} 
      type="button"
      className={`
        rounded-md
        text-2xl
        w-full
        ${className}`}
        >
      {increase ? '+' : '-'}
    </button>
    </div>
  );
};

export default PaletteButton;