const EmployeePagination = () => {
  return (
    <div
      className="
        flex flex-col gap-3
        border-t border-[var(--border-subtle)]
        bg-[var(--surface-container-low)]
        px-6 py-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <p className="text-sm text-[var(--text-muted)]">
        Showing <span className="font-semibold text-[var(--text)]">1</span>{" "}
        to <span className="font-semibold text-[var(--text)]">5</span>{" "}
        of <span className="font-semibold text-[var(--text)]">128</span>{" "}
        employees
      </p>

      <div className="flex items-center gap-2">
        <button
          className="
            rounded-lg
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-3 py-2
            text-sm
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--surface-container)]
          "
        >
          Previous
        </button>

        <button
          className="
            rounded-lg
            bg-[var(--primary)]
            px-3 py-2
            text-sm font-semibold
            text-[var(--on-primary)]
          "
        >
          1
        </button>

        <button
          className="
            rounded-lg
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-3 py-2
            text-sm
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--surface-container)]
          "
        >
          2
        </button>

        <button
          className="
            rounded-lg
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-3 py-2
            text-sm
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--surface-container)]
          "
        >
          3
        </button>

        <button
          className="
            rounded-lg
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-3 py-2
            text-sm
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--surface-container)]
          "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeePagination;