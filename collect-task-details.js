import elementFactory from "./create-elements.js";
import tasksFactory from "./project-class.js";
export default function collectTaskDetails(){
    const taskName = document.getElementById('task-name')
    const description = document.getElementById('note')
    const date = document.getElementById('due-date')
    const priority = document.getElementById('priority')

    let taskMaker = tasksFactory(
        taskName.value,
         description.value,
          date.value,
           priority.value )
    let task = taskMaker.obj()
    return task
}


export function createTasksDiv(){
    const Alist = document.getElementById('project')
    const addNewTaskBtn = document.getElementById('add-task')
    const allTasksDivs = document.getElementsByClassName('tasks')
    for (let i= 0; i< 9; i++){
        if (addNewTaskBtn.classList.contains(`add-task${i}`)){
                const tasks = elementFactory('div', `tasks`,'')
                tasks.setAttribute('id',`tasks${i}`)
                Alist.appendChild(tasks)
        }
    }
}

export function createElementsWithGivenInputsThenAppend(obj){
    const appendToTasksBtn = document.getElementById('add-to-project')
    for( let i = 0; i < 9; i++){
        if (appendToTasksBtn.classList.contains(`add-to-list${i}`)){
            const addNewTaskBtn = document.getElementById(`tasks${i}`)
            const taskDiv = elementFactory('div',`task`,'')
            const taskLabel = elementFactory('label',`taskLabel`,obj.title)
            const checkbox = elementFactory('input', 'checkbox','')
            checkbox.setAttribute('id',`task${i}`)
            checkbox.setAttribute('name',`task${i}`)
            checkbox.setAttribute('type',`checkbox`)
            const taskBtn = elementFactory('button', `delete-task${i}`,'X')
        
            taskDiv.appendChild(taskLabel)
            taskDiv.appendChild(checkbox)
            taskDiv.appendChild(taskBtn)
            addNewTaskBtn.appendChild(taskDiv)
        }}
}