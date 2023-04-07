import { useArticles } from "../../../store/articles-context";
import { createPortal } from "react-dom";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import ArticlesList from "./ArticlesList";
import ModalInfo from "./ModalInfo";
import Overlay from "../../UI/Overlay";

const Dashboard = () => {
  const { showInfoModal } = useArticles();
  return (
    <form className="h-[80vh] flex flex-col">
      <h2 className="ml-[20px] mt-[20px] text-[24px] text-gray_500">
        Articles dashboard
      </h2>
      <SearchBox />
      <FilterBox />
      <ArticlesList />
      {showInfoModal && createPortal(<ModalInfo />, document.body)}
      {showInfoModal && createPortal(<Overlay />, document.body)}
    </form>
  );
};

export default Dashboard;
