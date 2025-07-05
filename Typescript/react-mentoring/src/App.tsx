import { RouterProvider, createBrowserRouter } from "react-router";

import HomePage from "./pages/Home.tsx";
import Root from "./pages/Root.tsx";
import SessionPage from "./pages/Session.tsx";
import SessionsPage from "./pages/Sessions.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
