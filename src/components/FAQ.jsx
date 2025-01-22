import { useState } from "react";

const faqs = [
  {
    question: "What is Uniplane?",
    answer:
      "Uniplane is a comprehensive platform for managing and monitoring GenAI applications...",
  },
  {
    question: "How Uniplane works?",
    answer:
      "Our free trial gives you full access to all features for 14 days...",
  },
  {
    question: "How to choose an offering from Uniplane?",
    answer: "Yes, you can modify your subscription at any time...",
  },
  {
    question: "How to onboard our application on Uniplane?",
    answer: "We implement enterprise-grade security measures...",
  },
  {
    question: "Does my enterprise workflow fits into Uniplane?",
    answer:
      "Enterprise customers get dedicated support, custom integrations...",
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
