import React from "react";
import StackedBarChart from "./bar-chart"; // Adjust path as needed

const answerRelevancyData = [
  { label: "10.5", lowerValue: 55, upperValue: 40 },
  { label: "12.5", lowerValue: 71, upperValue: 54 },
  { label: "10.7", lowerValue: 32, upperValue: 24 },
  { label: "13.5", lowerValue: 58, upperValue: 35 },
  { label: "9.74", lowerValue: 88, upperValue: 67 },
  { label: "15.8", lowerValue: 48, upperValue: 33 },
];

const OverallLLMMetrics = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto sm:max-w-xl md:max-w-2xl min-h-[450px]">
      <h2 className="text-lg font-semibold mb-6 text-gray-800">
        Overall LLM Metrics
      </h2>

      <div className="space-y-6">
        {/* Answer Relevancy Section */}
        <div>
          <h3 className="text-base font-medium mb-4 text-gray-700">
            Answer Relevancy
          </h3>
          <StackedBarChart data={answerRelevancyData} />

          <div className="text-xs text-gray-500 mt-2">
            Note: Indication, Important stuff
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallLLMMetrics;
