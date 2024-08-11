import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsAPi } from "../../Services/projectService";

export default function useOwnerProjects() {
  return useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsAPi,
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
