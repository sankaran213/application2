import React from "react";
import MetricCard from "./metric-card";

const PlatformMetrics = () => {
  return (
    <div
      className="rounded-lg shadow-lg p-6"
      style={{
        width: "350px",
        height: "626px",
        background: "rgba(255, 255, 255, 0.5)", // Translucent white background
        backdropFilter: "blur(10px)", // Frosted glass effect
      }}
    >
      {/* Title */}
      <h2 className="text-blue-500 font-semibold text-lg text-center mb-6">
        Platform Metrics
      </h2>

      {/* Metrics Cards */}
      <div className="space-y-4 flex flex-col items-center">
        <MetricCard title="Resource Available" value="3.67 M" />
        <MetricCard title="Resource Utilization" value="7.33 M" />
        <MetricCard title="Compute Time" value="3.67 ms" />
      </div>
    </div>
  );
};

export default PlatformMetrics;
