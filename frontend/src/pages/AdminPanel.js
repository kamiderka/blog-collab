import Menu from "../components/AdminPanel/Menu";
import SearchBox from "../components/AdminPanel/SearchBox";
import FilterBox from "../components/AdminPanel/FilterBox";
import ArticlesList from "../components/AdminPanel/ArticlesList";

const AdminPanel = () => {
  return (
    <main className="h-[90vh] flex flex-col">
      <h2 className="ml-[20px] mt-[20px] text-[24px] text-gray_500">
        Articles
      </h2>
      <SearchBox />
      <FilterBox />
      <ArticlesList />
      <Menu />
    </main>
  );
};

export default AdminPanel;
