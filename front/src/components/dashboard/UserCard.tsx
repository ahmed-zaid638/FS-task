interface UserCardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "financial", label: "Financial Information" },
  ];

  return (
    <div className="w-full lg:w-[350px] h-[400px] mb-5 lg:mb-0 bg-white shadow-md rounded-2xl p-6 text-left">
      <div className="flex justify-left mb-4">
        <img
          src={"/person.png"}
          alt="User Logo"
          className="h-20 w-20 object-cover"
        />
      </div>

      <div className=" mb-4">
        <h2 className="font-semibold text-lg">John Smith</h2>
        <p className="text-gray-500">Senior Product Manager</p>
      </div>
      <div className="border-b mb-5"></div>
      <div className="w-full bg-white  ">
        <div className="flex flex-col gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-4 py-3 rounded-lg ${
                activeTab === tab.id
                  ? "bg-[#F4F8FE] text-[#0F6CBD]"
                  : "bg-white text-[#051D49] hover:bg-[#F4F8FE]"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
