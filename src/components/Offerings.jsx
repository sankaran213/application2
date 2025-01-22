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
      <div
        className="grid gap-8 justify-center"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border border-gray-300 hover:shadow-lg transition-shadow flex items-center justify-start p-6 relative"
            style={{ width: "100%", maxWidth: "360px", height: "200px" }}
          >
            {/* Title and Description */}
            <div>
              <h3 className="absolute top-5 left-5 text-lg font-bold mb-2 text-gray-900">
                {offering.title}
              </h3>
              <p className="absolute top-12 left-5  text-sm text-gray-700">
                {offering.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
