// REACT ROUTER DOM IMPORTS
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// TOASTIFY LIBRARY IMPORTS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ACTIONS
import { logoutAction } from "./actions/logout";

// LAYOUTS AND LOADERS
import MainLayout, { mainLoader } from "./layouts/MainLayout";

// PAGES AND LOADERS AND THEIR ACTIONS
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// CREATING BROWSER ROUTER FOR THE WEBSITE
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

// RENDERING THE APP COMPONENT
function App() {
  return (
    <div className=" bg-blue-100 min-h-screen">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
