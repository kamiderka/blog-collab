import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
