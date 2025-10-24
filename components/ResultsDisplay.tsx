
import React, { useState, useEffect } from 'react';
import { GeneratedSpecs, TabName } from '../types';
import ClipboardIcon from './icons/ClipboardIcon';
import CheckIcon from './icons/CheckIcon';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
      isActive
        ? 'bg-cyan-600 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {label}
  </button>
);

interface ResultsDisplayProps {
  specs: GeneratedSpecs;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ specs }) => {
  const [activeTab, setActiveTab] = useState<TabName>(TabName.SPEC);
  const [copied, setCopied] = useState(false);

  const content = specs[activeTab];

  useEffect(() => {
    // Reset copied state when tab changes
    setCopied(false);
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const renderContent = (text: string) => {
    const sections = text.split(/(```[\s\S]*?```)/g);
    return sections.map((section, index) => {
      if (section.startsWith('```')) {
        const lang = section.match(/^```(\w+)?\n/)?.[1] || '';
        const code = section.replace(/^```\w*\n/, '').replace(/\n```$/, '');
        return (
          <div key={index} className="bg-gray-950 rounded-md my-4">
            <div className="text-xs text-gray-400 px-4 py-2 border-b border-gray-700 flex justify-between items-center">
              <span>{lang}</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code>{code}</code>
            </pre>
          </div>
        );
      }
      return <div key={index} className="prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: section.replace(/\n/g, '<br />') }} />;
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">Generated Documents</h2>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <div className="flex space-x-2">
            <TabButton
              label="Specification (spec.md)"
              isActive={activeTab === TabName.SPEC}
              onClick={() => setActiveTab(TabName.SPEC)}
            />
            <TabButton
              label="Task Breakdown (task.md)"
              isActive={activeTab === TabName.TASK}
              onClick={() => setActiveTab(TabName.TASK)}
            />
            <TabButton
              label="Development Plan (plan.md)"
              isActive={activeTab === TabName.PLAN}
              onClick={() => setActiveTab(TabName.PLAN)}
            />
          </div>
           <button
            onClick={handleCopy}
            className="p-2 rounded-md transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            title="Copy to clipboard"
          >
            {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>
        <div className="p-6 h-[600px] overflow-y-auto bg-gray-900/50">
           {renderContent(content)}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
