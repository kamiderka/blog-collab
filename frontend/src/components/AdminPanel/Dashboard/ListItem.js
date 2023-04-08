import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const ListItem = (props) => {
  return (
    <li
      onClick={props.clickedItem}
      className="h-[5vh] flex gap-[10px] p-[10px] items-center custom-box-shadow rounded-md"
    >
      <p className="grow text-gray_500 font-medium text-[18px]">
        {props.title}
      </p>

      <InfoOutlinedIcon style={{ color: "#444444" }} onClick={props.showInfo} />
      <Link to="/admin-panel/upload">
        <ModeEditOutlineOutlinedIcon
          style={{ color: "#444444" }}
          onClick={props.editItem}
        />
      </Link>
      <DeleteOutlineOutlinedIcon
        style={{ color: "#444444" }}
        onClick={props.deleteItem}
      />
    </li>
  );
};

export default ListItem;
