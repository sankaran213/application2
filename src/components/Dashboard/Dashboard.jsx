import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptPerformance from "./prompt-performance";
import OverallPerformance from "./overall-performance";
import LLMMetrics from "./llm-metrics";
import OverallLLMMetrics from "./overall-llm-metrics";
import PlatformMetrics from "./platform-metrics";
import SelectHeader from "./select-header";
import ResponsiveNavbar from "./Navbar";
import Sidebar from "./sidebar";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleAdd = () => navigate("/protected");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "md:ml-[240px]" : "md:ml-[60px]"
        }`}
      >
        {/* Navbar */}
        <ResponsiveNavbar onAdd={handleAdd} />

        {/* Dashboard Content */}
        <div className="p-4 md:p-6">
          <SelectHeader />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="md:col-span-3">
              <PlatformMetrics />
            </div>

            {/* Middle Column */}
            <div className="md:col-span-6">
              <OverallPerformance />
            </div>

            {/* Right Column */}
            <div className="md:col-span-3">
              <LLMMetrics />
            </div>

            {/* Bottom Left */}
            <div className="md:col-span-4">
              <OverallLLMMetrics />
            </div>

            {/* Bottom Right */}
            <div className="md:col-span-8">
              <PromptPerformance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
