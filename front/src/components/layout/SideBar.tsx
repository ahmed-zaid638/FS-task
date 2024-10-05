import { useState } from "react";
import { Settings, Person, ExitToApp, Dashboard } from "@mui/icons-material"; 

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("home"); 

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const sidebarItems = [
    { id: "home", icon: <Dashboard />, label: "Home", link: "/dashboard" },
    { id: "profile", icon: <Person />, label: "Profile" , link: "/profile" },
    { id: "settings", icon: <Settings />, label: "Settings" },
    { id: "logout", icon: <ExitToApp />, label: "Logout" },
  ];

  return (
    <div className="flex flex-col h-screen w-20 bg-[#FFFFFF] shadow-lg p-4">
      <div className="mb-10">
        <img src="/logo.png" alt="Logo" className="w-12 h-12 mx-auto" />
      </div>
      <div className="flex flex-col gap-6 ">
        {sidebarItems.map((item) => (
          <a
           href={item.link}
            key={item.id}
            className={`w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center
              ${
                activeItem === item.id
                  ? "bg-[#003FAD] text-white"
                  : "text-gray-500"
              }`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
