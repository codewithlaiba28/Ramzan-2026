'use client';

import React from 'react';

const CrescentMoon: React.FC = () => {
    return (
        <svg width="150" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="55" cy="45" r="40" fill="url(#moonGlow)" />
            <path d="M60,10 A40,40 0 1,0 60,90 A30,30 0 1,1 60,10" fill="#d4af37">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="5"
                    dur="3s"
                    repeatCount="indefinite"
                    direction="alternate"
                />
            </path>
            {/* Stars */}
            <circle cx="20" cy="30" r="1" fill="white">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="15" r="0.8" fill="white">
                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="10" cy="60" r="1.2" fill="white">
                <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
};

export default CrescentMoon;
