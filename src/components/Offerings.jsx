const offerings = [
  {
    title: "Onboard A GenAI App",
    description: "Add a GenAI app for management and monitoring",
    link: "/onboard-genai-app",
  },
  {
    title: "GenAI App Playground",
    description: "Build a GenAI app with just a few clicks",
    link: "/genai-app-playground",
  },
  {
    title: "LLMOps Observability",
    description: "Gain a unified view to monitor GenAI app metrics",
    link: "/llmops-observability",
  },
  {
    title: "LLMOps Evaluation",
    description: "Explore comprehensive LLM evaluation metrics",
    link: "/llmops-evaluation",
  },
  {
    title: "Explainability",
    description: "Understand metrics and scores with deeper insights",
    link: "/explainability",
  },
  {
    title: "FinOps",
    description: "Manage and observe cloud and LLM costs efficiently",
    link: "/finops",
  },
  {
    title: "Prompt Management",
    description: "Organize prompt templates using an efficient library",
    link: "/prompt-management",
  },
  {
    title: "LLM Router",
    description: "Route prompts to the best-fit LLM for responses",
    link: "/llm-router",
  },
  {
    title: "AI Agents Playground",
    description: "Build AI agent applications quickly and easily",
    link: "/ai-agents-playground",
  },
  {
    title: "AgentOps Observability",
    description: "Monitor AI agent app metrics from a unified dashboard",
    link: "/agentops-observability",
  },
];

export default function Offerings() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
        LLMOps Offerings
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
            className="bg-white shadow-md rounded-lg border border-gray-300 hover:shadow-lg transition-shadow flex flex-col justify-between p-6"
            style={{ width: "318px", height: "335px" }}
          >
            {/* Logo */}
            <div className="flex items-center mb-4">
              <img
                src="Logo.png" // Replace with the actual logo path
                alt="Logo"
                className="w-[89px] h-[33px]"
              />
            </div>

            {/* Title and Description */}
            <div className="-mt-2">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {offering.title}
              </h3>
              <p className="text-sm text-gray-700">{offering.description}</p>
            </div>

            {/* Link */}
            <a
              href={offering.link}
              className="text-blue-600 text-sm font-semibold mt-2"
            >
              <u>Explore the Product</u>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
