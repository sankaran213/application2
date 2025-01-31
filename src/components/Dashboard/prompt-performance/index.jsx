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
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Prompt Performance
      </h2>

      {/* Table Header */}
      <div className="bg-white p-4 rounded-lg shadow flex justify-between font-medium text-gray-500">
        <span className="w-1/4">User Name</span>
        <span className="w-1/6">Requests</span>
        <span className="w-1/3">Prompts</span>
        <span className="w-1/6 text-center">Action</span>
        {/* Eval Button */}
        <button className="w-1/6 text-white bg-blue-500 hover:bg-blue-600 text-sm font-medium px-8 py-1 rounded-lg transition duration-200">
          Eval
        </button>
      </div>

      {/* User Data */}
      <div className="mt-3 space-y-2">
        {promptData.map((user, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            {/* Email */}
            <span className="w-1/4 text-gray-800 font-medium">
              {user.email}
            </span>

            {/* Requests */}
            <span className="w-1/6 text-gray-600">{user.requests}</span>

            {/* Prompt */}
            <span className="w-1/3 text-gray-500 truncate">{user.prompt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptPerformance;
