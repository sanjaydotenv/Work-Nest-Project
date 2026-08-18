const EmployeeSkeleton = () => {
  const rows = Array.from({ length: 6 });

  return (
    <div className="min-h-full animate-pulse bg-[var(--background)] p-6">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Header Skeleton */}
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <div className="h-8 w-40 rounded-lg bg-[var(--surface-container-high)]" />
            <div className="h-4 w-72 rounded-md bg-[var(--surface-container-high)]" />
          </div>

          <div className="h-11 w-36 rounded-xl bg-[var(--surface-container-high)]" />
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-[var(--border-subtle)]
                bg-[var(--surface-container-low)]
                p-5
              "
            >
              <div className="h-4 w-28 rounded bg-[var(--surface-container-high)]" />

              <div className="mt-4 h-8 w-16 rounded-lg bg-[var(--surface-container-high)]" />

              <div className="mt-3 h-3 w-32 rounded bg-[var(--surface-container-high)]" />
            </div>
          ))}
        </div>

        {/* Table Container */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-[var(--border-subtle)]
            bg-[var(--surface-container-lowest)]
          "
        >
          {/* Toolbar */}
          <div
            className="
              flex flex-col gap-4
              border-b border-[var(--border-subtle)]
              bg-[var(--surface-container-low)]
              p-4
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="h-11 w-full max-w-md rounded-xl bg-[var(--surface-container-high)]" />

            <div className="flex gap-3">
              <div className="h-11 w-40 rounded-xl bg-[var(--surface-container-high)]" />
              <div className="h-11 w-32 rounded-xl bg-[var(--surface-container-high)]" />
            </div>
          </div>

          {/* Table Header */}
          <div
            className="
              grid grid-cols-5
              border-b border-[var(--border-subtle)]
              bg-[var(--surface-container)]
              px-6 py-4
            "
          >
            <div className="h-3 w-20 rounded bg-[var(--surface-container-high)]" />
            <div className="h-3 w-24 rounded bg-[var(--surface-container-high)]" />
            <div className="h-3 w-16 rounded bg-[var(--surface-container-high)]" />
            <div className="h-3 w-16 rounded bg-[var(--surface-container-high)]" />
            <div className="ml-auto h-3 w-16 rounded bg-[var(--surface-container-high)]" />
          </div>

          {/* Rows */}
          {rows.map((_, index) => (
            <div
              key={index}
              className="
                grid grid-cols-5
                items-center
                border-b border-[var(--border-subtle)]
                px-6 py-4
              "
            >
              {/* Employee */}
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-[var(--surface-container-high)]" />

                <div className="space-y-2">
                  <div className="h-4 w-28 rounded bg-[var(--surface-container-high)]" />
                  <div className="h-3 w-36 rounded bg-[var(--surface-container-high)]" />
                </div>
              </div>

              {/* Department */}
              <div className="h-4 w-24 rounded bg-[var(--surface-container-high)]" />

              {/* Role */}
              <div className="h-7 w-28 rounded-lg bg-[var(--surface-container-high)]" />

              {/* Status */}
              <div className="h-7 w-20 rounded-full bg-[var(--surface-container-high)]" />

              {/* Actions */}
              <div className="ml-auto flex gap-2">
                <div className="h-8 w-12 rounded-lg bg-[var(--surface-container-high)]" />
                <div className="h-8 w-14 rounded-lg bg-[var(--surface-container-high)]" />
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between bg-[var(--surface-container-low)] px-6 py-4">
            <div className="h-4 w-48 rounded bg-[var(--surface-container-high)]" />

            <div className="flex gap-2">
              <div className="h-9 w-16 rounded-lg bg-[var(--surface-container-high)]" />
              <div className="h-9 w-9 rounded-lg bg-[var(--surface-container-high)]" />
              <div className="h-9 w-9 rounded-lg bg-[var(--surface-container-high)]" />
              <div className="h-9 w-16 rounded-lg bg-[var(--surface-container-high)]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmployeeSkeleton;