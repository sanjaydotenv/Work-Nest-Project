import { useEmployee } from "../../hooks/useEmployee";
import EmployeeHeader from "../components/Employee/EmployeeHeader";
import EmployeePagination from "../components/Employee/EmployeePagination";
import EmployeeStats from "../components/Employee/EmployeeStats";
import EmployeeTable from "../components/Employee/EmployeeTable";
import EmployeeToolbar from "../components/Employee/EmployeeToolbar";
import EmployeeSkeloton from "../components/Employee/EmployeeSkeleton";

const Employee = () => {
  const { data, isPending } = useEmployee();

  if (isPending) return <EmployeeSkeloton />;

  console.log(data);

  return (
    <main className="min-h-screen bg-[var(--background)] p-6 text-[var(--text)]">
      <div className="mx-auto max-w-7xl space-y-6">
        <EmployeeHeader />

        <EmployeeStats data={data} />

        <section className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-container-lowest)]">
          <EmployeeToolbar />
          <EmployeeTable data={data} />
          <EmployeePagination />
        </section>
      </div>
    </main>
  );
};

export default Employee;
