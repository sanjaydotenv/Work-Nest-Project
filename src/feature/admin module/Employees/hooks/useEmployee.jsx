import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { employeeApi } from "../api/api";
import { useState } from "react";

export const useEmployee = () => {
  const [page, setPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["employee", page],
    queryFn: () => employeeApi({ page, limit: 10 }),
    staleTime: 10000,
    placeholderData: keepPreviousData,
    keepPreviousData: true,
  });

  const handlePage = (newPage) => {
    
    setPage(newPage);
  };

  return {
    data,
    isPending,
    handlePage,
  };
};
