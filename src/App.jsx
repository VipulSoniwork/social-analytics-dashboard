import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import Statistics from "./components/Statistics";
import DeviceOverview from "./components/DeviceOverview";
import Messages from "./components/Messages";
import AudienceLocation from "./components/AudienceLocation";
import PageReach from "./components/PageReach";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const deviceData = [
    { icon: "laptop.svg", iconDark: "laptop-white.svg", device: "Laptops", percentage: 45 },
    {icon: "phone.svg", iconDark: "phone-white.svg",  device: "Mobile", percentage: 55 },
  ];


  const messages = [
    {
      sender: 'Brainy Beam',
      senderAvatar: 'avatar-1.svg',
      content: 'Hello, how are you?',
      timestamp: '2 minutes ago',
      platform: 'instagram'
    },
  ];

  const audienceLocations = [
    { country: "India", percentage: 45 },
    { country: "USA", percentage: 20 },
    { country: "UK", percentage: 20 },
    { country: "Australia", percentage: 10 },
    { country: "Saudi Arabia", percentage: 5 },
    
  ];

  return (
<div
  className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen p-6`}
>
  <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

  {/* Main Grid Layout */}
  <div className="grid grid-cols-5 gap-6">
    {/* Left Sections (col-span-4) */}
    <div className="col-span-4 grid gap-6">
      {/* Section 1: Three Cards */}
      <div className="grid grid-cols-3 gap-6">
        <Card
          iconPath="/assets/facebook.svg"
          title="Facebook"
          value="63,650"
          followersLabel="Followers"
          change={+3.5}
          isDarkMode={isDarkMode}
          arrowUpPath="/assets/up.svg"
        />
        <Card
          iconPath="/assets/instagram.svg"
          title="Instagram"
          value="34,854"
          followersLabel="Followers"
          change={+5}
          isDarkMode={isDarkMode}
          arrowUpPath="/assets/up.svg"
        />
        <Card
          iconPath="/assets/linkdin.svg"
          title="LinkedIn"
          value="21,684"
          followersLabel="Followers"
          change={+4.2}
          isDarkMode={isDarkMode}
          arrowUpPath="/assets/up.svg"
        />
      </div>

      {/* Section 2: Daily Visitors */}
      <Statistics isDarkMode={isDarkMode} />

      {/* Section 3: Device Overview and Recent Posts */}
      <div className="grid grid-cols-2 gap-6">
        <DeviceOverview data={deviceData} isDarkMode={isDarkMode} />
        <Messages messages={messages} isDarkMode={isDarkMode} />
      </div>
    </div>

    {/* Right Vertical Layout (col-span-1) */}
    <div className="col-span-1 flex flex-col gap-6">
      <ProfileCard
        src="/assets/profile.svg"
        name="Vipul Soni"
        followers="118K+"
        isDarkMode={isDarkMode}
      />
      <PageReach
        platform="Instagram"
        reach="43k"
        newUsers="250+ new users"
        isDarkMode={isDarkMode}
      />
      <AudienceLocation locations={audienceLocations} isDarkMode={isDarkMode} />
    </div>
  </div>
</div>

  );
};

export default App;
