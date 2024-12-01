import React from "react";

const DeviceOverview = ({ data, isDarkMode }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-lg font-semibold">Device Overview</h3>
      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <img
                src={`/assets/${isDarkMode ? item.iconDark : item.icon}`}
                alt={item.device}
                className="w-6 h-6"
              />
              <span>{item.device}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{item.percentage}%</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceOverview;