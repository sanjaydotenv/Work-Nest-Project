import Chat from "../../feature/chats/ui/pages/Chat";
import Home from "../../feature/dashboard/ui/pages/Home";
import Setting from "../../feature/settings/ui/pages/Setting";

export const commonRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
];
