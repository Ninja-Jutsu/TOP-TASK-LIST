import elementFactory from "./create-elements.js"

let i = 0;
export default function generateTaskForEachProject(){
    const tasksContainer = elementFactory('div',`tasks`,'')
    tasksContainer.setAttribute("id",`tasks${i}`);
    return tasksContainer
}



