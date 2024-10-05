import { useState } from "react";
import PersonalInfo from "./personalInfo";
import Financialnfo from "./financialInfo";
import UserCard from "./UserCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("personal");

  return (
    <div className="p-4 lg:flex gap-3">
      <UserCard activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="px-0 lg:px-4 w-full">
        {activeTab === "personal" && <PersonalInfo />}
        {activeTab === "financial" && <Financialnfo />}
      </div>
    </div>
  );
};

export default Dashboard;
