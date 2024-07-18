import Button from "./Button";
export default function ProjectSidebar({
  onSelectProject,
  OnStartProjectApp,
  projects,
  selectedProjectId,
}) {
  //console.log(projects);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={OnStartProjectApp}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let css =
            "w-full text-left px-2 py-1.5 rounded-xl my-1 text-stone-400 hover:bg-stone-800 hover:text-stone-200";
          if (project.Id === selectedProjectId) {
            css += " bg-stone-800 text-stone-200";
          } else {
            css += " text-stone-200";
          }
          return (
            <li key={project.Id}>
              <button onClick={()=>onSelectProject(project.Id)} className={css}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
