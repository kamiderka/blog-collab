import useInput from "../../../hooks/use-input";
import { useArticles } from "../../../store/articles-context";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Upload = () => {
  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    reset: resetTitleInput,
    valueIsValid: titleIsValid,
  } = useInput(() => true);
  const {
    enteredValue: enteredSubtitle,
    valueChangeHandler: subtitleChangeHandler,
    reset: resetSubtitleInput,
    valueIsValid: subtitleIsValid,
  } = useInput(() => true);
  const {
    enteredValue: enteredAuthor,
    valueChangeHandler: authorChangeHandler,
    reset: resetAuthorInput,
    valueIsValid: authorIsvalid,
  } = useInput(() => true);

  const {
    enteredValue: enteredArticle,
    valueChangeHandler: articleChangeHandler,
    reset: resetArticle,
    valueIsValid: articleIsvalid,
  } = useInput(() => true);

  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = String(today.getFullYear());
  const todaysDate = day + "." + month + "." + year;

  const { onUploadArticle } = useArticles();

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
      content: enteredArticle,
      date: todaysDate,
    };

    onUploadArticle(articleData);

    navigate("/admin-panel/dashboard");
    resetTitleInput("");
    resetSubtitleInput("");
    resetAuthorInput("");
    resetArticle("");
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="custom-width h-[80vh] absolute left-[50%] translate-x-[-50%] flex flex-col overflow-y-auto"
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
