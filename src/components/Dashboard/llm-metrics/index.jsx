import React from "react";
import MetricCard from "./metric-card"; // Adjust this path based on your project structure

const LLMMetrics = () => {
  return (
    <div className="rounded-lg h-[626px] shadow-lg p-6 flex flex-col items-center space-y-6 bg-white/50 backdrop-blur-md w-auto max-w-sm md:max-w-md lg:max-w-lg ">
      {/* Title */}
      <h2 className="text-black font-semibold text-lg">LLM Metrics</h2>

      {/* Metrics Cards */}
      <div className="space-y-4 w-full">
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
