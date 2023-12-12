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

        deleteTask.addEventListener('click', () => {
            oneContainer.remove()
            deleteWholeList()
            hideProjectsContainer()
            addIdToBoxContainersAndDltBtns()
            toggleBtnClass()
        })
    }
}

export function deleteWholeList(){
    const allBoxes = document.getElementsByClassName('box')
    for (let i = 0; i < allBoxes.length; i++){
        if(allBoxes[i].getAttribute('id') !== `box${i}`){
            document.getElementById(`tasks${i}`).remove()
        }
    }
}

