"use client"
import { useState } from "react";
import Diagnose from "./Digonose";
import Printerissue from "./Printerissue";


export default function SupportTabs() {
  const [activeTab, setActiveTab] = useState("diagnose");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Tabs */}
      <div className="flex gap-10 mt-16 text-lg font-medium">
        <button
          className={`flex items-center gap-2 ${
            activeTab === "diagnose" ? "text-blue-700 font-bold border-b-4 border-blue-700 pb-1" : "text-gray-700 hover:text-black"
          }`}
          onClick={() => setActiveTab("diagnose")}
        >
          <span className="text-2xl">🖥</span> Computer Issues
        </button>
        <button
          className={`flex items-center gap-2 ${
            activeTab === "printer" ? "text-blue-700 font-bold border-b-4 border-blue-700 pb-1" : "text-gray-700 hover:text-black"
          }`}
          onClick={() => setActiveTab("printer")}
        >
          <span className="text-2xl">🖨</span> Printer Issues
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-10 w-full">
        {activeTab === "diagnose" && <Diagnose />}
        {activeTab === "printer" && <Printerissue />}
      </div>
    </div>
  );
}
