import elementFactory from "./create-elements.js"
import {displayProjectsContainer} from "./display-popups.js"
import updateProjectName from "./update-project-name.js";

let counter = 0;
export default function generateDomForMainScreen(ProjectName){
    //+ Create Project:
    const boxContainer = elementFactory('div','box-container','')
    const box = elementFactory('div','box','')
    const dltBtn = elementFactory('button',`dltBtn` ,'X')
    dltBtn.setAttribute('id',`dltBtn${counter}`)
    const para = elementFactory('p',`para`,ProjectName)
    //+ Create its tasks:
    const tasks = elementFactory('div','tasks','')
    const tasksContainer = document.getElementById('project')
    tasksContainer.appendChild(tasks)

    box.appendChild(para)
    boxContainer.appendChild(dltBtn)
    boxContainer.appendChild(box)
    
    box.addEventListener('click',() => {
        shuffleIds()
        toggleBtnClass()
        //+ DISPLAY LISTS:
        displayProjectsContainer()
        //+ Generate All Task Lists:
        generateTasksLists()
    })
    counter++
    return boxContainer
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
            projectTitle.innerText = updateProjectName(i) //!

            for(let Y = 0; Y < boxes.length; Y++){
                document.getElementById(`tasks${Y}`).style.display = 'none'
            }
            document.getElementById(`tasks${i}`).style.display =  'flex';
        })
    }
}

export function addIdToBoxContainersAndDltBtns(){

    //+ add a unique id to every dltBtn + every boxContainer
    const deleteContainerBtn = document.getElementsByClassName('dltBtn')
    const allContainers = document.getElementsByClassName('box-container')
    const allBoxes = document.getElementsByClassName('box')
    const allParagraphs = document.getElementsByClassName('para')

    for ( let z = 0; z < allContainers.length ; z++){
        if (allContainers[z].getAttribute('id') !== `box-container${z}`){
            allContainers[z].setAttribute('id',`box-container${z}`)
        }
        if (deleteContainerBtn[z].getAttribute('id') !== `dltBtn${z}`){
            deleteContainerBtn[z].setAttribute('id',`dltBtn${z}`)
        }
        if (allParagraphs[z].getAttribute('id') !== `para${z}`){
            allParagraphs[z].setAttribute('id',`para${z}`)
        }
        if (allBoxes[z].getAttribute('id') !== `box${z}`){
            allBoxes[z].setAttribute('id',`box${z}`)
        }
    }
}

export function generateTasksLists(){
    const projectsContainer = document.getElementById('project')
    const AllBoxes = document.getElementsByClassName('box')
    const allTasksDivs = document.getElementsByClassName('tasks')

    for (let i = 0; i < AllBoxes.length; i++){
        //+ CREATE ALL TASKS DIVS:
        if (!allTasksDivs.length){
            for (let i = 0; i < AllBoxes.length; i++){
                const tasks = elementFactory('div', `tasks`,'')
                tasks.classList.add(`tasks${i}`)
                tasks.setAttribute('id',`tasks${i}`)    
                projectsContainer.appendChild(tasks)
                console.log('REGENERATION 1')
            }
        }
        //+ CREATE TASKS DIVS THAT DON'T EXIST ALREADY:
        else if (AllBoxes[i].getAttribute('id') === `box${i}` && allTasksDivs.length < (i+1)){
            const tasks = elementFactory('div', `tasks`,'')
            tasks.classList.add(`tasks${i}`)
            tasks.setAttribute('id',`tasks${i}`)    
            projectsContainer.appendChild(tasks)  
            console.log('REGENERATION 2')
        }

        //+ REASSIGN THEIR IDs:

    }
}

export function shuffleIds(){
    const allTasksDivs = document.getElementsByClassName('tasks')
    const boxes = document.getElementsByClassName('box')
    const dltBtns = document.getElementsByClassName('dltBtn')
    const boxContainers = document.getElementsByClassName('box-container')
    for (let z = 0; z < allTasksDivs.length; z++){
        allTasksDivs[z].setAttribute('id',`tasks${z}`) 
        boxes[z].setAttribute('id',`box${z}`) 
        dltBtns[z].setAttribute('id',`dltBtn${z}`)
        boxContainers[z].setAttribute('id',`box-container${z}`)
        console.log('RESHAFLE')
    }
}
