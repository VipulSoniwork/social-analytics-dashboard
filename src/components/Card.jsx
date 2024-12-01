import React from "react";

const Card = ({
  iconPath,
  title,
  value,
  followersLabel,
  change,
  isDarkMode,
  arrowUpPath,
}) => {

  return (
    <div
      className={`p-5  flex-col rounded-3xl shadow-md gap-4 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
    >
      {/* Platform Logo */}
      <div className="flex p-2">
        <img src={iconPath} alt={`${title} logo`} className="w-8 h-8" />
        <h1 className="ml-3 text-2xl font-semibold">{title}</h1>
      </div>

      {/* Card Content */}
      <div>
        <div className="flex items-baseline justify-between p-2">
          <div className="flex items-baseline ">
            <p className="text-2xl font-bold ">{value}</p>
            <span className="ml-3 text-lg">{followersLabel}</span>
          </div>
          {/* Up Arrow */}
          <img
            src={arrowUpPath}
            alt={"Increase"}
            className="w-6 h-6 ml-3"
          />
        </div>
        <div className="flex items-center text-sm p-2">

          {/* Change Percentage */}
          <p className="text-green-500 font-semibold">
            {`+${change}k`} Weekly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
