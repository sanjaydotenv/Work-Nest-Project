const EmployeeRow = ({ employee }) => {
  const initials = employee.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  const isActive = employee.status === "Active";

  return (
    <tr
      className="
        border-b border-[var(--border-subtle)]
        transition
        hover:bg-[var(--surface-container-low)]
      "
    >
      {/* Employee */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-full
              bg-[var(--primary-fixed)]
              font-semibold
              text-[var(--primary)]
            "
          >
            {initials}
          </div>

          <div>
            <p className="font-semibold">
              {employee.name}
            </p>

            <p className="mt-0.5 text-sm text-[var(--text-muted)]">
              {employee.email}
            </p>
          </div>
        </div>
      </td>

      {/* Department */}
      <td className="px-6 py-4">
        <span className="text-sm">
          {employee.department}
        </span>
      </td>

      {/* Role */}
      <td className="px-6 py-4">
        <span
          className="
            inline-flex
            rounded-lg
            bg-[var(--tertiary-container)]
            px-3 py-1.5
            text-xs font-medium
            text-[var(--on-tertiary-container)]
          "
        >
          {employee.role}
        </span>
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <span
          className={`
            inline-flex items-center gap-2
            rounded-full
            px-3 py-1.5
            text-xs font-semibold
            ${
              isActive
                ? "bg-[var(--on-primary)] text-[var(--primary)]"
                : "bg-[var(--surface-container-high)] text-[var(--text-muted)]"
            }
          `}
        >
          <span
            className={`
              h-1.5 w-1.5 rounded-full
              ${isActive ? "bg-[var(--primary)]" : "bg-[var(--border)]"}
            `}
          />

          {employee.status}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex justify-end gap-2">
          <button
            className="
              rounded-lg
              px-3 py-2
              text-sm
              text-[var(--text-muted)]
              transition
              hover:bg-[var(--surface-container-high)]
              hover:text-[var(--text)]
            "
          >
            Edit
          </button>

          <button
            className="
              rounded-lg
              px-3 py-2
              text-sm
              text-[var(--error)]
              transition
              hover:bg-[var(--error-container)]
            "
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;