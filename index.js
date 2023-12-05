import generateDom from "./dom.js"
// import fillProjectDetails from "./project-fill.js"

const addBtn = document.getElementById('add-new-list')
const newList = document.getElementById('new-list')
addBtn.addEventListener('click', () => {
    newList.style.display = 'flex'
})

generateDom()
// fillProjectDetails()