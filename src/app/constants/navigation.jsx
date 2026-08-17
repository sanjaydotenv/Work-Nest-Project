import { Building, Table } from "lucide-react";

export const adminNavigation = [
  {
    title: "Dashboard",
    Icon: <Building />,
    path: "/home",
  },
  {
    title: "Tasks",
    Icon: <Table />,
    path: "/home/tasks",
  },
  {
    title: "Department",
    Icon: <Building />,
    path: "/home/department",
  },
  {
    title: "Document",
    Icon: <Building />,
    path: "/home/document",
  },
  {
    title: "Add Employee",
    Icon: <Building />,
    path: "/home/add-employee",
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
    Icon: <Table />,
    path: "/home/myTask",
  },
  {
    title: "Attendance",
    Icon: <Building />,
    path: "/home/attendance",
  },
  {
    title: "Profile",
    Icon: <Building />,
    path: "/home/profile",
  },
  {
    title: "Settings",
    Icon: <Building />,
    path: "/home/setting",
  },
]