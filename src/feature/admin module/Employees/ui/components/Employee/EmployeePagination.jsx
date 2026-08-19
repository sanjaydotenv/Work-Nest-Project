const EmployeePagination = ({ pagination, handlePage }) => {
  const { total, limit, page, totalpages } = pagination;

  console.log(pagination);

  let start = (page - 1) * limit + 1;
  let end = Math.min(page * limit, total);

  let pages = [];

  if (totalpages <= 3) {
    pages = Array.from({ length: totalpages }, (_, idx) => idx + 1);
  } else if (page <= 2) {
    pages = [1, 2, 3];
  } else if (page >= totalpages - 1) {
    pages = [totalpages - 2, totalpages - 1, totalpages];
  } else {
    pages = [page - 1, page, page + 1];
  }

  console.log(pages);

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
        Showing{" "}
        <span className="font-semibold text-[var(--text)]">{start}</span> to{" "}
        <span className="font-semibold text-[var(--text)]">{end}</span> of{" "}
        <span className="font-semibold text-[var(--text)]">{total}</span>{" "}
        employees
      </p>

      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          onClick={() => handlePage(page - 1)}
          disabled={page <= 1}
          className="
            rounded-lg
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-3 py-2
            text-sm
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--surface-container)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Previous
        </button>

        {/* Page Numbers */}
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePage(pageNumber)}
            className={`
      rounded-lg
      px-3 py-2
      text-sm font-semibold
      transition
      ${
        page === pageNumber
          ? "bg-[var(--primary)] text-[var(--on-primary)]"
          : "border border-[var(--border-subtle)] bg-[var(--surface-container-lowest)] text-[var(--text-muted)] hover:bg-[var(--surface-container)]"
      }
    `}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => handlePage(page + 1)}
          disabled={page * limit === total}
          className="
            rounded-lg
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
            px-3 py-2
            text-sm
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--surface-container)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeePagination;
