import React from "react";
import "../style/DarkModeToggle.css";
const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="flex items-center justify-between align-center mb-6">
      <h1 className="text-2xl font-semibold">Social Media Dashboard</h1>
      <div className="w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search"
          className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            } p-3 rounded-full outline-none w-full`}
        />
      </div>
      <div className="flex items-center ">
        <div className="px-3 ">
          {/* Toggle Button */}
          <label className="relative">
            <input
              type="checkbox"
              className="toggle-checkbox"
              onChange={toggleDarkMode}
              checked={isDarkMode}
            />
            <div className="toggle-slot cursor-pointer">
              <div className="sun-icon-wrapper">
                <div
                  className="iconify sun-icon"
                  data-icon="feather-sun"
                  data-inline="false"
                ></div>
              </div>
              <div className="toggle-button"></div>
              <div className="moon-icon-wrapper">
                <div
                  className="iconify moon-icon"
                  data-icon="feather-moon"
                  data-inline="false"
                ></div>
              </div>
            </div>
          </label>
        </div>

        <div className="px-3 relative">
          {/* Notification Icon */}
          <div
            className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"
              } p-2 rounded-full flex items-center justify-center  cursor-pointer`}
          >
            <img
              src={`/assets/notification-${isDarkMode ? "white" : "black"}.svg`}
              alt="Notifications"
              className="w-6 h-6 relative"
            />
            {/* Red Dot */}
            <span
              className="absolute top-2.5 right-6 w-2 h-2 bg-red-500 rounded-full"
              style={{ transform: "translate(50%, -50%)" }}
            ></span>
          </div>
        </div>


        <div className="px-3">
          {/* Profile Icon */}
          <img
            src="/assets/profile.svg"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>


    </header>

  );
};

export default Header;



