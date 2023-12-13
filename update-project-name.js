import { changePriorityText } from "./collect-task-details.js"
export default function updateProjectName(index){
    return document.getElementById(`para${index}`).innerText
}

export function updateTaskDetails(){
    const updateTaskBtn = document.getElementById('update-task')
    const allTaskUpdateBtn = document.getElementsByClassName('update')

    console.log(0)
    for(let z = 0; z < allTaskUpdateBtn.length; z++){
    console.log(1)

        allTaskUpdateBtn[z].addEventListener('click', () => {
            updateTaskBtn.setAttribute('class', `update-task${z}`)
            updateTaskBtn.style.display = 'block'
            document.getElementById('list-details').style.display = 'flex'
        })

        updateTaskBtn.addEventListener('click', () => {
            updateClickedTask(z)
            updatePrioritySymbol()
        })
    }
}

export function updateClickedTask(i){

    const updateTaskBtn = document.getElementById('update-task')
    let priorityValue = document.getElementById('priority').value
    let dateValue = document.getElementById('due-date').value
    let taskNameValue = document.getElementById('task-name').value
        console.log(priorityValue)
        if(updateTaskBtn.classList.contains(`update-task${i}`)){
            console.log(dateValue)
            document.getElementById(`priority${i}`).innerText = priorityValue
            document.getElementById(`due-date${i}`).innerHTML = dateValue
            document.getElementById(`task-label${i}`).innerHTML = taskNameValue
            document.getElementById(`list-details`).style.display = 'none'

            priorityValue = ''
            dateValue = ''
            taskNameValue = ''
            console.log(taskNameValue)
    } 
}

function updatePrioritySymbol(){
    const prioritySpan = document.getElementsByClassName('priority-span')

    for(let i = 0; i < prioritySpan.length; i++){
        console.log('worked')
        prioritySpan[i].innerText = changePriorityText(prioritySpan[i].innerText, prioritySpan[i])
    }  
}