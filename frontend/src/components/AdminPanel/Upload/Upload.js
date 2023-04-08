import useInput from "../../../hooks/use-input";
import { useArticles } from "../../../store/articles-context";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Upload = () => {
  const {
    onUploadArticle,
    articlesData,
    clickedItem,
    editMode,
    onEditMode,
    onEditArticle,
  } = useArticles();

  let index = null;

  if (editMode) {
    index = articlesData.findIndex((item) => item.id === clickedItem);
  }

  const defaultValues = {
    defaultTitle: index !== null ? articlesData[index].title : "",
    defaultSubtitle: index !== null ? articlesData[index].subtitle : "",
    defaultAuthor: index !== null ? articlesData[index].author : "",
    defaultArticle: index !== null ? articlesData[index].article : "",
  };

  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    reset: resetTitleInput,
    valueIsValid: titleIsValid,
  } = useInput(() => true, defaultValues.defaultTitle);
  const {
    enteredValue: enteredSubtitle,
    valueChangeHandler: subtitleChangeHandler,
    reset: resetSubtitleInput,
    valueIsValid: subtitleIsValid,
  } = useInput(() => true, defaultValues.defaultSubtitle);
  const {
    enteredValue: enteredAuthor,
    valueChangeHandler: authorChangeHandler,
    reset: resetAuthorInput,
    valueIsValid: authorIsvalid,
  } = useInput(() => true, defaultValues.defaultAuthor);

  const {
    enteredValue: enteredArticle,
    valueChangeHandler: articleChangeHandler,
    reset: resetArticle,
    valueIsValid: articleIsvalid,
  } = useInput(() => true, defaultValues.defaultArticle);

  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = String(today.getFullYear());
  const todaysDate = day + "." + month + "." + year;

  let formIsValid =
    titleIsValid && subtitleIsValid && authorIsvalid && articleIsvalid;

  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    const articleData = {
      title: enteredTitle,
      subtitle: enteredSubtitle,
      author: enteredAuthor,
      article: enteredArticle,
      date: todaysDate,
      id: Math.floor(Math.random() * 1000),
    };

    if (!editMode) {
      onUploadArticle(articleData);
    } else {
      onEditArticle(articleData);
      onEditMode(false);
    }

    navigate("/admin-panel/dashboard");
    resetTitleInput("");
    resetSubtitleInput("");
    resetAuthorInput("");
    resetArticle("");
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="w-[100%] h-[80vh] absolute px-[20px] flex flex-col overflow-y-auto overflow-x-hidden"
    >
      <h2 className="mt-[20px] text-[24px] text-gray_500">Articles Ulpoad</h2>
      <label className="text-[18px] mt-[20px] text-gray_700">Title</label>
      <input
        type="text"
        id="title"
        onChange={titleChangeHandler}
        value={enteredTitle}
        placeholder="Title..."
        className="w-[100%] p-[10px] mt-[20px] text-[16px] font-medium text-gray_500 focus:outline-none placeholder-gray_700 custom-box-shadow rounded-md"
      ></input>
      <label className="text-[18px] mt-[20px] text-gray_700">Subtitle</label>
      <input
        type="text"
        id="subTitle"
        onChange={subtitleChangeHandler}
        value={enteredSubtitle}
        placeholder="Subtitle..."
        className="w-[100%] p-[10px] mt-[20px] text-[16px] font-medium text-gray_500 focus:outline-none placeholder-gray_700  custom-box-shadow rounded-md"
      ></input>
      <label className="text-[18px] mt-[20px] font text-gray_700">Author</label>
      <div className="flex items-center mt-[20px] custom-box-shadow rounded-md">
        <input
          type="text"
          id="category"
          onChange={authorChangeHandler}
          value={enteredAuthor}
          placeholder="Author..."
          className="grow p-[10px] text-[16px] font-medium text-gray_500 focus:outline-none placeholder-gray_700"
        ></input>
        <KeyboardArrowDownOutlinedIcon
          style={{ fontSize: "24px", color: "#757575", flexBasis: "10%" }}
        />
      </div>
      <label className="text-[18px] mt-[20px] text-gray_700">Category</label>
      <div className="min-h-[44px] mt-[20px] bg-blue rounded-md"></div>
      <label className="text-[18px] mt-[20px] text-gray_700">Article</label>
      <textarea
        id="article"
        name="article"
        onChange={articleChangeHandler}
        value={enteredArticle}
        className="min-h-[300px] mt-[20px] p-[10px] text-[18px] font-medium text-gray_500 focus:outline-none border-2 border-blue rounded-lg"
        placeholder="Type..."
      ></textarea>
      <button className="min-h-[44px] mt-[20px] mb-[20px] text-[18px] font-medium text-white bg-blue rounded-md">
        Upload an article
      </button>
    </form>
  );
};

export default Upload;
