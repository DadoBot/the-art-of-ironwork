import React from 'react';

interface ForcedBreakProps {
  className?: string;
}

export const ForcedBreak: React.FC<ForcedBreakProps> = ({ className = '' }) => {
  return (
    <div className={`px-margin-mobile md:px-margin-desktop py-8 ${className}`}>
      <div className="forced-break w-full max-w-container-max mx-auto" />
    </div>
  );
};
