export default function generateDom(){
    let tasksArray = []
    const createBtn = document.getElementById('create-list')
    const newListName = document.getElementById('list-name')
    const projectsContainer = document.getElementById('projects')
    const main = document.getElementById('main')
    console.log("ISMAIL")
    createBtn.addEventListener('click', () => {
        tasksArray.push(newListName.value)

        for (let i = 0; i < tasksArray.length; i++){
            const project = document.createElement('div')
            project.classList.add(`project${i}`)
            const projectHeader = document.createElement('h1')
            projectHeader.innerText = tasksArray[i]
            const deleteProject = document.createElement('button')
            deleteProject.classList.add(`delete-project${i}`)
            deleteProject.innerText = 'X'

            project.appendChild(projectHeader)
            project.appendChild(deleteProject)
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