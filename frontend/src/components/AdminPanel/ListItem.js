import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const ListItem = (props) => {
  return (
    <li className="h-[5vh] flex gap-[10px] items-center  ">
      <p className="grow text-gray_500 font-medium text-[18px]">
        {props.title}
      </p>

      <InfoOutlinedIcon style={{ color: "#444444" }} />
      <ModeEditOutlineOutlinedIcon style={{ color: "#444444" }} />
      <DeleteOutlineOutlinedIcon style={{ color: "#444444" }} />
    </li>
  );
};

export default ListItem;
