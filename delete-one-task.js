import { hideProjectsContainer } from "./display-popups.js"
import { addIdToBoxContainersAndDltBtns, toggleBtnClass } from "./generate-cards.js"
export default function deleteSelectedTaskFromTasksList(){
    const allDeleteTaskBtns = document.getElementsByClassName('delete-task')
    for (let i = 0; i < allDeleteTaskBtns.length; i++){
        const deleteTask = document.getElementById(`delete-task${i}`)
        const oneTask = document.getElementById(`task${i}`)
        deleteTask.addEventListener('click', () => {
            oneTask.remove()
        })
    }
}

export function deleteWholeProject(){
    const deleteBoxAndTasksBtn = document.getElementsByClassName(`dltBtn`)
    for (let i = 0; i < deleteBoxAndTasksBtn.length; i++){
        const deleteTask = document.getElementById(`dltBtn${i}`)
        const oneContainer = document.getElementById(`box-container${i}`)
        const oneTasksList = document.getElementById(`tasks${i}`)
        deleteTask.addEventListener('click', () => {
            oneContainer.style.display = 'none'
            oneTasksList.style.display = 'none'
            hideProjectsContainer()
        })
    }
}

export function emptyFillInputs(){
    document.getElementById('task-name').value = ''
    document.getElementById('note').value = ''
    document.getElementById('priority').value = 'high'
    document.getElementById('due-date').value = new Date()
}


