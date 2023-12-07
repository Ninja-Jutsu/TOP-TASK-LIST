import generateDomForMainScreen from "./generate-cards.js"
import displayListMaker, { hideListMaker } from "./display-list-maker.js"
import displayProjectsContainer from "./display-projects-container.js"
let counter = 1;

//+ Display newList generator:
const addBtn = document.getElementById('add-new-list')
addBtn.addEventListener('click',displayListMaker)

//+ Generate newList:
const createBoxBtn = document.getElementById('create-list')
const cancelCreateBoxBtn = document.getElementById('cancel-box-creation')
createBoxBtn.addEventListener('click', () => {
    const mainScreen = document.getElementById('main-screen')
    const listNameInput = document.getElementById('list-name')

    mainScreen.appendChild(generateDomForMainScreen(listNameInput.value, counter))
    listNameInput.value = ''
})
cancelCreateBoxBtn.addEventListener('click', hideListMaker)

//+ Collect Task Details:
const addToListsBtn = document.getElementById('add-to-project')
addToListsBtn.addEventListener()








console.log(counter)
counter++


