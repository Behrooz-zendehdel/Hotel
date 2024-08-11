import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loader from "../../UI/Loader";
import Empty from "../../UI/Empty";
function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  //   if (isLoading) return <Loader />;
  // if (!projects?.length) return <Empty resourceName="پروژه" />;
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی پروژه </th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.category.title}</td>
              <td>{project.budget}</td>
              <td>{project.deadline}</td>
              <td className="flex flex-wrap items-center gap-2 max-w-2-[200px]">
                {project.tags.map((tag) => (
                  <span className="badge badge--secondary" key={tag}>
                    {tag}
                  </span>
                ))}
              </td>
              <td>{project.freelancer?.name || "_"}</td>
              <td>
                {project.status === "open" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span>بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
