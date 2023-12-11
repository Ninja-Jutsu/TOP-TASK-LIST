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
            Alist.insertBefore(tasks, Alist.children[1])
            if (allTasksDivs[i].classList.contains(`tasks${i}`) != true){
                tasks.classList.add(`tasks${i}`)
                tasks.setAttribute('id',`tasks${i}`)
            }              
        }
    }
    //+ REMOVE EXTRA TASKS(UNUSED):
    for (let i = 0; i < allTasksDivs.length; i++){
        if(!allTasksDivs[i].classList.contains(`tasks${i}`)){
            allTasksDivs[i].remove()
        }
    }
}

export function createElementsWithGivenInputsThenAppend(obj){
    const appendToTasksBtn = document.getElementById('add-to-project')
    for( let i = 0; i < 9; i++){
        if (appendToTasksBtn.classList.contains(`add-to-list${i}`)){
            const tasksList = document.getElementById(`tasks${i}`)
            const taskDiv = elementFactory('div',`task${i}`,'')
            taskDiv.classList.add('Atask')
            const taskLabel = elementFactory('label',`taskLabel`,obj.title)
            const checkbox = elementFactory('input', 'checkbox','')

            checkbox.setAttribute('type',`checkbox`)
            const taskBtn = elementFactory('button', `delete-task`,'X')
            taskDiv.appendChild(taskLabel)
            taskDiv.appendChild(checkbox)
            taskDiv.appendChild(taskBtn)
            tasksList.appendChild(taskDiv)

            // tasksList.firstChild.setAttribute('id',`task${i}`)

            //+ Add a unique ID to every delete btn + to every task
            const deleteTaskBtns = document.getElementsByClassName('delete-task')
            const Atask = document.getElementsByClassName('Atask')
            console.log(Atask.length)
            for ( let z = 0; z < Atask.length ; z++){
                if (Atask[z].getAttribute('id') !== `task${z}`){
                    Atask[z].setAttribute('id',`task${z}`)
                }
                if (deleteTaskBtns[z].getAttribute('id') !== `delete-task${z}`){
                    deleteTaskBtns[z].setAttribute('id',`delete-task${z}`)
                }
            }
        }
    }
}

