import { Link } from "react-router-dom";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Menu = () => {
  return (
    <nav className="h-[10vh] w-[100%] p-[10px] flex items-center justify-around  fixed bottom-0 rounded-t-[24px] bg-blue ">
      <Link path="dashboard" className="flex flex-col items-center gap-1">
        <DescriptionOutlinedIcon style={{ fontSize: "24px", color: "#fff" }} />
        <p className="text-[18px] text-white">Dashboard</p>
      </Link>
      <Link path="upload" className="flex flex-col items-center gap-2">
        <DriveFileRenameOutlineOutlinedIcon
          style={{ fontSize: "24px", color: "#fff" }}
        />
        <p className="text-[18px] text-white">Upload</p>
      </Link>
      <Link path="settings" className="flex flex-col items-center gap-2">
        <SettingsOutlinedIcon style={{ fontSize: "24px", color: "#fff" }} />
        <p className="text-[18px] text-white">Settings</p>
      </Link>
    </nav>
  );
};

export default Menu;
