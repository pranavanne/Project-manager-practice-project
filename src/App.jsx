import ProjectsSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({selectedProject: undefined, projects: []});
  console.log(projectsState)

  function handleStartNewProject() {
    setProjectsState((prev) => {
      return {...prev, selectedProject: null};
    })
  }

  function handelAddProject(projectData) {
    setProjectsState((prev) => {
      const newProject= {...projectData, id: Math.random()}
      return {...prev,selectedProject: undefined, projects: [...prev.projects,newProject ] }
    })
  }

  function handleCancelProject() {
    setProjectsState((prev) => {
      return {...prev, selectedProject: undefined}
    })
  }

  function handleSelectProject(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProject: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: prev.projects.filter((project) => {return project.id !== prev.selectedProject})
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject)
  let content = <SelectedProject projectData={selectedProject} handleDeleteProject={handleDeleteProject}></SelectedProject>;
  if (projectsState.selectedProject === null) {
    content = <NewProject handleAddProject={handelAddProject} handleCancelProject={handleCancelProject}></NewProject>
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartNewProject={handleStartNewProject}></NoProjectSelected>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar handleSelectProject={handleSelectProject} projectsData={projectsState} onStartNewProject={handleStartNewProject} selectedProjectId={selectedProject}></ProjectsSidebar>
      {content}
    </main>
  );
}

export default App;
