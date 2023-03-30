import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import SignInForm from "./components/LoginAuth/SignInForm";
import SignUpForm from "./components/LoginAuth/SignUpForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/login",
          element: <LoginPage />,
        },
        { path: "/login/signin", element: <SignInForm /> },
        { path: "/login/signup", element: <SignUpForm /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
