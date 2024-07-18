import Button from "./Button";
import noProjectImage from '../assets/no-projects.png'

export default function NoProjectSelected({OnStartProjectApp}){
    return(
        <div className="mt-24 text-center w-2/3">
        <img className="w-16 h-16 object-contain mx-auto" src={noProjectImage} alt="an empty task list"/>
        <h2 className="text-stone-500 my-4 font-bold text-xl">No Project Is Selected!</h2>
        <p className="text-stone-400 mb-4">Please select or create a project...</p>
        <p>
            <Button onClick={OnStartProjectApp}>Create Project</Button>
        </p>
        </div>
    )
}