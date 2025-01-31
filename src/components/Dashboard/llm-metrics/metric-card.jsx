import React from "react";

const MetricCard = ({ title, value, trend }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center w-[226px] h-[240px]">
      {/* Value */}
      <div className="text-[28px] font-bold text-blue-900">{value}</div>

      {/* Title */}
      <div className="text-gray-700 font-semibold text-sm mt-1">{title}</div>

      {/* Trend Section */}
      {trend && (
        <div className="mt-2 flex items-center text-xs">
          <span
            className={`font-semibold ${
              trend.percentage.startsWith("-")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {trend.percentage.startsWith("-") ? "↓" : "↑"} {trend.percentage}
          </span>
          <span className="ml-1 text-gray-500">{trend.label}</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
