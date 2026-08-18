import { useNavigate } from "react-router";

const EmployeeHeader = () => {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Employees
        </h1>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Manage your team members, roles and employee information.
        </p>
      </div>

      <button
      onClick={() => navigate("/home/add-employee")}
        className="
          inline-flex items-center justify-center gap-2
          rounded-xl
          bg-[var(--primary)]
          px-5 py-3
          text-sm font-semibold
          text-[var(--on-primary)]
          transition
          hover:opacity-90
          active:scale-95
        "
      >
        <span className="text-lg">+</span>
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeHeader;