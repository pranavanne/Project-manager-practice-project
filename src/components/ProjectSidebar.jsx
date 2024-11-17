import CreateProjectButton from "./CreatProjectButton";

export default function  ProjectsSidebar({projectsData, onStartNewProject, handleSelectProject, selectedProjectId}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <CreateProjectButton onClick={onStartNewProject}></CreateProjectButton>
            </div>
            <ul className="mt-8">
                {projectsData.projects.map((item) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

                    if(projectsData.id === selectedProjectId) {
                        cssClasses += " bg-stone-800 text-stone-200";
                    }
                    else{
                        cssClasses += " text-stone-400"
                    }
                    return (
                        <li key={item.id}>
                            <button onClick={() => handleSelectProject(item.id)} className={cssClasses}>
                                {item.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}