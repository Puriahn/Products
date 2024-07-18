import Tasks from "./Tasks";

export default function SelectedProject({ tasks,project,onDelete,onAdd,onDeleteTask }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-500 mb-2">
            {project.title}
          </h1>
          <button onClick={onDelete} className="text-stone-600 rounded-md hover:text-stone-200 p-2 hover:bg-stone-900">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="whitespace-pre-wrap text-stone-650">{project.description}</p>
      </header>
      <Tasks onAdd={onAdd} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  );
}
