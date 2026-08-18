import { useQuery } from "@tanstack/react-query";
import { employeeApi } from "../api/api";

export const useEmployee = () => {
  const { data, isPending } = useQuery({
    queryKey: ["employee"],
    queryFn: employeeApi,
  });

  return {
    data,
    isPending
  }
};
