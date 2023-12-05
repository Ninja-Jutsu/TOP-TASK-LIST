
export default function exitProject(){
    const projectsContainer = document.getElementById('projects')
    const exitBtns = document.getElementsByClassName('exit-project')
    const projects = document.getElementsByClassName('project')
    for (let i = 0; i < exitBtns.length; i++){
        exitBtns[i].addEventListener('click', ()=> {
            projects[i].style.display = 'none'
            projectsContainer.style.display = 'none'
        })
    }
    console.log('exitProject')
}