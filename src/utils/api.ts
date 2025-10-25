import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getCategories = async (): Promise<string[]> => {
  const response = await api.get<string[]>("/products/categories");
  return response.data;
};
