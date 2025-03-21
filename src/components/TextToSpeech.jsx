import React, { useState, useEffect } from "react";
import { FaVolumeUp, FaStop, FaTrash } from "react-icons/fa";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="min-h-screen flex flex-col">
    
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col items-center space-y-6 p-8 bg-white/90 backdrop-blur-md rounded-lg shadow-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800">Text-to-Speech Converter</h2>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to convert to speech..."
            className="w-full max-w-md h-40 p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500 bg-white/80 backdrop-blur-sm"
          />
          <div className="w-full max-w-md space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Select Voice:</label>
              <select
                value={selectedVoice ? selectedVoice.name : ""}
                onChange={(e) => {
                  const selected = voices.find(voice => voice.name === e.target.value);
                  setSelectedVoice(selected);
                }}
                className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {voices.map((voice, index) => (
                  <option key={index} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Pitch:</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={pitch}
                onChange={(e) => setPitch(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Speed:</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleSpeak}
              className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <FaVolumeUp className="mr-2" />
              Speak
            </button>
            <button
              onClick={handleStop}
              className="flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <FaStop className="mr-2" />
              Stop
            </button>
            <button
              onClick={handleClear}
              className="flex items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <FaTrash className="mr-2" />
              Clear
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TextToSpeech;