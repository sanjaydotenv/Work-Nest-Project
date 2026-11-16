import React, { useEffect, useState } from "react";
import {
  Building2,
  Users,
  UserRound,
  Plus,
  Search,
  X,
  ChevronRight,
  BriefcaseBusiness,
  Loader2,
  Layers3,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";
import {
  createNewDepartmentAPI,
  getAllDepartmentsAPI,
} from "../../api/Department";

const API_URL = "https://team-sync-backend-n78w.onrender.com/api/departments";

// Temporary employee data
const employeeOptions = [
  { _id: "EMP001", name: "Rahul Sharma", role: "Frontend Developer" },
  { _id: "EMP002", name: "Aman Verma", role: "Backend Developer" },
  { _id: "EMP003", name: "Priya Singh", role: "UI/UX Designer" },
  { _id: "EMP004", name: "Rohit Patel", role: "Software Engineer" },
  { _id: "EMP005", name: "Sneha Gupta", role: "Project Manager" },
  { _id: "EMP006", name: "Vikas Yadav", role: "QA Engineer" },
];

const Department = () => {
  const [departments, setDepartments] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const [search, setSearch] = useState("");
  const [employeeSearch, setEmployeeSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    manager: "",
    employees: [],
  });

  console.log(departments)
  // Get all Departments

  const handleAllDepartments = async () => {
    const response = await getAllDepartmentsAPI();

    setDepartments(response.data.data);
    setLoading(false)
  };

  useEffect(() => {
    handleAllDepartments();
  }, []);

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      manager: "",
      employees: [],
    });

    setEmployeeSearch("");
    setError("");
  };

  // Form input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Select manager
  const handleSelectManager = (e) => {
    setFormData((prev) => ({
      ...prev,
      manager: e.target.value,
    }));
  };

  // Select employee
  const handleSelectEmployee = (e) => {
    const selectedId = e.target.value;

    if (!selectedId) return;

    setFormData((prev) => {
      if (prev.employees.includes(selectedId)) {
        return prev;
      }

      return {
        ...prev,
        employees: [...prev.employees, selectedId],
      };
    });

    // Reset dropdown selection
    e.target.value = "";
  };

  // Remove selected employee
  const handleRemoveEmployee = (id) => {
    setFormData((prev) => ({
      ...prev,
      employees: prev.employees.filter((employeeId) => employeeId !== id),
    }));
  };

  // Create department
  const handleCreateDepartment = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Department name is required.");
      return;
    }

    const response = await createNewDepartmentAPI(formData);

    console.log(response);
  };

  // Search departments
  const filteredDepartments = departments.filter((department) =>
    department.name?.toLowerCase().includes(search.toLowerCase()),
  );

  // Employee filtering
  const filteredEmployees = employeeOptions.filter((employee) =>
    `${employee.name} ${employee._id} ${employee.role}`
      .toLowerCase()
      .includes(employeeSearch.toLowerCase()),
  );

  // Selected employee IDs
  const selectedEmployeeIds = formData.employees;

  // Statistics
  const totalEmployees = departments.reduce(
    
    (total, department) => {
      console.log("TOTAL" , total , "DEPARTMENT" , department)
      return total + (department.employees?.length || 0)
    },
    0,
  );

  const stats = [
    {
      title: "Total Departments",
      value: departments.length,
      icon: Building2,
      description: "Across your organization",
    },
    {
      title: "Total Employees",
      value: totalEmployees,
      icon: Users,
      description: "Assigned to departments",
    },
    {
      title: "Department Managers",
      value: departments.filter((d) => d.manager).length,
      icon: UserRound,
      description: "Managing departments",
    },
  ];

  if (loading) return <h1>loading</h1>

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] p-5 md:p-8">
      {/* HEADER */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
            <BriefcaseBusiness size={15} />
            <span>Organization</span>
            <ChevronRight size={14} />
            <span className="text-[var(--primary)]">Departments</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Departments
          </h1>

          <p className="text-sm text-[var(--text-muted)] mt-2">
            Manage your organization's departments and teams.
          </p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-[var(--on-primary)] font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-[var(--primary)]/10"
        >
          <Plus size={19} />
          Create Department
        </button>
      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="bg-[var(--surface-container-low)] border border-[var(--border-subtle)] rounded-2xl p-5 hover:border-[var(--primary)]/50 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--text-muted)]">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-3">{stat.value}</h2>

                  <p className="text-xs text-[var(--text-muted)] mt-2">
                    {stat.description}
                  </p>
                </div>

                <div className="w-11 h-11 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DEPARTMENT SECTION */}

      <div className="bg-[var(--surface-container-low)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden">
        <div className="p-5 md:p-6 border-b border-[var(--border-subtle)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">All Departments</h2>

              <p className="text-sm text-[var(--text-muted)] mt-1">
                View and manage all your departments.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              />

              <input
                type="text"
                placeholder="Search departments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] text-sm outline-none focus:border-[var(--primary)] transition-all placeholder:text-[var(--text-muted)]"
              />
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6">
          {filteredDepartments.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredDepartments.map((department, index) => (
                <div
                  key={department._id}
                  className="group p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] hover:border-[var(--primary)]/60 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                        <Building2 size={23} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-base">
                          {department.name}
                        </h3>

                        <p className="text-xs text-[var(--text-muted)] mt-1">
                          Department #{index + 1}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="p-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--surface-container-high)] transition-all"
                    >
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] mt-5 min-h-10 line-clamp-2">
                    {department.description || "No description provided."}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <div className="p-3 rounded-xl bg-[var(--surface-container-low)]">
                      <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs">
                        <UserRound size={15} />
                        Manager
                      </div>

                      <p className="text-sm font-medium mt-2 truncate">
                        {typeof department.manager === "object"
                          ? department.manager?.name || "Assigned"
                          : department.manager
                            ? `${department.manager.slice(0, 12)}...`
                            : "Not assigned"}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--surface-container-low)]">
                      <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs">
                        <Users size={15} />
                        Employees
                      </div>

                      <p className="text-sm font-medium mt-2">
                        {department.employees?.length || 0} Members
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--border-subtle)]">
                    <span className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Created
                    </span>

                    <button
                      type="button"
                      className="flex items-center gap-1 text-xs font-semibold text-[var(--primary)] opacity-80 group-hover:opacity-100 transition-all"
                    >
                      View Details
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-5">
                <Layers3 size={30} />
              </div>

              <h3 className="text-lg font-semibold">
                {search ? "No departments found" : "No departments yet"}
              </h3>

              <p className="text-sm text-[var(--text-muted)] max-w-sm mt-2 leading-relaxed">
                {search
                  ? "Try searching with a different department name."
                  : "Get started by creating your first department and organizing your employees into teams."}
              </p>

              {!search && (
                <button
                  onClick={() => {
                    resetForm();
                    setShowModal(true);
                  }}
                  className="mt-6 flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-[var(--on-primary)] text-sm font-semibold hover:opacity-90 transition-all"
                >
                  <Plus size={18} />
                  Create Your First Department
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* CREATE DEPARTMENT MODAL */}

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => !loading && setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[94vh] overflow-hidden rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* HEADER */}

            <div className="relative px-8 pt-8 pb-7 border-b border-[var(--border-subtle)] overflow-hidden">
              <div className="absolute -top-20 -right-10 w-56 h-56 rounded-full bg-[var(--primary)]/10 blur-3xl pointer-events-none" />

              <div className="relative flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">
                    <Building2 size={28} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
                        Organization
                      </span>

                      <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />

                      <span className="text-xs text-[var(--text-muted)]">
                        New Department
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight">
                      Create Department
                    </h2>

                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      Set up a new team in your organization.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={loading}
                  onClick={() => setShowModal(false)}
                  className="p-2.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] hover:bg-[var(--surface-container-high)] hover:text-[var(--text)] transition-all"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="flex items-center gap-2 mt-7">
                <div className="h-1 flex-1 rounded-full bg-[var(--primary)]" />
                <div className="h-1 flex-1 rounded-full bg-[var(--primary)]/20" />
                <div className="h-1 flex-1 rounded-full bg-[var(--primary)]/20" />
              </div>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleCreateDepartment}
              className="overflow-y-auto max-h-[calc(94vh-210px)]"
            >
              <div className="px-8 py-8 space-y-8">
                {/* BASIC INFORMATION */}

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-sm font-bold">
                      01
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm">
                        Basic Information
                      </h3>

                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        Enter your department details.
                      </p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-medium mb-2">
                      Department Name
                      <span className="text-[var(--error)] ml-1">*</span>
                    </label>

                    <div className="relative">
                      <Building2
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                      />

                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Engineering, Marketing, Design"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[var(--surface-container-low)] border border-[var(--border-subtle)] text-[var(--text)] text-sm outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all placeholder:text-[var(--text-muted)]"
                      />
                    </div>

                    <p className="text-xs text-[var(--text-muted)] mt-2">
                      Choose a unique name for your department.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description
                      <span className="text-xs font-normal text-[var(--text-muted)] ml-2">
                        Optional
                      </span>
                    </label>

                    <textarea
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="What does this department do? Describe its responsibilities..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--surface-container-low)] border border-[var(--border-subtle)] text-[var(--text)] text-sm outline-none resize-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all placeholder:text-[var(--text-muted)]"
                    />

                    <div className="flex justify-end mt-1">
                      <span className="text-xs text-[var(--text-muted)]">
                        {formData.description.length} characters
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--border-subtle)]" />

                {/* MANAGER */}

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--secondary-container)] text-[var(--on-secondary-container)] flex items-center justify-center text-sm font-bold">
                      02
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm">
                        Department Management
                      </h3>

                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        Assign a manager to lead this department.
                      </p>
                    </div>
                  </div>

                  <label className="block text-sm font-medium mb-2">
                    Department Manager
                    <span className="text-xs font-normal text-[var(--text-muted)] ml-2">
                      Optional
                    </span>
                  </label>

                  <div className="relative">
                    <UserRound
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                    />

                    <input
                      type="text"
                      name="manager"
                      value={formData.manager}
                      onChange={handleChange}
                      placeholder="Enter manager employee ID"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[var(--surface-container-low)] border border-[var(--border-subtle)] text-sm outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all placeholder:text-[var(--text-muted)]"
                    />
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mt-2">
                    Enter the employee ID or select a manager below.
                  </p>

                  {/* MANAGER OPTIONS */}

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                        Available Managers
                      </p>

                      <span className="text-xs text-[var(--text-muted)]">
                        {employeeOptions.length} Employees
                      </span>
                    </div>

                    <div className="relative mt-3">
                      <UserRound
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
                      />

                      <select
                        value={formData.manager}
                        onChange={handleSelectManager}
                        className="w-full appearance-none pl-11 pr-10 py-3.5 rounded-xl bg-[var(--surface-container-low)] border border-[var(--border-subtle)] text-sm text-[var(--text)] outline-none cursor-pointer focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all"
                      >
                        <option value="" className="bg-[var(--surface)]">
                          Select Department Manager
                        </option>

                        {employeeOptions.map((employee) => (
                          <option
                            key={employee._id}
                            value={employee._id}
                            className="bg-[var(--surface)]"
                          >
                            {employee.name} ({employee._id})
                          </option>
                        ))}
                      </select>

                      <ChevronRight
                        size={17}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[var(--text-muted)] pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--border-subtle)]" />

                {/* EMPLOYEES */}

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--tertiary-container)]/15 text-[var(--tertiary)] flex items-center justify-center text-sm font-bold">
                      03
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm">Team Members</h3>

                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        Add employees to your department.
                      </p>
                    </div>
                  </div>

                  <label className="block text-sm font-medium mb-2">
                    Employee IDs
                    <span className="text-xs font-normal text-[var(--text-muted)] ml-2">
                      Optional
                    </span>
                  </label>

                  <div className="relative">
                    <Users
                      size={19}
                      className="absolute left-4 top-4 text-[var(--text-muted)]"
                    />

                    <textarea
                      name="employees"
                      rows={3}
                      value={formData.employees.join(", ")}
                      onChange={(e) => {
                        const ids = [
                          ...new Set(
                            e.target.value
                              .split(",")
                              .map((id) => id.trim())
                              .filter(Boolean),
                          ),
                        ];

                        setFormData((prev) => ({
                          ...prev,
                          employees: ids,
                        }));
                      }}
                      placeholder="Paste employee IDs separated by commas..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[var(--surface-container-low)] border border-[var(--border-subtle)] text-sm outline-none resize-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all placeholder:text-[var(--text-muted)]"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-3 text-xs text-[var(--text-muted)]">
                    <Users size={14} />
                    <span>Separate multiple employee IDs using commas.</span>
                  </div>

                  {/* SELECTED EMPLOYEE CHIPS */}

                  {selectedEmployeeIds.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedEmployeeIds.map((id) => {
                        const employee = employeeOptions.find(
                          (item) => item._id === id,
                        );

                        return (
                          <div
                            key={id}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs"
                          >
                            <span className="font-medium">
                              {employee?.name || id}
                            </span>

                            <button
                              type="button"
                              onClick={() => handleRemoveEmployee(id)}
                              className="hover:opacity-60"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* EMPLOYEE OPTIONS */}

                  <div className="mt-5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                        Available Employees
                      </p>

                      <span className="text-xs text-[var(--text-muted)]">
                        {selectedEmployeeIds.length} Selected
                      </span>
                    </div>

                    <div className="relative mb-3">
                      <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                      />

                      <input
                        value={employeeSearch}
                        onChange={(e) => setEmployeeSearch(e.target.value)}
                        placeholder="Search employees..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[var(--surface-container-low)] border border-[var(--border-subtle)] text-xs outline-none focus:border-[var(--primary)]"
                      />
                    </div>

                    <div className="relative mt-3">
                      <Users
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
                      />

                      <select
                        defaultValue=""
                        onChange={handleSelectEmployee}
                        className="w-full appearance-none pl-11 pr-10 py-3.5 rounded-xl bg-[var(--surface-container-low)] border border-[var(--border-subtle)] text-sm text-[var(--text)] outline-none cursor-pointer focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all"
                      >
                        <option value="" className="bg-[var(--surface)]">
                          Select Employees
                        </option>

                        {filteredEmployees.map((employee) => (
                          <option
                            key={employee._id}
                            value={employee._id}
                            disabled={selectedEmployeeIds.includes(
                              employee._id,
                            )}
                            className="bg-[var(--surface)]"
                          >
                            {employee.name} ({employee.role})
                            {selectedEmployeeIds.includes(employee._id)
                              ? " - Selected"
                              : ""}
                          </option>
                        ))}
                      </select>

                      <ChevronRight
                        size={17}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[var(--text-muted)] pointer-events-none"
                      />
                    </div>

                    {filteredEmployees.length === 0 && (
                      <p className="text-xs text-center text-[var(--text-muted)] py-4">
                        No employees found.
                      </p>
                    )}
                  </div>
                </div>

                {/* ERROR */}

                {error && (
                  <div className="p-4 rounded-xl border border-[var(--error)]/20 bg-[var(--error-container)] text-[var(--on-error-container)] text-sm">
                    {error}
                  </div>
                )}
              </div>

              {/* FOOTER */}

              <div className="sticky bottom-0 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-[var(--surface-container-low)] border-t border-[var(--border-subtle)]">
                <p className="text-xs text-[var(--text-muted)]">
                  <span className="text-[var(--error)]">*</span> Required fields
                </p>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-[var(--border-subtle)] text-sm font-semibold hover:bg-[var(--surface-container-high)] transition-all"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-[var(--on-primary)] text-sm font-semibold hover:opacity-90 active:scale-[0.98] disabled:opacity-60 transition-all shadow-lg shadow-[var(--primary)]/15"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Plus size={18} />
                        Create Department
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Department;
