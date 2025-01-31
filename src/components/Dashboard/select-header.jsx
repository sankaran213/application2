import React from "react";

const SelectHeader = () => {
  return (
    <div className="flex justify-between gap-4 mb-8">
      <select className="w-[600px] h-12 px-6 bg-white rounded-lg border border-gray-200 text-gray-600">
        <option>Select Cloud</option>
      </select>
      <select className="w-[600px] h-12 px-6 bg-white rounded-lg border border-gray-200 text-gray-600">
        <option>Select LLM</option>
      </select>
    </div>
  );
};

export default SelectHeader;
