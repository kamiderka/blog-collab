import ListItem from "./ListItem";

const ArticlesList = () => {
  const DUMMY_DATA = [
    {
      title: "Article1",
      author: "author1",
      contentType: "type1",
      date: "01.01.2023",
    },
    {
      title: "Article2",
      author: "author2",
      contentType: "type2",
      date: "02.02.2023",
    },
    {
      title: "Article3",
      author: "author3",
      contentType: "type3",
      date: "03.03.2023",
    },
  ];
  return (
    <ul className="custom-width mt-[20px] ml-[20px] p-[10px] flex flex-col custom-box-shadow rounded-md">
      {DUMMY_DATA.map((article) => (
        <ListItem title={article.title} />
      ))}
    </ul>
  );
};

export default ArticlesList;
