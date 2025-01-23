export default function HeroWithNavbar() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EAF6FF] to-[#a8d6eb] flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4">
        <div className="text-[#1E1E1E] font-montserrat font-semibold text-2xl">
          GENAI LLMOps Services
        </div>
        <ul className="flex space-x-6 text-[#1E1E1E] font-montserrat font-medium">
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">FAQs</li>
          <li className="hover:text-blue-500 cursor-pointer">Guide</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 py-12 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-montserrat font-semibold text-[#1E1E1E] mb-6 leading-snug">
            GENAI LLMOps Services offers a single plane of glass view to build,
            manage, and monitor GenAI and AI Agents workflows
          </h1>
          <button className="bg-[#007BFF] text-white px-6 py-3 rounded-full hover:bg-[#0056b3] font-montserrat font-semibold shadow-md">
            Get Started Now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-7/12 relative right-[-12%] overflow-hidden">
          <img
            src="Dashboard Image.png" // Path to the uploaded image
            alt="Dashboard Preview"
            className="w-full max-w-l rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
