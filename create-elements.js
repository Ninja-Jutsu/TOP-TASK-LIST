export default function elementFactory(type, classlist, innerText){
    const el = document.createElement(type)
    el.classList.add(classlist)
    el.innerHTML = innerText
    return el
}