import MyTask from "../../feature/employee module/My Tasks/ui/pages/MyTask";
import Attendance from "../../feature/employee module/Attendance/ui/pages/Attendance";
import Profile from "../../feature/employee module/Profile/ui/pages/Profile";
import Setting from "../../feature/settings/ui/pages/Setting";

export const employeeRoutes = [
  {
    path: "/home/myTask",
    element: <MyTask />,
  },
  {
    path: "/home/attendance",
    element: <Attendance />,
  },
  {
    path: "/home/profile",
    element: <Profile />,
  },
];
