import exitProject from "./exit-project.js"
import exitAllProject from "./exit-all-projects.js"
import addTaskToProject from "./add-task-to-project.js"
export default function fillProjectDetails(){
    const boxes = document.getElementsByClassName('box')
    const projects = document.getElementsByClassName('project')
    const projectsContainer = document.getElementById('projects')
    
    for ( let i= 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', () => {
            exitAllProject()
            console.log(projectsContainer.style.display)
            projectsContainer.style.display = 'flex'
            projects[i].style.display = 'grid'
            addTaskToProject()
        })
    }
    exitProject()
    
}