import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Palindrome from "./routes/Palindrome.jsx";
import BubbleSort from "./routes/BubbleSort.jsx";
import Stack from "./routes/Stack.jsx";
import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/palindrome", element: <Palindrome /> },
        { path: "/bubblesort", element: <BubbleSort /> },
        { path: "/stack", element: <Stack /> }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;