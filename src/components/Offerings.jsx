const offerings = [
  {
    title: "Onboard A GenAI App",
    description: "Add a GenAI app for management and monitoring",
  },
  {
    title: "GenAI App Playground",
    description: "Build a GenAI app with few clicks",
  },
  {
    title: "LLMOps Observability",
    description: "Unified view to monitor GenAI app metrics",
  },
  { title: "LLMOps Evaluation", description: "Explore LLM evaluation metrics" },
  {
    title: "Explainability",
    description: "Understand the metrics and scores with deeper insights",
  },
  { title: "FinOps", description: "Manage and observe Cloud and LLM costs" },
  {
    title: "Prompt Management",
    description: "Manage prompts templates efficiently using prompt library",
  },
  {
    title: "LLM Router",
    description: "Use the best-fit LLM for prompts and response",
  },
  {
    title: "AI Agents Playground",
    description: "Build an AI agent app with few clicks",
  },
  {
    title: "AgentOps Observability",
    description: "Unified view to monitor AI agent app metrics",
  },
];

export default function Offerings() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
        Offerings
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow flex items-center justify-center relative"
            style={{ width: "593.45px", height: "300px" }}
          >
            {/* Title and Description at Top-Left */}
            <div className="absolute top-0 left-0 p-12">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {offering.title}
              </h3>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
