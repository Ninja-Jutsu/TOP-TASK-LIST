import { hideProjectsContainer } from "./display-popups.js"
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
        deleteTask.addEventListener('click', () => {
            document.getElementById('delete-verification').style.display = 'flex'
            document.getElementById('yes').setAttribute('class',`yes${i}`)
            deleteProjectDefinitely()
        })
    }
}

export function emptyFillInputs(){
    document.getElementById('task-name').value = ''
    document.getElementById('note').value = ''
    document.getElementById('priority').value = 'high'
    document.getElementById('due-date').value = new Date()
}

export function deleteProjectDefinitely(){
    const allBoxes = document.getElementsByClassName('box');
    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
    const allTasks = document.getElementsByClassName('Atask')

    console.log(allBoxes.length)
    yesBtn.addEventListener('click', () => {
        for (let i = 0; i < allBoxes.length; i++){
            if(yesBtn.classList.contains(`yes${i}`)){
                console.log('worked')
                document.getElementById(`box-container${i}`).style.display = 'none'
                if (allTasks.length > 0){
                    document.getElementById(`tasks${i}`).style.display = 'none'
                }
                document.getElementById('delete-verification').style.display = 'none'
                hideProjectsContainer()
            }
        }
    })
    noBtn.addEventListener('click', () => {
        document.getElementById('delete-verification').style.display = 'none'
    })
    
}
