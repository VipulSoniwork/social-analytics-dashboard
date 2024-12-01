import React from "react";
import Graph from "./Graph";

const Statistics = ({ isDarkMode }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
    >
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Statistics</h1>
        <div className={`px-5 py-3 rounded-md shadow-md flex items-center justify-center space-x-2 ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}>
          <span className="text-lg">7 Days</span>
          <img
            src={isDarkMode ? "/assets/down-arrow-white.svg" : "/assets/down-arrow-black.svg"}
            alt="Down Arrow"
            className="h-6 w-6"
          />
        </div>
      </div>

      <div className="flex w-full justify-center items-center">
        <Graph />
        <div className="w-full max-w-md mx-auto">
          {/* Metrics */}
          <div className="flex justify-around pb-12">
            <div className="text-center">
              <h4 className="font-semibold text-3xl">2.5K</h4>
              <span className="text-gray-500">Facebook</span>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-3xl">3.4K</h4>
              <span className="text-gray-500">Instagram</span>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-3xl">1.5K</h4>
              <span className="text-gray-500">Linkdin</span>
            </div>
          </div>
          {/* Legend */}
          <div className="flex-col items-center">
            <div className="flex items-center font-semibold ml-8 py-2">
              <span className="w-4 h-4 rounded-full bg-[#4267B2] mr-2"></span> {/* Facebook Blue */}
              <span>Facebook</span>
              <span className="ml-auto mr-8 text-green-500">+230 Visitors/day ↑</span>
            </div>
            <div className="flex items-center ml-8 font-semibold py-2">
              <span className="w-4 h-4 rounded-full bg-[#E1306C] mr-2"></span> {/* Instagram Pink */}
              <span>Instagram</span>
              <span className="ml-auto mr-8 text-green-500">+1.8K Visitors/day ↑</span>
            </div>
            <div className="flex items-center ml-8 py-2 font-semibold">
              <span className="w-4 h-4 rounded-full bg-[#0A66C2] mr-2"></span> {/* LinkedIn Blue */}
              <span>LinkedIn</span>
              <span className="ml-auto mr-8 text-red-500">-185 Visitors/day ↓</span>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
};

export default Statistics;
