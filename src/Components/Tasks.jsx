import NewTasks from "./NewTasks";

export default function Tasks({ onAdd, onDelete, tasks }) {
    //console.log(tasks)
  return (
    <section>
      <h2 className="text-3xl font-bold text-stone-700 mb-4"></h2>
      nnnnnn
      <NewTasks onDelete={onDelete} onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className=" mt-4 text-stone-800  mb-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.Id} className="flex justify-between my-3">
              <span>{task.text}</span>
              <button onClick={()=>onDelete(task.Id)} className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
