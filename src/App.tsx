import { ConfigProvider } from "antd";
import "./App.css";
import Login from "./views/Login";
import SideBar from "./views/SideBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Users from "./views/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    element: <SideBar />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users/>,
      },
      {
        path: "portfolio",
        element: <h1 className="text-center m-auto">Portfolio</h1>,
      },
      {
        path: "reports",
        element: <h1 className="text-center m-auto">Report</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#084077",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
