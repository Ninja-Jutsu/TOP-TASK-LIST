import generateDomForMainScreen, {toggleBtnClass,shuffleIds, addIdToBoxContainersAndDltBtns}from "./generate-cards.js"
import displayListMaker, { hideListMaker, displayTaskDetailsForm, hideProjectsContainer, hideTaskDetailsForm } from "./display-popups.js"
import collectTaskDetails, {changePriorityText, createElementsWithGivenInputsThenAppend} from "./collect-task-details.js"
import deleteSelectedTaskFromTasksList, { deleteWholeProject, emptyFillInputs } from "./delete-one-task.js"
import { updateTaskDetails, updateClickedTask } from "./update-project-name.js"





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
