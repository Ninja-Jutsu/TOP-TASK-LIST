export default function generateDom(){
    let tasksArray = []
    const createBtn = document.getElementById('create-list')
    const newListName = document.getElementById('list-name')
    const projectsContainer = document.getElementById('projects')
    console.log("ISMAIL")
    createBtn.addEventListener('click', () => {
        tasksArray.push(newListName.value)
        for (i = 0; i < tasksArray.length; i++){
            const project = document.createElement('div')
            project.classList.add(`project${i}`)
            const projectHeader = document.createElement('h1')
            projectHeader.innerText = tasksArray[i]
            const deleteProject = document.createElement('button')
            deleteProject.classList.add(`delete-project${i}`)
            deleteProject.innerText = 'X'

            project.appendChild(projectHeader)
            project.appendChild(deleteProject)
        }
    })
}