import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useArticles } from "../../../store/articles-context";

const ModalInfo = () => {
  const { articlesData, clickedItem } = useArticles();

  let index = null;

  index = articlesData.findIndex((item) => item.id === clickedItem);

  return (
    <div className="custom-width h-[40vh] p-[20px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-wrap items-center z-20 bg-white custom-box-shadow rounded-md">
      <InfoOutlinedIcon
        style={{
          color: "#4C32FF",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      />
      <h1 className="grow ml-[10px] mb-[20px] text-[24px] text-gray_500 font-medium">
        Information
      </h1>

      <ul className="w-[100%] flex flex-col gap-[10px] p-[20px] text-[18px] text-gray_500 custom-box-shadow rounded-md">
        <li className="p-[10px] font-medium custom-box-shadow rounded-md">
          <span className="text-gray_300">Title: </span>
          {index === null ? "" : articlesData[index].title}
        </li>
        <li className="p-[10px] font-medium custom-box-shadow rounded-md">
          <span className="text-gray_300">Author: </span>
          {index === null ? "" : articlesData[index].author}
        </li>
        <li className="p-[10px] font-medium custom-box-shadow rounded-md">
          <span className="text-gray_300">Content type: </span>
          {index === null ? "" : articlesData[index].category}
        </li>
        <li className="p-[10px] font-medium custom-box-shadow rounded-md">
          <span className="text-gray_300">Date of upload: </span>
          {index === null ? "" : articlesData[index].date}
        </li>
      </ul>
    </div>
  );
};

export default ModalInfo;
