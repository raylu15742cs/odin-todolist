import createtodos from "./maincontent";
import sidebartabs from "./sidebar";

export default function headertabs() {
    const headertab = document.getElementById("header")
    const lefttab = document.createElement("div");
    let sidebaropen = document.createElement("button")
    sidebaropen.innerHTML = '<img src="../img/three-dash.png"></img>'
    sidebaropen.addEventListener("click", sidebarcontrol)
    lefttab.appendChild(sidebaropen)
    let homebutton = document.createElement("button")
    homebutton.innerHTML = '<img src="../img/home.png"></img>'
    homebutton.addEventListener("click", homebuttonsfunction )
    lefttab.appendChild(homebutton)
    const righttab = document.createElement("div");
    let addnew = document.createElement("button")
    addnew.innerHTML = '<img src="../img/add-new.png"></img>'
    addnew.addEventListener("click", createtodos)
    righttab.appendChild(addnew)
    let username = document.createElement("button")
    username.innerText = "RL";
    username.classList.add("usersbutton")
    username.setAttribute("id","userbutton")
    righttab.appendChild(username)
    headertab.appendChild(lefttab)
    headertab.appendChild(righttab)


}
let count = 0
let homebuttonsfunction = function() {
    count = 1
    sidebarcontrol()
}
let sidebarcontrol = function() {
    let hider = document.getElementById("sidebar")
    let main = document.getElementById("maincontent")
    if(count%2 != 0) {
        hider.style.visibility = 'visible';
        main.style.width = "80vw";
        hider.style.width = "20vw";
        hider.style.padding = "4vh 2vw 0 2vw"
        count++;
    } else {
        hider.style.visibility ="hidden";
        main.style.width = "100vw";
        hider.style.width = "0vw";
        hider.style.padding = "0"
        count++;
    }
}