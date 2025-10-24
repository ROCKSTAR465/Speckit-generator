
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-cyan-400"
          >
            <path
              fillRule="evenodd"
              d="M9.75 2.25A.75.75 0 0 1 10.5 3v1.25a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 9.75 2.25Zm-1.5 6.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm1.85-11.25a.75.75 0 0 1 .4-1.28L12 3.82l1.55-1.03a.75.75 0 1 1 .8 1.28L12.8 5.48a.75.75 0 0 1-1.6 0l-1.55-1.04ZM21.75 9a.75.75 0 0 1-.75.75h-1.25a.75.75 0 0 1 0-1.5h1.25a.75.75 0 0 1 .75.75ZM12 21.75a.75.75 0 0 1-.75-.75v-1.25a.75.75 0 0 1 1.5 0V21a.75.75 0 0 1-.75.75ZM3 9a.75.75 0 0 1-.75.75H1.5a.75.75 0 0 1 0-1.5h.75A.75.75 0 0 1 3 9Zm1.5-3.95a.75.75 0 1 1-1.06 1.06L2.3 4.97a.75.75 0 0 1 1.06-1.06l1.15 1.15ZM19.7 19.7a.75.75 0 1 1-1.06 1.06l-1.15-1.15a.75.75 0 0 1 1.06-1.06l1.15 1.15ZM4.36 18.64a.75.75 0 1 1 1.06-1.06l-1.15 1.15a.75.75 0 0 1-1.06 1.06l1.15-1.15ZM19.7 4.36a.75.75 0 1 1 1.06 1.06l-1.15-1.15a.75.75 0 0 1-1.06-1.06l1.15 1.15Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            SpecKit Generator
          </h1>
        </div>
        <p className="text-sm text-gray-400 hidden sm:block">Powered by Gemini 2.5 Flash</p>
      </div>
    </header>
  );
};

export default Header;
