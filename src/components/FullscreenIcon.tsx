import React from 'react';

interface FullscreenIconProps {
    isFullscreen: boolean;
}

const FullscreenIcon: React.FC<FullscreenIconProps> = ({ isFullscreen }) => {
    if (isFullscreen) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8V3h5m13 5V3h-5M3 16v5h5m13-5v5h-5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default FullscreenIcon; 