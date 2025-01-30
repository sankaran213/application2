// const offerings = [
//   {
//     title: "Onboard A GenAI App",
//     description: "Add a GenAI app for management and monitoring",
//     link: "/onboard-genai-app",
//     icon: "📄", // Replace with actual icon
//   },
//   {
//     title: "GenAI App Playground",
//     description: "Build a GenAI app with a few clicks",
//     link: "/genai-app-playground",
//     icon: "⚙️",
//   },
//   {
//     title: "LLMOps Observability",
//     description: "Unified view to monitor GenAI app metrics",
//     link: "/llmops-observability",
//     icon: "📊",
//   },
//   {
//     title: "LLMOps Evaluation",
//     description: "Explore LLM evaluation metrics",
//     link: "/llmops-evaluation",
//     icon: "🔍",
//   },
//   {
//     title: "Explainability",
//     description: "Understand the metrics and scores with deeper insights",
//     link: "/explainability",
//     icon: "📖",
//   },
//   {
//     title: "FinOps",
//     description: "Manage and observe Cloud and LLM costs",
//     link: "/finops",
//     icon: "💰",
//   },
//   {
//     title: "Prompt Management",
//     description: "Manage prompt templates efficiently using a prompt library",
//     link: "/prompt-management",
//     icon: "✍️",
//   },
//   {
//     title: "LLM Router",
//     description:
//       "Use the best fit LLM for prompts and responses in a multi-LLM environment",
//     link: "/llm-router",
//     icon: "🔀",
//   },
//   {
//     title: "AI Agents Playground",
//     description: "Build an AI agent app with a few clicks",
//     link: "/ai-agents-playground",
//     icon: "🤖",
//   },
//   {
//     title: "AgentOps Observability",
//     description: "Unified view to monitor AI agent app metrics",
//     link: "/agentops-observability",
//     icon: "📡",
//   },
// ];

// export default function Offerings() {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
//         LLMOps Offerings
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {offerings.map((offering, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col items-start hover:shadow-xl transition-all"
//           >
//             <div className="text-3xl mb-4">{offering.icon}</div>
//             <h3 className="text-lg font-bold text-gray-900 mb-2">
//               {offering.title}
//             </h3>
//             <p className="text-sm text-gray-700 mb-4">{offering.description}</p>
//             <a
//               href={offering.link}
//               className="text-blue-600 text-sm font-semibold mt-auto"
//             >
//               Explore the Solution
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

const createIcon = (name) => (
  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
    {name[0]}
  </div>
);

const createBlankCard = (rowSpan, colSpan) => ({
  icon: <div className="w-8 h-16" />,
  title: "",
  description: "",
  link: "#",
  isBlank: true,
  rowSpan,
  colSpan,
});

const solutions = [
  // Big blank card (spans 2 rows in first column)
  createBlankCard(2, 4),

  // Row 1 - 3 cards (columns 2-4)
  {
    icon: createIcon("Settings"),
    title: "Onboard A GenAI App",
    description: "Add a GenAI app for management and monitoring",
    link: "#",
  },
  {
    icon: createIcon("Bot"),
    title: "GenAI App Playground",
    description: "Build a GenAI app with few clicks",
    link: "#",
  },
  {
    icon: createIcon("Eye"),
    title: "LLMOps Observability",
    description: "Unified view to monitor GenAI app metrics",
    link: "#",
  },
  createBlankCard(2, 4),
  // Row 2 - 3 cards (columns 2-4)
  {
    icon: createIcon("Search"),
    title: "LLMOps Evaluation",
    description: "Explore LLM evaluation metrics",
    link: "#",
  },
  {
    icon: createIcon("Lightbulb"),
    title: "Explainability",
    description: "Understand the metrics and scores with deeper insights",
    link: "#",
  },
  {
    icon: createIcon("BarChart"),
    title: "FinOps",
    description: "Manage and observe Cloud and LLM costs",
    link: "#",
  },

  // Row 3 - 4 cards (full width)
  {
    icon: createIcon("Settings"),
    title: "Prompt Management",
    description: "Manage prompts templates efficiently using prompt library",
    link: "#",
  },
  {
    icon: createIcon("GitFork"),
    title: "LLM Router",
    description:
      "Use the best fit LLM for prompts and response in a multi-LLM environment",
    link: "#",
  },
  {
    icon: createIcon("Bot"),
    title: "AI Agents Playground",
    description: "Build an AI agent app with few clicks",
    link: "#",
  },
  {
    icon: createIcon("LineChart"),
    title: "AgentOps Observability",
    description: "Unified view to monitor AI agent app metrics",
    link: "#",
  },
];

export default function Offerings() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
        LLMOps Offerings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-min">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`${
              solution.isBlank
                ? "bg-white shadow-lg"
                : "bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            } 
            ${solution.rowSpan ? `row-span-${solution.rowSpan}` : ""}
            ${solution.colSpan ? `xl:col-span-${solution.colSpan}` : ""}
            rounded-lg overflow-hidden`}
          >
            {!solution.isBlank ? (
              <>
                <div className="p-6">
                  <div className="mb-4 text-gray-600">{solution.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {solution.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={solution.link}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Explore the Solution
                  </a>
                </div>
              </>
            ) : (
              <div className="w-full h-full" /> // Empty space for blank card
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
