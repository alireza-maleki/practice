import axios from "axios";
import { useQuery } from "react-query";

export const useGetData = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(["cat"], async () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const showAlert = () => {
    alert("Fetching Data ... ");
    refetch();
  };

  return { data, isLoading, isError, error, showAlert };
};
