import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./screens/home/HomeScreen";
import Error from "./screens/error/ErrorScreen";
// style.scss uses info in sass/bass/_base.scss
import "./assets/sass/style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

// export default function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
