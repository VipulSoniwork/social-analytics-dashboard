import React from "react";

const Messages = ({ messages, isDarkMode }) => {
  const platformIcons = {
    facebook: "facebook.svg",
    instagram: "instagram.svg",
    twitter: "twitter.svg",
    linkedin: "linkedin.svg",
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-lg font-semibold">Messages</h3>
      <ul className="mt-4 space-y-4">
        {messages.map((message, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={`/assets/${message.senderAvatar}`}
                alt={message.sender}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">{message.sender}</h4>
                  {message.platform && (
                    <img
                      src={`/assets/${platformIcons[message.platform]}`}
                      alt={message.platform}
                      className="w-5 h-5"
                    />
                  )}
                </div>
                <p className="text-sm text-gray-500">{message.content}</p>
              </div>
            </div>
            <span className="text-gray-500">{message.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;