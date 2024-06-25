import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const fetchWorkers = async ({ queryKey }) => {
  const [_, category] = queryKey;
  const apiUrl = process.env.REACT_APP_API_URL;

  // Ensure the URL is correctly formed
  try {
    const response = await api.get(`/workers/by-category/${category}`);
    return response.data;
  } catch (error) {
    const errorMessage = error.response
      ? `${error.response.statusText} - ${error.response.data}`
      : error.message;
    throw new Error(`Failed to fetch workers: ${errorMessage}`);
  }
};

const useFetchWorkers = (category) => {
  return useQuery({
    queryKey: ["workers", category],
    queryFn: fetchWorkers,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, //10 minutes
    enabled: !!category, // Only fetch if category is provided
  });
};

export default useFetchWorkers;
