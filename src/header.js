export default function headertabs() {
    const headertab = document.getElementById("header")
    const lefttab = document.createElement("div");
    let sidebaropen = document.createElement("button")
    sidebaropen.innerHTML = '<img src="../img/three-dash.png"></img>'
    lefttab.appendChild(sidebaropen)
    let homebutton = document.createElement("button")
    homebutton.innerHTML = '<img src="../img/home.png"></img>'
    lefttab.appendChild(homebutton)
    const righttab = document.createElement("div");
    let addnew = document.createElement("button")
    addnew.innerHTML = '<img src="../img/add-new.png"></img>'
    righttab.appendChild(addnew)
    let username = document.createElement("button")
    username.innerText = "RL";
    username.setAttribute("id","userbutton")
    righttab.appendChild(username)
    headertab.appendChild(lefttab)
    headertab.appendChild(righttab)

}