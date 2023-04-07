import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import SignInForm from "./components/LoginAuth/SignInForm";
import SignUpForm from "./components/LoginAuth/SignUpForm";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./components/AdminPanel/Dashboard/Dashboard";
import Upload from "./components/AdminPanel/Upload/Upload";
import Settings from "./components/AdminPanel/Settings/Settings";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/login/signin", element: <SignInForm /> },
        { path: "/login/signup", element: <SignUpForm /> },
      ],
    },
    {
      path: "/admin-panel",
      element: <AdminPanel />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        { path: "upload", element: <Upload /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
