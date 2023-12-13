export default function changeMode(){
    const sun = document.getElementById('light')
    const moon = document.getElementById('dark')
    const logoLight = document.getElementById('dark-logo')
    const logoDark = document.getElementById('light-logo')

    let r = document.querySelector(':root');
    moon.addEventListener('click', () => {
        r.style.setProperty('--popupBgColor', '#18181b');
        r.style.setProperty('--mainBgColor', '#0f172a');
        r.style.setProperty('--textColor', '#f5f5f5');
        r.style.setProperty('--mainTitleColor', '#ccfbf1');
        logoLight.style.display = 'block'
        logoDark.style.display = 'none'
        sun.style.display = 'block'
        moon.style.display = 'none'

    })
    sun.addEventListener('click', () => {
        r.style.setProperty('--popupBgColor', 'rgb(216, 212, 212)');
        r.style.setProperty('--mainBgColor', 'rgb(213, 213, 193)');
        r.style.setProperty('--textColor', 'rgb(45, 43, 43)');
        r.style.setProperty('--mainTitleColor', 'rgb(4, 4, 117)');
        sun.style.display = 'none'
        moon.style.display = 'block'
        logoLight.style.display = 'none'
        logoDark.style.display = 'block'
    })
}