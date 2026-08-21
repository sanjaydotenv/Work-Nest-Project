import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AddEmployee, employeeApi } from "../api/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const useEmployee = () => {
  const [page, setPage] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const handleAddEmployee = async (data) => {
    try {
      const response = await AddEmployee(data);
      console.log(response)
    } catch (error) {
      console.log(`Error in Receving Data ${error}`);
    }
  };


  return {
    data,
    isPending,
    handlePage,
    setFilter,
    handleSearchFilters,
    register,
    handleSubmit,
    errors,
    handleAddEmployee,
  };
};
