import React from "react";
import MetricCard from "./metric-card"; // Adjust this path based on your project structure

const LLMMetrics = () => {
  return (
    <div
      className="rounded-lg shadow-lg p-6 flex flex-col items-center space-y-6"
      style={{
        width: "312px",
        height: "622px",
        background: "rgba(255, 255, 255, 0.5)", // Translucent white background
        backdropFilter: "blur(10px)", // Frosted glass effect
      }}
    >
      {/* Title */}
      <h2 className="text-blue-500 font-semibold text-lg">LLM Metrics</h2>

      {/* Metrics Cards */}
      <div className="space-y-4">
        <MetricCard
          title="Perplexity"
          value="8.22 M"
          trend={{ percentage: "13.2%", label: "From May" }}
        />
        <MetricCard
          title="Hallucination Count"
          value="8.22 M"
          trend={{ percentage: "13.2%", label: "From May" }}
        />
      </div>
    </div>
  );
};

export default LLMMetrics;
