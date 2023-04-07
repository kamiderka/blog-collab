import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Menu from "../components/AdminPanel/Menu";

const AdminPanel = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Menu />
    </>
  );
};

export default AdminPanel;
