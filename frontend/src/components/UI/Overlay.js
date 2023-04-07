import { useArticles } from "../../store/articles-context";

const Overlay = () => {
  const { showInfoModal, onShowInfoModal } = useArticles();
  return (
    <div
      className="w-[100vw] h-[100vh] fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/[.8] "
      onClick={() => onShowInfoModal(!showInfoModal)}
    ></div>
  );
};

export default Overlay;
