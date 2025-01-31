import React, { useState } from "react";

const ApiKeyForm = () => {
  const [apiKey, setApiKey] = useState("");
  const [region, setRegion] = useState("");
  const [aValues, setAValues] = useState(Array(4).fill(""));
  const [selectedLLM, setSelectedLLM] = useState("b1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log({
        apiKey,
        region,
        a1: aValues[0],
        a2: aValues[1],
        a3: aValues[2],
        a4: aValues[3],
        selectedLLM,
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleAChange = (index, value) => {
    const newValues = [...aValues];
    newValues[index] = value;
    setAValues(newValues);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 transition-all duration-300 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          API Configuration
          <div className="mt-2 w-16 h-1 bg-blue-500 rounded-full mx-auto"></div>
        </h2>

        <div className="space-y-6">
          <div className="form-group">
            <label className="label block text-sm font-medium text-gray-700 mb-2">
              Region
            </label>
            <input
              className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="label block text-sm font-medium text-gray-700 mb-2">
              API Key
            </label>
            <input
              className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              required
            />
          </div>

          {aValues.map((value, index) => (
            <div className="form-group" key={index}>
              <label className="label block text-sm font-medium text-gray-700 mb-2">
                A{index + 1}
              </label>
              <input
                className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                type="text"
                value={value}
                onChange={(e) => handleAChange(index, e.target.value)}
                required
              />
            </div>
          ))}

          <div className="form-group">
            <label className="label block text-sm font-medium text-gray-700 mb-2">
              Select LLM
            </label>
            <select
              className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 pr-10 cursor-pointer"
              value={selectedLLM}
              onChange={(e) => setSelectedLLM(e.target.value)}
            >
              <option value="b1">B1 - Advanced Language Model</option>
              <option value="b2">B2 - Enterprise AI Processor</option>
              <option value="b3">B3 - Cloud Neural Network</option>
            </select>
            <div className="absolute right-8 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
            } shadow-md hover:shadow-lg`}
          >
            {isSubmitting ? "Submitting..." : "Save Configuration"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApiKeyForm;
