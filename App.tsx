
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ResultsDisplay from './components/ResultsDisplay';
import { EXAMPLE_PROJECT_DESCRIPTION } from './constants';
import { generateSpecs } from './services/geminiService';
import type { GeneratedSpecs } from './types';

const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4 my-8">
    <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-gray-300">Generating documents... this may take a moment.</p>
  </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="my-8 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-md">
    <p className="font-semibold">An Error Occurred</p>
    <p>{message}</p>
  </div>
);

function App() {
  const [projectDescription, setProjectDescription] = useState<string>(EXAMPLE_PROJECT_DESCRIPTION);
  const [generatedSpecs, setGeneratedSpecs] = useState<GeneratedSpecs | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateClick = useCallback(async () => {
    if (!projectDescription.trim()) {
      setError("Project description cannot be empty.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedSpecs(null);

    try {
      const specs = await generateSpecs(projectDescription);
      setGeneratedSpecs(specs);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [projectDescription]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Turn Project Ideas into Actionable Plans</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                Paste your project requirements below. Our AI will generate a detailed technical specification, task breakdown, and development plan to get you started.
            </p>
        </div>

        <div className="mt-10">
          <label htmlFor="project-description" className="block text-sm font-medium text-gray-300 mb-2">
            Project Description
          </label>
          <textarea
            id="project-description"
            rows={15}
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-4 text-gray-200 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150 ease-in-out"
            placeholder="Describe your project here..."
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleGenerateClick}
            disabled={isLoading}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? 'Generating...' : 'Generate Specs'}
          </button>
        </div>

        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {generatedSpecs && !isLoading && <ResultsDisplay specs={generatedSpecs} />}
      </main>

      <footer className="bg-gray-900 mt-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} SpecKit Generator. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}

export default App;
