import elementFactory from "./create-elements.js"
import displayListMaker, { hideListMaker, displayProjectsContainer, hideProjectsContainer } from "./display-popups.js"
import updateProjectName from "./update-project-name.js";
let counter = 0;
export default function generateDomForMainScreen(ProjectName){
    const box = elementFactory('div','box','')
    box.classList.add(`box${counter}`)
    const dltBtn = elementFactory('button','dltBtn' ,'X')
    const para = elementFactory('p',`para${counter}`,ProjectName)
    box.appendChild(dltBtn)
    box.appendChild(para)

    box.addEventListener('click',() => {
        //+ DISPLAY LISTS:
        displayProjectsContainer()
    })

    counter++
    return box
}

export function toggleBtnClass(){
    let boxes = document.getElementsByClassName('box')
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', ()=>{
            const addToList = document.getElementById('add-to-project')
            addToList.setAttribute('class',`add-to-list${i}`)
            const addNewTaskBtn = document.getElementById('add-task')
            addNewTaskBtn.setAttribute("class",`add-task${i}`)

            const projectTitle = document.getElementById('project-title')
            projectTitle.innerText = updateProjectName(i)

            const allTasks = document.getElementsByClassName('tasks')
            for(let i = 0; i < allTasks.length; i++){
                allTasks[i].style.display = 'none'
            }
            document.getElementById(`tasks${i}`).style.display =  'flex';
        })
    }
}