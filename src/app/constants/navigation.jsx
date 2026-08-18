import {
  Building,
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  Megaphone,
  MessageSquareMore,
  Settings,
  Table,
  UserPen,
  UserRoundPlus,
  Workflow,
} from "lucide-react";

export const adminNavigation = [
  {
    title: "Dashboard",
    Icon: <LayoutDashboard />,
    path: "/home",
  },
  {
    title: "Chats",
    Icon: <MessageSquareMore />,
    path: "/home/chats",
  },
  {
    title: "Tasks",
    Icon: <FileSpreadsheet />,
    path: "/home/tasks",
  },
  {
    title: "Employee",
    Icon: <Workflow />,
    path: "/home/employee",
  },
  {
    title: "Add Employee",
    Icon: <UserRoundPlus />,
    path: "/home/add-employee",
  },
  {
    title: "Department",
    Icon: <Building />,
    path: "/home/department",
  },
  {
    title: "Document",
    Icon: <FileText />,
    path: "/home/document",
  },
];

export const employeeNavigation = [
  {
    title: "Dashboard",
    Icon: <Building />,
    path: "/home",
  },
  {
    title: "My Task",
    Icon: <FileSpreadsheet />,
    path: "/home/myTask",
  },
  {
    title: "Attendance",
    Icon: <Megaphone />,
    path: "/home/attendance",
  },
  {
    title: "Profile",
    Icon: <UserPen />,
    path: "/home/profile",
  },
  {
    title: "Settings",
    Icon: <Settings />,
    path: "/home/setting",
  },
];
