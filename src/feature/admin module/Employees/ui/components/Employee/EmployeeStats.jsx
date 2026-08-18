const EmployeeStats = ({ data }) => {
  const stats = [
    {
      title: "Total Employees",
      value: data.pagination.total,
      description: "All employees",
    },
    {
      title: "Active",
      value: "112",
      description: "Currently working",
    },
    {
      title: "Inactive",
      value: "16",
      description: "Currently inactive",
    },
    {
      title: "Departments",
      value: "8",
      description: "Active departments",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            rounded-2xl
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-low)]
            p-5
            transition
            hover:-translate-y-0.5
            hover:bg-[var(--surface-container)]
          "
        >
          <p className="text-sm font-medium text-[var(--text-muted)]">
            {stat.title}
          </p>

          <div className="mt-3 flex items-end justify-between">
            <h2 className="text-3xl font-bold">{stat.value}</h2>

            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                bg-[var(--on-primary)]
                text-[var(--primary)]
              "
            >
              #
            </div>
          </div>

          <p className="mt-2 text-xs text-[var(--text-muted)]">
            {stat.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default EmployeeStats;
