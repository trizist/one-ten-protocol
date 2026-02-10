// src/App.jsx
import React, { useState } from 'react';
import InputPanel from './components/InputPanel';
import ChronicleView from './components/ChronicleView';
import { generateChronicle } from './utils/runOneTen';

function App() {
  const [chronicle, setChronicle] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (inputs) => {
    setLoading(true);
    try {
      const result = await generateChronicle(inputs);
      setChronicle(result);
    } catch (err) {
      console.error("Generation failed", err);
      alert("Failed to generate Chronicle. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          The One Ten Protocol
        </h1>
        <p className="text-gray-400 mt-2">Transmute metadata into narrative</p>
      </header>

      <InputPanel onGenerate={handleGenerate} />
      <div className="mt-10">
        <ChronicleView chronicleData={chronicle} isLoading={loading} />
      </div>
    </div>
  );
}

export default App;
