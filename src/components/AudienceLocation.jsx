import React from "react";

const AudienceLocation = ({ locations, isDarkMode }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="text-lg font-semibold">Audience Location</h3>
      <ul className="mt-4 space-y-4">
        {locations.map((location, index) => (
          <li key={index}>
            <div className="flex justify-between mb-1">
              <span>{location.country}</span>
              <span>{location.percentage}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  isDarkMode ? "bg-blue-500" : "bg-blue-600"
                }`}
                style={{ width: `${location.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudienceLocation;
