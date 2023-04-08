import { Link } from "react-router-dom";
import { useArticles } from "../../store/articles-context";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Menu = () => {
  const { onEditMode } = useArticles();
  return (
    <nav className="h-[10vh] w-[100%] p-[10px] flex items-center justify-around  fixed bottom-0 rounded-t-[24px] bg-blue ">
      <Link
        to="dashboard"
        className="flex flex-col items-center gap-1"
        onClick={() => onEditMode(false)}
      >
        <DescriptionOutlinedIcon style={{ fontSize: "24px", color: "#fff" }} />
        <p className="text-[18px] text-white">Dashboard</p>
      </Link>
      <Link to="upload" className="flex flex-col items-center gap-2">
        <DriveFileRenameOutlineOutlinedIcon
          style={{ fontSize: "24px", color: "#fff" }}
        />
        <p className="text-[18px] text-white">Upload</p>
      </Link>
      <Link to="settings" className="flex flex-col items-center gap-2">
        <SettingsOutlinedIcon style={{ fontSize: "24px", color: "#fff" }} />
        <p className="text-[18px] text-white">Settings</p>
      </Link>
    </nav>
  );
};

export default Menu;
