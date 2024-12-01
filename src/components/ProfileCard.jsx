import React from "react";

const ProfileCard = ({ name, followers, isDarkMode, src }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
      style={{
        width: "100%",
        textAlign: "center",
        borderRadius: "16px",
      }}
    >
      <div className="flex flex-col items-center">
        <div
          className="rounded-full p-[2px]"
          style={{
            background: "linear-gradient(to bottom, #00BFFF, #1E90FF)",
          }}
        >
          <img
            src={src}
            alt="Profile"
            className="rounded-full w-[50px] h-[50px] object-cover"
          />
        </div>
        <div className="mt-4">
          <p className="font-semibold text-lg">{name}</p>
        </div>
      </div>
      <div className="flex justify-center items-baseline">
      <p className="mt-3 text-xl font-bold">{followers}</p>
      <p className="ml-2 text-sm">Followers</p>
      </div>
    </div>
  );
};

export default ProfileCard;
