import React from "react";

const MetricCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-lg flex flex-col justify-center items-center w-full max-w-[314px] min-h-36 ">
      {/* Title */}
      <div className="text-sm text-gray-500 font-medium">{title}</div>

      {/* Value */}
      <div className="mt-1 text-[28px] font-semibold text-blue-900">
        {value}
      </div>
    </div>
  );
};

export default MetricCard;
