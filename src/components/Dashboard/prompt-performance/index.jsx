import React from "react";

const promptData = [
  {
    email: "swarna234@gmail.com",
    requests: "198,432",
    prompt: "Write a Python Program for anagram",
    avatar: "",
  },
  {
    email: "abhiraj101@gmail.com",
    requests: "245,678",
    prompt: "Design a scalable solution for a distributed key-value store...",
    avatar: "",
  },
  {
    email: "anuradha1@gmail.com",
    requests: "245,678",
    prompt: "Give solution for a key-value store...",
    avatar: "",
  },
  {
    email: "rahul45@gmail.com",
    requests: "45,678",
    prompt: "Explain various styles of Indian art",
    avatar: "",
  },
  {
    email: "buni345@gmail.com",
    requests: "89,678",
    prompt: "Design a scalable solution for a distributed key-value store...",
    avatar: "",
  },
];

const PromptPerformance = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto min-h-[480px]">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-black mb-4 text-left">
        Prompt Performance
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-4 md:grid-cols-5 bg-gray-100 p-3 rounded-t-lg text-gray-700 font-medium">
          <span className="col-span-2 md:col-span-1 text-center">
            User Name
          </span>
          <span className="hidden md:block text-center">Requests</span>
          <span className="col-span-2 text-center">Prompts</span>
          <span className="text-center">Action</span>
        </div>

        {/* User Data */}
        {promptData.map((user, index) => (
          <div
            key={index}
            className="grid grid-cols-4 md:grid-cols-5 items-center bg-white p-3 border-b hover:bg-gray-50 transition duration-200"
          >
            {/* Email */}
            <span className="col-span-2 md:col-span-1 text-gray-800 font-medium text-left">
              {user.email}
            </span>

            {/* Requests (Hidden in small screens) */}
            <span className="hidden md:block text-gray-600 text-center">
              {user.requests}
            </span>

            {/* Prompt */}
            <span className="col-span-2 text-gray-500 truncate text-left">
              <span className="group relative cursor-pointer">
                {user.prompt}
                <span className="absolute left-0 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-1 w-max">
                  {user.prompt}
                </span>
              </span>
            </span>

            {/* Eval Button */}
            <button className="w-full md:w-auto text-white bg-blue-500 hover:bg-blue-600 text-sm font-medium px-4 py-2 rounded-lg transition duration-200 mx-auto block">
              Eval
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptPerformance;
