import Department from "../../feature/admin module/Departments/ui/pages/Department";
import Document from "../../feature/admin module/Documents/ui/pages/Document";
import AddEmployee from "../../feature/admin module/Employees/ui/pages/AddEmployee";
import Employee from "../../feature/admin module/Employees/ui/pages/Employee";
import Tasks from "../../feature/admin module/Tasks/ui/pages/Tasks";
import Chat from "../../feature/chats/ui/pages/Chat";

export const adminRoutes = [
  {
    path: "employee",
    element: <Employee />,
  },
  {
    path: "chats",
    element: <Chat />,
  },
  {
    path: "add-employee",
    element: <AddEmployee />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "department",
    element: <Department />,
  },
  {
    path: "document",
    element: <Document />,
  },
];
