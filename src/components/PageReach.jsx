import React from "react";

const PageReach = ({ platform, reach, newUsers, isDarkMode }) => {
    return (
        <div
            className={`p-6 rounded-xl shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <p className="text-lg font-medium">Account Reach</p>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? "bg-gray-700 text-white-800" : "bg-gray-200 text-black"
                    }`}>
                    {platform} ▼
                </div>
            </div>

            {/* Page Stats */}
            <p className="text-4xl font-bold">{reach}</p>
            <p className="text-sm text-gray-400 mb-6">visitors per month</p>

            {/* Users */}
            <div className="flex items-center">
                {/* User Images */}
                <div className="flex -space-x-2">
                    <img
                        src="/assets/avatar-1.svg"
                        alt="User 1"
                        className="w-8 h-8 rounded-full border-2 border-gray-800"
                    />
                    <img
                        src="/assets/avatar-2.svg"
                        alt="User 2"
                        className="w-8 h-8 rounded-full border-2 border-gray-800"
                    />
                    <img
                        src="/assets/avatar-3.svg"
                        alt="User 3"
                        className="w-8 h-8 rounded-full border-2 border-gray-800"
                    />
                    <img
                        src="/assets/avatar-4.svg"
                        alt="User 4"
                        className="w-8 h-8 rounded-full border-2 border-gray-800"
                    />
                </div>


                {/* New Users */}
                <p className="ml-3 text-sm text-gray-400">{newUsers}</p>
            </div>
        </div>
    );
};

export default PageReach;
