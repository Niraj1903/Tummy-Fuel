import About from "./components/About";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/resturant/:resID",
          element: <ResturantMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
