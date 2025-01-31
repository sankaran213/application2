// // const offerings = [
// //   {
// //     title: "Onboard A GenAI App",
// //     description: "Add a GenAI app for management and monitoring",
// //     link: "/onboard-genai-app",
// //     icon: "📄", // Replace with actual icon
// //   },
// //   {
// //     title: "GenAI App Playground",
// //     description: "Build a GenAI app with a few clicks",
// //     link: "/genai-app-playground",
// //     icon: "⚙️",
// //   },
// //   {
// //     title: "LLMOps Observability",
// //     description: "Unified view to monitor GenAI app metrics",
// //     link: "/llmops-observability",
// //     icon: "📊",
// //   },
// //   {
// //     title: "LLMOps Evaluation",
// //     description: "Explore LLM evaluation metrics",
// //     link: "/llmops-evaluation",
// //     icon: "🔍",
// //   },
// //   {
// //     title: "Explainability",
// //     description: "Understand the metrics and scores with deeper insights",
// //     link: "/explainability",
// //     icon: "📖",
// //   },
// //   {
// //     title: "FinOps",
// //     description: "Manage and observe Cloud and LLM costs",
// //     link: "/finops",
// //     icon: "💰",
// //   },
// //   {
// //     title: "Prompt Management",
// //     description: "Manage prompt templates efficiently using a prompt library",
// //     link: "/prompt-management",
// //     icon: "✍️",
// //   },
// //   {
// //     title: "LLM Router",
// //     description:
// //       "Use the best fit LLM for prompts and responses in a multi-LLM environment",
// //     link: "/llm-router",
// //     icon: "🔀",
// //   },
// //   {
// //     title: "AI Agents Playground",
// //     description: "Build an AI agent app with a few clicks",
// //     link: "/ai-agents-playground",
// //     icon: "🤖",
// //   },
// //   {
// //     title: "AgentOps Observability",
// //     description: "Unified view to monitor AI agent app metrics",
// //     link: "/agentops-observability",
// //     icon: "📡",
// //   },
// // ];

// // export default function Offerings() {
// //   return (
// //     <div className="max-w-7xl mx-auto px-6 py-12">
// //       <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
// //         LLMOps Offerings
// //       </h2>

// //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {offerings.map((offering, index) => (
// //           <div
// //             key={index}
// //             className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col items-start hover:shadow-xl transition-all"
// //           >
// //             <div className="text-3xl mb-4">{offering.icon}</div>
// //             <h3 className="text-lg font-bold text-gray-900 mb-2">
// //               {offering.title}
// //             </h3>
// //             <p className="text-sm text-gray-700 mb-4">{offering.description}</p>
// //             <a
// //               href={offering.link}
// //               className="text-blue-600 text-sm font-semibold mt-auto"
// //             >
// //               Explore the Solution
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";

// const createIcon = (name) => (
//   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//     {name[0]}
//   </div>
// );

// const createBlankCard = (rowSpan, colSpan) => ({
//   icon: <div className="w-8 h-16" />,
//   title: "",
//   description: "",
//   link: "#",
//   isBlank: true,
//   rowSpan,
//   colSpan,
// });

// const solutions = [
//   // Big blank card (spans 2 rows in first column)
//   createBlankCard(2, 4),

//   // Row 1 - 3 cards (columns 2-4)
//   {
//     icon: createIcon("Settings"),
//     title: "Onboard A GenAI App",
//     description: "Add a GenAI app for management and monitoring",
//     link: "#",
//   },
//   {
//     icon: createIcon("Bot"),
//     title: "GenAI App Playground",
//     description: "Build a GenAI app with few clicks",
//     link: "#",
//   },
//   {
//     icon: createIcon("Eye"),
//     title: "LLMOps Observability",
//     description: "Unified view to monitor GenAI app metrics",
//     link: "#",
//   },
//   createBlankCard(2, 4),
//   // Row 2 - 3 cards (columns 2-4)
//   {
//     icon: createIcon("Search"),
//     title: "LLMOps Evaluation",
//     description: "Explore LLM evaluation metrics",
//     link: "#",
//   },
//   {
//     icon: createIcon("Lightbulb"),
//     title: "Explainability",
//     description: "Understand the metrics and scores with deeper insights",
//     link: "#",
//   },
//   {
//     icon: createIcon("BarChart"),
//     title: "FinOps",
//     description: "Manage and observe Cloud and LLM costs",
//     link: "#",
//   },

//   // Row 3 - 4 cards (full width)
//   {
//     icon: createIcon("Settings"),
//     title: "Prompt Management",
//     description: "Manage prompts templates efficiently using prompt library",
//     link: "#",
//   },
//   {
//     icon: createIcon("GitFork"),
//     title: "LLM Router",
//     description:
//       "Use the best fit LLM for prompts and response in a multi-LLM environment",
//     link: "#",
//   },
//   {
//     icon: createIcon("Bot"),
//     title: "AI Agents Playground",
//     description: "Build an AI agent app with few clicks",
//     link: "#",
//   },
//   {
//     icon: createIcon("LineChart"),
//     title: "AgentOps Observability",
//     description: "Unified view to monitor AI agent app metrics",
//     link: "#",
//   },
// ];

// export default function Offerings() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
//         LLMOps Offerings
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-min">
//         {solutions.map((solution, index) => (
//           <div
//             key={index}
//             className={`${
//               solution.isBlank
//                 ? "bg-white shadow-lg"
//                 : "bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
//             }
//             ${solution.rowSpan ? `row-span-${solution.rowSpan}` : ""}
//             ${solution.colSpan ? `xl:col-span-${solution.colSpan}` : ""}
//             rounded-lg overflow-hidden`}
//           >
//             {!solution.isBlank ? (
//               <>
//                 <div className="p-6">
//                   <div className="mb-4 text-gray-600">{solution.icon}</div>
//                   <h3 className="text-lg font-semibold mb-2">
//                     {solution.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-4">
//                     {solution.description}
//                   </p>
//                 </div>
//                 <div className="px-6 pb-6">
//                   <a
//                     href={solution.link}
//                     className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                   >
//                     Explore the Solution
//                   </a>
//                 </div>
//               </>
//             ) : (
//               <div className="w-full h-full" /> // Empty space for blank card
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

const Offerings = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "LLMOps Consulting",
      description: "Expert Guidance for Scalable and Efficient LLM Operations",
      route: "/llmops-consulting",
      icon: "icons/eval.png",
      bigCard: true,
    },
    {
      title: "LLMOps GMT",
      description: "Accelerating LLM Adoption with Strategic Market Execution",
      route: "/llmops-gmt",
      icon: "icons/eval.png",
      bigCard: true,
    },
    {
      title: "Onboard A GenAI App",
      description: "Add a GenAI app for management and monitoring",
      route: "/onboard-genai",
      icon: "icons/genai.png",
      playButton: true,
    },
    {
      title: "GenAI App Playground",
      description: "Build a GenAI app with few clicks",
      route: "/genai-playground",
      icon: "icons/play.png",
      playButton: true,
    },
    {
      title: "LLM Observability",
      description: "Unified view to monitor GenAI app metrics",
      route: "/llm-observability",
      icon: "icons/llmob.png",
      playButton: true,
    },
    {
      title: "LLM Evaluation",
      description: "Explore LLM evaluation metrics",
      route: "/llm-evaluation",
      icon: "icons/eval.png",
      playButton: true,
    },
    {
      title: "Explainability",
      description: "Understand the metrics and scores with deeper insights",
      route: "/explainability",
      icon: "icons/explain.png",
      playButton: true,
    },
    {
      title: "FinOps",
      description: "Manage and observe Cloud and LLM costs",
      route: "/finops",
      icon: "icons/finops.png",
      playButton: true,
    },
    {
      title: "Prompt Management",
      description: "Manage prompts templates efficiently using prompt library",
      route: "/finops",
      icon: "icons/prompt.png",
      playButton: true,
    },
    {
      title: "LLM Router",
      description:
        "Use the best fit LLM for prompts and response in a multi-LLM environment",
      route: "/finops",
      icon: "icons/router.png",
      playButton: true,
    },
    {
      title: "AI Agents playground",
      description: "Build an AI agent app with few clicks",
      route: "/finops",
      icon: "icons/playground.png",
      playButton: true,
    },
    {
      title: "AI Agent Observability",
      description: "Unified view to monitor AI agent app metrics",
      route: "/finops",
      icon: "icons/Observation.png",
      playButton: true,
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-black mb-8 bg-clip-text mt-10">
        LLMOps Offerings
      </h2>

      <div className="grid grid-cols-4 grid-rows-2 gap-8 p-6">
        {/* Large Card containing Two Small Cards */}
        <div
          className="row-span-2 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-8"
          style={{ width: "318px", height: "707px" }}
        >
          {[0, 1].map((index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 rounded-lg flex flex-col justify-between items-start text-left"
              style={{ width: "266px", height: "300px" }}
            >
              <h3 className="text-lg font-semibold mt-0">
                {cards[index].title}
              </h3>
              <h4 className="text-sm text-gray-600 mt-0">
                {cards[index].description}
              </h4>
              {/* "Click Here" for small cards */}
              <a
                href={cards[index].route}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-3"
              >
                Click Here
              </a>
            </div>
          ))}
        </div>

        {/* Remaining Cards with Play Button Only */}
        {cards.slice(2).map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between items-start text-left"
            style={{ width: "318px", height: "335px" }}
          >
            {/* Unique Logo */}
            <img
              src={card.icon} // Use the correct `card` object from the map
              alt={card.title}
              className="w-12 h-12"
            />
            <h3 className="text-lg font-semibold mt-0">{card.title}</h3>
            <h4 className="text-sm text-gray-600 mt-0">{card.description}</h4>
            {/* Play Button Only for remaining cards */}
            <a
              href={card.route}
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-3"
            >
              <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center transition-all duration-300 hover:bg-black hover:border-black">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black" // Ensures the polygon is black
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300 hover:stroke-white" // Changes color on hover
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
