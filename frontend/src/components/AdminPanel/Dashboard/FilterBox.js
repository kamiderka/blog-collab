import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const FilterBox = () => {
  return (
    <div className="custom-width mt-[20px] h-[5vh] ml-[20px] flex items-center text-[18px] font-medium text-gray_700">
      <h3 className="grow">Articles List</h3>
      <h3 className="">Filter</h3>
      <FilterAltOutlinedIcon
        style={{ fontSize: "24px", color: "#757575", margin: "0 5px" }}
      />
    </div>
  );
};

export default FilterBox;
