import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "../../api";

const fetchCollegeResults = async ({ queryKey }) => {
  const [_, category] = queryKey;
  const { data } = await api.get(`/results`);
  return data;
};

const fetchUniversityResults = async () => {
  const { data } = await api.get(`/results`);
  return data;
};
export const useCollegeResults = (enabled) => {
  return useQuery({
    queryKey: ["collegeResults"],
    queryFn: fetchCollegeResults,
    enabled,
  });
};

export const useUniversityResults = (enabled) => {
  return useQuery({
    queryKey: ["universityResults"],
    queryFn: fetchUniversityResults,
    enabled,
  });
};
