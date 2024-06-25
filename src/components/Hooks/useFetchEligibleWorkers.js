import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const fetchEligibleWorkers = async ({ queryKey }) => {
  const [_, category] = queryKey;
  const apiUrl = process.env.REACT_APP_API_URL;

  const response = await api.get(`/nom_results/${category}`);
  return response.data;
};

const useFetchEligibleWorkers = (category) => {
  return useQuery({
    queryKey: ["eligibleWorkers", category],
    queryFn: fetchEligibleWorkers,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    enabled: !!category, // Only fetch if category is provided
  });
};

export default useFetchEligibleWorkers;
