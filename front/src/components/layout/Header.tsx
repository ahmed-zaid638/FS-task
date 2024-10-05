import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20   p-4 bg-gray-50 w-full">
      <div className="flex flex-col text-left">
        <span className="font-semibold  text-[18px] md:text-[26px] text-[#151D48]">
          John Smith Profile
        </span>
      </div>

      <div className="flex items-center gap-1 md:gap-5 space-x-4 ">
        <NotificationsNoneIcon className="cursor-pointer" />
        <MailOutlineIcon className="cursor-pointer" />
        <SettingsIcon className="cursor-pointer" />

        <Avatar alt="John Smith" src="/person.png" />
      </div>
    </header>
  );
};

export default Header;
