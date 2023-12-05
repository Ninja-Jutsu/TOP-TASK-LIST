export default function exitAllProject(){
    const projects = document.getElementsByClassName('project')
    for (let i = 0; i < projects.length; i++){
        projects[i].style.display = 'none'
    }
}