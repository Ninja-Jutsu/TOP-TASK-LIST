import generateDomForMainScreen, {toggleBtnClass, addIdToBoxContainersAndDltBtns}from "./generate-cards.js"
import displayListMaker, { hideListMaker, displayTaskDetailsForm, hideProjectsContainer, hideTaskDetailsForm } from "./display-popups.js"
import collectTaskDetails, {createElementsWithGivenInputsThenAppend} from "./create-tasks.js"
import deleteSelectedTaskFromTasksList, { deleteWholeProject, emptyFillInputs } from "./deletions.js"
import { updateTaskDetails} from "./update-project-name.js"
import changeMode from "./mode-changer.js"
import checkDueDateValidity, {checkExpiredTasksAtLaunch} from "./date-validity.js"

//+ Check expired tasks at launch:
const allDueDate = document.getElementsByClassName('duedate-span')
if(allDueDate.length > 0){
    alert(checkExpiredTasksAtLaunch(allDueDate))
}

//+ Display newList generator:
const addBtn = document.getElementById('add-new-list')
addBtn.addEventListener('click', () => {
    displayListMaker()
})

//+ Generate newList:
const createBoxBtn = document.getElementById('create-list')
const cancelCreateBoxBtn = document.getElementById('cancel-box-creation')

createBoxBtn.addEventListener('click', () => {
    const mainScreen = document.getElementById('main-screen')
    const listNameInput = document.getElementById('list-name')

    mainScreen.appendChild(generateDomForMainScreen(listNameInput.value))

    addIdToBoxContainersAndDltBtns()

    hideListMaker()

    listNameInput.value = ''

    deleteWholeProject()

    toggleBtnClass()
})

cancelCreateBoxBtn.addEventListener('click', hideListMaker)


//+ Display Task Details form:
const addTaskBtn = document.getElementById('add-task')
addTaskBtn.addEventListener("click", () => {
    let priority = document.getElementById('priority')
    let date = document.getElementById('due-date')
    let taskName = document.getElementById('task-name')
    let note = document.getElementById('note')
    priority.value = 'low'
    date.value = ''
    taskName.value = ''
    note.value = ''
    displayTaskDetailsForm()
})

//+ CREATE INDIVIDUAL TASKS DIV:
// const addNewTaskBtn = document.getElementById('add-task')
// addNewTaskBtn.addEventListener('click',createTasksDiv)

const appendToTasksBtn = document.getElementById('add-to-project')
appendToTasksBtn.addEventListener('click', () => {
    createElementsWithGivenInputsThenAppend(collectTaskDetails());
    hideTaskDetailsForm()
    deleteSelectedTaskFromTasksList()
    emptyFillInputs()
    updateTaskDetails()
    checkDueDateValidity()
})

const hideListsBtn = document.getElementById('hide-tasks')
hideListsBtn.addEventListener('click', hideProjectsContainer)

//! let's see later.
// const mainScreen =  document.getElementById('main-screen')
// mainScreen.addEventListener('click', hideProjectsContainer)

document.getElementById('cancel-fill').addEventListener('click', ()=>{
    hideTaskDetailsForm()
    emptyFillInputs()
})

changeMode()


document.getElementById('cancel-fill').addEventListener('click',() => {
    document.getElementById('add-to-project').style.display = 'block'
    document.getElementById('update-task').style.display = 'none'
})
