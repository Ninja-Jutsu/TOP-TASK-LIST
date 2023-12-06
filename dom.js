import elementFactory from "./create-elements.js"
import fillProjectDetails from "./fill-project.js"
export default function generateDom(){
    let tasksArray = []
    const createBtn = document.getElementById('create-list')
    const cancelBtn = document.getElementById('cancel')
    const newList = document.getElementById('new-list')
    const newListName = document.getElementById('list-name')
    const projectsContainer = document.getElementById('projects')
    const main = document.getElementById('main')
    createBtn.addEventListener('click', () => {
        tasksArray.push(newListName.value)
        
    //! Generate DOM for main screen
    for (let i = 0; i < tasksArray.length; i++){
        const card = elementFactory('div','box','')
        // card.classList.add(`box${i}`)
        const dltBtn = elementFactory('button','dltBtn' ,'X')
        const para = elementFactory('p','para',tasksArray[i])
        card.appendChild(dltBtn)
        card.appendChild(para)
        main.appendChild(card)
    }
    //! Generate Add task Window
        for (let i = 0; i < tasksArray.length; i++){
            const project = elementFactory('div','project','')
            // project.classList.add(`project${i}`)
            const projectHeader = elementFactory('div','project-header','')
            const projectTitle = elementFactory('h2','project-title',tasksArray[i])
            const deleteProject = elementFactory('button','exit-project','X')
            // deleteProject.classList.add(`exit-project${i}`)
            const tasks = elementFactory('div','tasks','')
            const addTask = elementFactory('button','add-task','ADD TASK')
            // addTask.classList.add(`add-task${i}`)

            projectHeader.appendChild(projectTitle)
            projectHeader.appendChild(deleteProject)
            project.appendChild(projectHeader)
            project.appendChild(tasks)
            project.appendChild(addTask)
            projectsContainer.appendChild(project)
        }
    
        tasksArray = []
        newListName.value = ''
        fillProjectDetails()
        
        newList.style.display = 'none'
    })
    cancelBtn.addEventListener('click', () => {
        newList.style.display = 'none'
    })
}