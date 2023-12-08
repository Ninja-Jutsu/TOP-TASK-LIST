import elementFactory from "./create-elements.js"

let i = 0;
export default function generateTaskForEachProject(){
    const tasksContainer = elementFactory('div',`tasks`,'')
    tasksContainer.setAttribute("id",`tasks${i}`);
    return tasksContainer
}


const aTask = elementFactory('div', `task${i}`, '')
const label = elementFactory('label','taskLabel',collectTaskDetails().title)
const checkbox = elementFactory('input', 'task','')
checkbox.setAttribute('type','checkbox')
checkbox.setAttribute('id',`task${i}`)
checkbox.setAttribute('name',`task${i}`)
checkbox.setAttribute('type','checkbox')
const deleteTaskBtn = elementFactory('button','delete-task','X')

aTask.appendChild(label)
aTask.appendChild(checkbox)
aTask.appendChild(deleteTaskBtn)

