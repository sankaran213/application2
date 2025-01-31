import React from "react";

const SelectHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
      <select className="w-full md:w-[48%] h-12 px-6 bg-white rounded-lg border border-gray-200 text-gray-600">
        <option>Select Cloud</option>
      </select>
      <select className="w-full md:w-[48%] h-12 px-6 bg-white rounded-lg border border-gray-200 text-gray-600">
        <option>Select LLM</option>
      </select>
    </div>
  );
};

export default SelectHeader;
