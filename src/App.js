import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Blogs from "./components/Blogs/Blogs";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: "/topics",
          element: <Topics></Topics>
        },
        {
          path: "/statistics",
          loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "/topics/:topicId",
          loader: async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <Quiz></Quiz>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
