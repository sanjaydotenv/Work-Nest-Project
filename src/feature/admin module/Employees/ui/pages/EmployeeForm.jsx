import React from "react";

const EmployeeForm = ({ employee = {}, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      department: formData.get("department"),
      role: formData.get("role"),
      status: formData.get("status"),
      avatar: formData.get("avatar"),
    };

    onSubmit?.(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-[100vw] max-w-7xl
        rounded-2xl
        border border-[var(--border-subtle)]
        bg-[var(--surface-container-lowest)]
        p-6
        shadow-sm
      "
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--text)]">
          Employee Information
        </h2>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Add or update employee information.
        </p>
      </div>

      <div className="space-y-6">

        {/* Avatar */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--text)]">
            Avatar URL
          </label>

          <input
            type="text"
            name="avatar"
            defaultValue={employee.avatar || ""}
            placeholder="https://example.com/avatar.jpg"
            className="
              w-full
              rounded-xl
              border border-[var(--border-subtle)]
              bg-[var(--surface-container-low)]
              px-4 py-3
              text-sm
              text-[var(--text)]
              outline-none
              transition
              placeholder:text-[var(--text-muted)]
              focus:border-[var(--primary)]
              focus:bg-[var(--surface-container-lowest)]
            "
          />
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text)]">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              defaultValue={employee.name || ""}
              placeholder="Enter employee name"
              required
              className="
                w-full
                rounded-xl
                border border-[var(--border-subtle)]
                bg-[var(--surface-container-low)]
                px-4 py-3
                text-sm
                text-[var(--text)]
                outline-none
                transition
                placeholder:text-[var(--text-muted)]
                focus:border-[var(--primary)]
                focus:bg-[var(--surface-container-lowest)]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text)]">
              Email
            </label>

            <input
              type="email"
              name="email"
              defaultValue={employee.email || ""}
              placeholder="employee@example.com"
              required
              className="
                w-full
                rounded-xl
                border border-[var(--border-subtle)]
                bg-[var(--surface-container-low)]
                px-4 py-3
                text-sm
                text-[var(--text)]
                outline-none
                transition
                placeholder:text-[var(--text-muted)]
                focus:border-[var(--primary)]
                focus:bg-[var(--surface-container-lowest)]
              "
            />
          </div>

        </div>

        {/* Department + Role */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text)]">
              Department
            </label>

            <select
              name="department"
              defaultValue={employee.department || ""}
              required
              className="
                w-full
                rounded-xl
                border border-[var(--border-subtle)]
                bg-[var(--surface-container-low)]
                px-4 py-3
                text-sm
                text-[var(--text)]
                outline-none
                transition
                focus:border-[var(--primary)]
              "
            >
              <option value="" disabled>
                Select department
              </option>

              <option value="developer">
                Developer
              </option>

              <option value="design">
                Design
              </option>

              <option value="marketing">
                Marketing
              </option>

              <option value="hr">
                HR
              </option>

              <option value="finance">
                Finance
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text)]">
              Role
            </label>

            <select
              name="role"
              defaultValue={employee.role || ""}
              required
              className="
                w-full
                rounded-xl
                border border-[var(--border-subtle)]
                bg-[var(--surface-container-low)]
                px-4 py-3
                text-sm
                text-[var(--text)]
                outline-none
                transition
                focus:border-[var(--primary)]
              "
            >
              <option value="" disabled>
                Select role
              </option>

              <option value="admin">
                Admin
              </option>

              <option value="employee">
                Employee
              </option>

              <option value="manager">
                Manager
              </option>
            </select>
          </div>

        </div>

        {/* Status */}
        <div>
          <label className="mb-3 block text-sm font-medium text-[var(--text)]">
            Status
          </label>

          <div className="flex gap-3">

            <label
              className="
                flex cursor-pointer
                items-center gap-2
                rounded-xl
                border border-[var(--border-subtle)]
                bg-[var(--surface-container-low)]
                px-4 py-3
                transition
                hover:bg-[var(--surface-container)]
              "
            >
              <input
                type="radio"
                name="status"
                value="active"
                defaultChecked={
                  employee.status === "active" ||
                  !employee.status
                }
                className="accent-[var(--primary)]"
              />

              <span className="text-sm text-[var(--text)]">
                Active
              </span>
            </label>

            <label
              className="
                flex cursor-pointer
                items-center gap-2
                rounded-xl
                border border-[var(--border-subtle)]
                bg-[var(--surface-container-low)]
                px-4 py-3
                transition
                hover:bg-[var(--surface-container)]
              "
            >
              <input
                type="radio"
                name="status"
                value="inactive"
                defaultChecked={employee.status === "inactive"}
                className="accent-[var(--primary)]"
              />

              <span className="text-sm text-[var(--text)]">
                Inactive
              </span>
            </label>

          </div>
        </div>

      </div>

      {/* Footer */}
      <div
        className="
          mt-8
          flex items-center justify-end gap-3
          border-t border-[var(--border-subtle)]
          pt-6
        "
      >

        <button
          type="submit"
          className="
            rounded-xl
            bg-[var(--primary)]
            px-10 py-3
            text-sm font-semibold
            text-[var(--on-primary)]
            transition
            hover:opacity-90
            active:scale-[0.98]
          "
        >
          Save Employee
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;