import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../utils/api";

export const useCategories = () => {
  return useQuery<string[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
