import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { employeeApi } from "../api/api";
import { useState } from "react";

export const useEmployee = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    search: "",
    departments: "",
    status: "",
    role: "",
  });

  const { data, isPending } = useQuery({
    queryKey: ["employee", page, filter],
    queryFn: () => employeeApi({ page, limit: 20, filter }),
    staleTime: 10000,
    placeholderData: keepPreviousData,
    keepPreviousData: true,
  });

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  const handleSearchFilters = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  return {
    data,
    isPending,
    handlePage,
    setFilter,
    handleSearchFilters,
  };
};
