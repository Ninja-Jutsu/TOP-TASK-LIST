import elementFactory from "./create-elements.js"
import displayListMaker, { hideListMaker, displayProjectsContainer, hideProjectsContainer } from "./display-popups.js"
import updateProjectName from "./update-project-name.js";

let counter = 0;
let anotherCounter = 0
export default function generateDomForMainScreen(ProjectName){
    const boxContainer = elementFactory('div','box-container','')
    // boxContainer.setAttribute('id', `box-container${counter}`)
    const box = elementFactory('div','box','')
    // box.classList.add(`box${counter}`)
    const dltBtn = elementFactory('button',`dltBtn` ,'X')
    dltBtn.setAttribute('id',`dltBtn${counter}`)
    const para = elementFactory('p',`para`,ProjectName)

    box.appendChild(para)
    boxContainer.appendChild(dltBtn)
    boxContainer.appendChild(box)
    
    box.addEventListener('click',() => {
        //+ DISPLAY LISTS:
        console.log(`counter: ${anotherCounter}`)
        displayProjectsContainer()
        generateTasksLists(anotherCounter)

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
    let counter = 0
    console.log('TASKS GENERETAED 0')
    const projectsContainer = document.getElementById('project')
    const AllBoxes = document.getElementsByClassName('box')
    const allTasksDivs = document.getElementsByClassName('tasks')
    console.log(allTasksDivs.length)

    for (let i = 0; i < AllBoxes.length; i++){
        if (anotherCounter === 0 ){
            for (let i = 0; i < AllBoxes.length; i++){
                const tasks = elementFactory('div', `tasks`,'')
                tasks.classList.add(`tasks${i}`)
                tasks.setAttribute('id',`tasks${i}`)    
                projectsContainer.appendChild(tasks)   
                console.log('TASKS GENERETAED 1')
            }
        anotherCounter++
        }
        else if (AllBoxes[i].getAttribute('id') === `box${i}` && allTasksDivs.length < (i+1)){
            const tasks = elementFactory('div', `tasks`,'')
            tasks.classList.add(`tasks${i}`)
            tasks.setAttribute('id',`tasks${i}`)    
            projectsContainer.appendChild(tasks)   
            console.log('TASKS GENERETAED 2')      
        }
        console.log('TASKS GENERETAED 3')
    }
}