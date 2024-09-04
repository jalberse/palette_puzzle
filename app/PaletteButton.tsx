import React from 'react';

interface PaletteButtonProps {
  increase: boolean;
  className: string;
  disabled: boolean;
  onClick: () => void;
}

const PaletteButton: React.FC<PaletteButtonProps> = ({
  increase,
  className,
  disabled,
  onClick,
}) => {
  return (
    <div className="m-1">
    <button
      disabled={disabled}
      onClick={onClick} 
      type="button"
      className={`
        rounded-md
        text-2xl
        w-full
        h-12
        ${className}`}
        >
      {increase ? '+' : '-'}
    </button>
    </div>
  );
};

export default PaletteButton;