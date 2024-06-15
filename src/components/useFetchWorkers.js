import { useQuery } from "@tanstack/react-query";

const fetchWorkers = async ({ queryKey }) => {
  const [_, category] = queryKey;
  const apiUrl = process.env.REACT_APP_API_URL;

  // Ensure the URL is correctly formed
  const response = await fetch(`${apiUrl}/workers/by-category/${category}`);

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Failed to fetch workers: ${response.statusText} - ${text}`
    );
  }

  const data = await response.json();
  return data;
};

const useFetchWorkers = (category) => {
  return useQuery({
    queryKey: ["workers", category],
    queryFn: fetchWorkers,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000,//10 minutes
    enabled: !!category,  // Only fetch if category is provided
  });
};

export default useFetchWorkers;
