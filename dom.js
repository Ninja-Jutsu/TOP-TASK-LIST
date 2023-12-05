export default function generateDom(){
    let tasksArray = []
    const createBtn = document.getElementById('create-list')
    const newListName = document.getElementById('list-name')
    const projectsContainer = document.getElementById('projects')
    const main = document.getElementById('main')
    createBtn.addEventListener('click', () => {
        tasksArray.push(newListName.value)

        for (let i = 0; i < tasksArray.length; i++){
            const project = document.createElement('div')
            project.classList.add('project')
            const projectHeader = document.createElement('div')
            projectHeader.classList.add('project-header')
            projectHeader.innerText = tasksArray[i]
            const projectTitle = document.createElement('h1')
            projectTitle.classList.add('project-title')
            const deleteProject = document.createElement('button')
            deleteProject.classList.add(`exit-project${i}`)
            deleteProject.classList.add('exit-project')
            deleteProject.innerText = 'X'
            const addTask = document.createElement('button')
            addTask.classList.add('add-task')
            addTask.classList.add(`add-task${i}`)
            addTask.innerText = 'ADD TASK'

            projectHeader.appendChild(projectTitle)
            projectHeader.appendChild(deleteProject)
            project.appendChild(projectHeader)
            project.appendChild(addTask)
            projectsContainer.appendChild(project)
        }
        for (let i = 0; i < tasksArray.length; i++){
            const card = document.createElement('div')
            card.classList.add(`box${i}`)
            card.classList.add('box')
            const dltBtn = document.createElement('button')
            dltBtn.innerText = 'X'
            const para = document.createElement('p')
            para.innerText = tasksArray[i]

            card.appendChild(dltBtn)
            card.appendChild(para)
            main.appendChild(card)
        }
        tasksArray = []
        newListName.value = ''

        const newList = document.getElementById('new-list')
        newList.style.display = 'none'
    })
}