export default function displayListMaker(){
    const newList = document.getElementById('new-list')
    newList.style.display = 'flex'
}

export function hideListMaker(){
    const newList = document.getElementById('new-list')
    newList.style.display = 'none'
}

const listsContainer = document.getElementById('lists-container')

export function displayProjectsContainer(){
    listsContainer.style.display =  'flex'
}

export function hideProjectsContainer(){
    listsContainer.style.display =  'none'
}

const detailsForm = document.getElementById('list-details')

export function displayTaskDetailsForm(){
    detailsForm.style.display = 'flex'
}

export function hideTaskDetailsForm(){
    detailsForm.style.display = 'none'
}
