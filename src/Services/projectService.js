import http from "./httpService";

export function getOwnerProjectsAPi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
