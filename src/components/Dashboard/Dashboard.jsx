import React, { useState } from "react";
import PromptPerformance from "./prompt-performance";
import OverallPerformance from "./overall-performance";
import LLMMetrics from "./llm-metrics";
import OverallLLMMetrics from "./overall-llm-metrics";
import PlatformMetrics from "./platform-metrics";
import SelectHeader from "./select-header";
import ResponsiveNavbar from "./Navbar";
import Sidebar from "./sidebar";
import { Navigate, useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/protected");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-[240px]" : "ml-[60px]"
        }`}
      >
        {/* Navbar */}
        <ResponsiveNavbar onAdd={handleAdd} />

        {/* Dashboard Content */}
        <div className="p-6">
          <SelectHeader />

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-3">
              <PlatformMetrics />
              {/* <ApiKeyForm /> */}
            </div>

            {/* Middle Column */}
            <div className="col-span-6">
              <OverallPerformance />
            </div>

            {/* Right Column */}
            <div className="col-span-3">
              <LLMMetrics />
            </div>

            {/* Bottom Left */}
            <div className="col-span-4">
              <OverallLLMMetrics />
            </div>

            {/* Bottom Right */}
            <div className="col-span-8">
              <PromptPerformance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
