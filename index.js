import generateDomForMainScreen, {toggleBtnClass}from "./generate-cards.js"
import displayListMaker, { hideListMaker } from "./display-list-maker.js"
import displayProjectsContainer from "./display-projects-container.js"


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
    toggleBtnClass(listNameInput.value)
    listNameInput.value = ''
})

cancelCreateBoxBtn.addEventListener('click', hideListMaker)

//+ Collect Task Details:
const addToListsBtn = document.getElementById('add-to-project')
addToListsBtn.addEventListener()








