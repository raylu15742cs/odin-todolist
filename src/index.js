import './style.css';
import headertabs from "./header.js";
import sidebartabs from "./sidebar.js";


function createdefault() {
    const content = document.createElement("div")
    content.appendChild(createheader())
    content.appendChild(createmaindiv())
    return content

}

function createheader() {
    const header = document.createElement("div")
    header.setAttribute("id","header")
    return header
}
function createmaindiv() {
    const maindiv = document.createElement("div")
    maindiv.classList.add("maindiv")
    maindiv.appendChild(createsidebar())
    maindiv.appendChild(createmaincontent())

    return maindiv
}
function createsidebar() {
    const sidebar = document.createElement("div")
    sidebar.setAttribute("id", "sidebar")
    return sidebar
}

function createmaincontent() {
    const maincontent = document.createElement("div")
    maincontent.classList.add("maincontent")
    return maincontent
}

document.body.appendChild(createdefault());
sidebartabs();
headertabs();