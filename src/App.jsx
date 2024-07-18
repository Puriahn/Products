import { useState } from "react";

import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectsSideBar";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleDeleteTask(id) {
    setProjectState((pp) => {
      return {
        ...pp,
        tasks: pp.tasks.filter((p) => p.Id !== id),
      };
    });
  }

  function handleAddTask(text) {
    setProjectState((pp) => {
      const taskRandomId = Math.random();
      const newTask = {
        text: text,
        projectId: pp.selectedProjectId,
        Id: taskRandomId,
      };
      console.log(newTask);
      return {
        ...pp,
        tasks: [newTask, ...pp.tasks],
      };
    });
  }

  function handleDelet() {
    setProjectState((pp) => {
      return {
        ...pp,
        selectedProjectId: undefined,
        projects: pp.projects.filter((p) => p.Id !== pp.selectedProjectId),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((pp) => {
      return {
        ...pp,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((pp) => {
      return {
        ...pp,
        selectedProjectId: null,
      };
    });
  }

  function handleSave(projectId) {
    setProjectState((pp) => {
      const projectRandomId = Math.random();
      const newProject = {
        ...projectId,
        Id: projectRandomId,
      };
      return {
        ...pp,
        selectedProjectId: undefined,
        projects: [...pp.projects, newProject],
      };
    });
  }
  function handleCancel() {
    setProjectState((pp) => {
      return {
        ...pp,
        selectedProjectId: undefined,
      };
    });
  }
  const selectedProject = projectState.projects.find(
    (project) => project.Id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      onAdd={handleAddTask}
      onDeleteTask={handleDeleteTask}
      project={selectedProject}
      onDelete={handleDelet}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected OnStartProjectApp={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onSave={handleSave} onCancel={handleCancel} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onSelectProject={handleSelectProject}
          OnStartProjectApp={handleStartAddProject}
          projects={projectState.projects}
          selectedProjectId={projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
