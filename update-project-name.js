import { changePriorityText } from "./create-tasks.js"
import checkDueDateValidity from "./date-validity.js"
export default function updateProjectName(index){
    return document.getElementById(`para${index}`).innerText
}

export function updateTaskDetails(){
    const updateTaskBtn = document.getElementById('update-task')
    const allTaskUpdateBtn = document.getElementsByClassName('update')
    const allDueDates = document.getElementsByClassName('duedate-span')
    const allPrioritySpans = document.getElementsByClassName('priority-span')
    const allTaskLabels = document.getElementsByClassName('taskLabel')
    const allNoteKeeper = document.getElementsByClassName('note-keeper')
    
    for(let z = 0; z < allTaskUpdateBtn.length; z++){
        allTaskUpdateBtn[z].addEventListener('click', () => {
            updateTaskBtn.setAttribute('class', `update-task${z}`)
            document.getElementById('task-name').value = allTaskLabels[z].innerText
            document.getElementById('note').value = allNoteKeeper[z].innerText
            document.getElementById('due-date').value = allDueDates[z].innerText
            document.getElementById('priority').value = allPrioritySpans[z].getAttribute('alt')

            updateTaskBtn.style.display = 'block'
            document.getElementById('list-details').style.display = 'flex'
            document.getElementById('add-to-project').style.display = 'none'
        })

        updateTaskBtn.addEventListener('click', () => {
            
            updateClickedTask(z)
            updatePrioritySymbol() 
            checkDueDateValidity()
        })
    }
}

export function updateClickedTask(i){

    const updateTaskBtn = document.getElementById('update-task')
    let priorityValue = document.getElementById('priority').value
    let dateValue = document.getElementById('due-date').value
    let taskNameValue = document.getElementById('task-name').value
    let noteValue = document.getElementById('note').value
        if(updateTaskBtn.classList.contains(`update-task${i}`)){
            document.getElementById(`priority${i}`).innerText = priorityValue
            document.getElementById(`due-date${i}`).innerHTML = dateValue
            document.getElementById(`task-label${i}`).innerHTML = taskNameValue
            document.getElementById(`note${i}`).innerHTML = noteValue
            document.getElementById(`list-details`).style.display = 'none'
            updateTaskBtn.style.display = 'none'
            document.getElementById('add-to-project').style.display = 'block'
            priorityValue = ''
            dateValue = ''
            taskNameValue = ''
    }
    priorityValue = ''
    taskNameValue = ''
    dateValue = ''
    noteValue = ''
}

function updatePrioritySymbol(){
    const prioritySpan = document.getElementsByClassName('priority-span')
    for(let i = 0; i < prioritySpan.length; i++){
        prioritySpan[i].innerText = changePriorityText(prioritySpan[i].innerText, prioritySpan[i])
    }  
}
