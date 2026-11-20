const sideBarButton = document.getElementById("sideBarButton")
const menu = document.getElementById("menu")

export function ausklappen(){
    sideBarButton.textContent = "X"
    menu.classList.remove('none')
    sideBarButton.setAttribute('onclick', "einklappen()")
}
export function einklappen(){
    sideBarButton.textContent = "|||"
    menu.classList.add('none')
    sideBarButton.setAttribute('onclick', "ausklappen()")
}