import React, { useState } from "react";
import ProgressCircle from "./progress-circle";
import "./flip-card.css"; // Importing the flip animation CSS

const OverallPerformance = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const infoData = {
    Accuracy: "Accuracy represents the percentage of correct predictions.",
    Precision: "Precision measures the percentage of relevant instances.",
    Recall: "Recall calculates the percentage of actual positives identified.",
    "Error-Redundancy":
      "Error Redundancy highlights overlapping or repeated mistakes.",
  };

  const circleLabels = ["Accuracy", "Precision", "Recall", "Error-Redundancy"];

  const handleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="bg-white bg-opacity-50 shadow-lg rounded-lg p-6 backdrop-blur-md w-full max-w-[705px] h-auto md:h-[626px]">
      <div className="text-sm text-gray-500 mb-2">LLM Metrics</div>
      <h2 className="text-xl font-semibold mb-8">Overall Performance</h2>

      {/* 2x2 Grid Layout, responsive */}
      <div className="grid grid-cols-2 gap-6 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {circleLabels.map((label, index) => (
          <div
            key={index}
            className={`flip-card ${
              flippedCard === index ? "flipped" : ""
            } w-full`}
          >
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <ProgressCircle percentage={78} />
                <span className="mt-2 text-sm text-gray-600">{label}</span>
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => handleFlip(index)}
                  title="More Info"
                >
                  <i>i</i>
                </button>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <h3 className="text-lg font-semibold">Graph Info</h3>
                <p className="text-sm text-gray-700 text-center mt-2">
                  {infoData[label]}
                </p>
                <button
                  className="mt-4 px-4 py-1 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
                  onClick={() => handleFlip(index)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverallPerformance;
