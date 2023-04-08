import React, { useState, useContext } from "react";

export const ArticlesContext = React.createContext();

export const useArticles = () => {
  return useContext(ArticlesContext);
};

export const ArticlesContextProvider = (props) => {
  const DUMMY_DATA = [
    {
      title: "Article1",
      subtitle: "Subtitle1",
      author: "author1",
      category: "category1",
      date: "01.01.2023",
      id: "1",
    },
    {
      title: "Article2",
      subtitle: "Subtitle2",
      author: "author2",
      category: "category2",
      date: "02.02.2023",
      id: "2",
    },
    {
      title: "Article3",
      subtitle: "Subtitle3",
      author: "author3",
      category: "category3",
      date: "03.03.2023",
      id: "3",
    },
  ];

  const [showInfoModal, setShowModal] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [articlesData, setArticlesData] = useState(DUMMY_DATA);
  const [editMode, setEditMode] = useState(false);

  const showInfoModalHandler = (value) => {
    setShowModal(value);
  };

  const clickedItemHandler = (id) => {
    setClickedItem(id);
  };

  const deleteItemHandler = (id) => {
    setArticlesData(articlesData.filter((item) => item.id !== id));
  };

  const uploadArticleHandler = (data) => {
    setArticlesData((prev) => [...prev, data]);
  };

  const EditArticleHandler = (data) => {
    setArticlesData((prev) => {
      const updateItem = articlesData.findIndex(
        (item) => item.id === clickedItem
      );
      articlesData[updateItem].title = data.title;
      articlesData[updateItem].subtitle = data.subtitle;
      articlesData[updateItem].author = data.author;
      articlesData[updateItem].content = data.content;
      articlesData[updateItem].date = data.date;
      articlesData[updateItem].id = data.id;
      return [...prev];
    });
  };

  const editModeHandler = (value) => {
    setEditMode(value);
  };

  const value = {
    showInfoModal,
    clickedItem,
    articlesData,
    editMode,
    onShowInfoModal: showInfoModalHandler,
    onClickItem: clickedItemHandler,
    onDeleteItem: deleteItemHandler,
    onUploadArticle: uploadArticleHandler,
    onEditArticle: EditArticleHandler,
    onEditMode: editModeHandler,
  };

  return (
    <ArticlesContext.Provider value={value}>
      {props.children}
    </ArticlesContext.Provider>
  );
};
