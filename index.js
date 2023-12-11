import generateDomForMainScreen, {toggleBtnClass}from "./generate-cards.js"
import displayListMaker, { hideListMaker, displayTaskDetailsForm, hideProjectsContainer, hideTaskDetailsForm } from "./display-popups.js"
import collectTaskDetails, {createTasksDiv, createElementsWithGivenInputsThenAppend} from "./collect-task-details.js"
import deleteSelectedTaskFromTasksList from "./delete-one-task.js"


//+ Display newList generator:
const addBtn = document.getElementById('add-new-list')
addBtn.addEventListener('click',displayListMaker)

//+ Generate newList:
const createBoxBtn = document.getElementById('create-list')
const cancelCreateBoxBtn = document.getElementById('cancel-box-creation')

createBoxBtn.addEventListener('click', () => {
    const mainScreen = document.getElementById('main-screen')
    const listNameInput = document.getElementById('list-name')

    mainScreen.appendChild(generateDomForMainScreen(listNameInput.value))
    toggleBtnClass()
    hideListMaker()
    listNameInput.value = ''
})

cancelCreateBoxBtn.addEventListener('click', hideListMaker)


//+ Display Task Details form:
const addTaskBtn = document.getElementById('add-task')
addTaskBtn.addEventListener("click", () => {
    displayTaskDetailsForm()
})

//+ CREATE INDIVIDUAL TASKS DIV:
const addNewTaskBtn = document.getElementById('add-task')
addNewTaskBtn.addEventListener('click',createTasksDiv)

const appendToTasksBtn = document.getElementById('add-to-project')
appendToTasksBtn.addEventListener('click', () => {
    createElementsWithGivenInputsThenAppend(collectTaskDetails());
    hideTaskDetailsForm()
    deleteSelectedTaskFromTasksList()
})





