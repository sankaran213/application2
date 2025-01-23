import { useState } from "react";

const faqs = [
  {
    question: "What is LLMOps services ?",
    answer:
      " LLMops services is a comprehensive platform for managing and monitoring GenAI applications...",
  },
  {
    question: "How LLMOps services works?",
    answer:
      " LLMops services works by offering a unified platform that simplifies the deployment, management, and monitoring of GenAI applications. It integrates various tools for model deployment, performance tracking, and optimization, ensuring smooth operation and scalability across AI models.",
  },
  {
    question: "How to choose an offering from LLMOps Services?",
    answer:
      "Choose an offering from LLMOps Services based on your GenAI application's deployment, monitoring, and performance needs. Select the one that matches your infrastructure and feature requirements.",
  },
  {
    question: "How to onboard our application on LLMOps services?",
    answer:
      "To onboard your application on  LLMOps services, follow their integration guidelines, which typically involve uploading your application, configuring necessary resources, and setting up monitoring and performance parameters within the platform.",
  },
  {
    question: "Does my enterprise workflow fits into  LLMOps services?",
    answer:
      "If your workflow involves GenAI applications needing centralized management and monitoring, it likely fits into  LLMOps services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Left Side: Title, Description, and Button */}
        <div className="md:w-1/3">
          <h1 className="text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mb-6">
            Find answers to common questions about our platform and services.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
            Contact Us
          </button>
        </div>

        {/* Right Side: FAQ List */}
        <div className="md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="p-4 pt-0 text-gray-600 transition-all ease-in-out duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
