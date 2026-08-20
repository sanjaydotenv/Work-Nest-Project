const EmployeeToolbar = ({ handleSearchFilters }) => {
  return (
    <div
      className="
        flex flex-col gap-4
        border-b border-[var(--border-subtle)]
        bg-[var(--surface-container-low)]
        p-4
        lg:flex-row lg:items-center lg:justify-between
      "
    >
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <span
          className="
            pointer-events-none absolute
            left-4 top-1/2
            -translate-y-1/2
            text-[var(--text-muted)]
          "
        >
          ⌕
        </span>

        <input
          onInput={(e) => handleSearchFilters("search", e.target.value)}
          type="text"
          placeholder="Search employees..."
          className="
            w-full
            rounded-xl
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            py-3 pl-11 pr-4
            text-sm
            text-[var(--text)]
            outline-none
            placeholder:text-[var(--text-muted)]
            focus:border-[var(--primary)]
            focus:ring-2
            focus:ring-[var(--primary)]
            focus:ring-opacity-20
          "
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select
          onChange={(e) => handleSearchFilters("departments", e.target.value)}
          className="
            rounded-xl
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-4 py-3
            text-sm
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
        >
          <option>All Departments</option>
          <option>developer</option>
          <option>management</option>
          <option>common</option>
          <option>administrative</option>
          <option>hr</option>
        </select>

        <select
          onChange={(e) => handleSearchFilters("status", e.target.value)}
          className="
            rounded-xl
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-4 py-3
            text-sm
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
        >
          <option>All Status</option>
          <option>active</option>
          <option>inactive</option>
        </select>

        <select
          onChange={(e) => handleSearchFilters("role", e.target.value)}
          className="
            rounded-xl
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-4 py-3
            text-sm
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
        >
          <option>Role</option>
          <option>admin</option>
          <option>employee</option>
        </select>
      </div>
    </div>
  );
};

export default EmployeeToolbar;
