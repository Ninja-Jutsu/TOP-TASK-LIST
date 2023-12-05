export default function exitAllProject(){
    
    
    const projects = document.getElementsByClassName('project')
    for (let i = 0; i < projects.length; i++){
        console.log('exitAllProject')
        projects[i].style.display = 'none'
        
    }
}