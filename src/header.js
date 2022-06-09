import sidebartabs from "./sidebar";

export default function headertabs() {
    const headertab = document.getElementById("header")
    const lefttab = document.createElement("div");
    let sidebaropen = document.createElement("button")
    sidebaropen.innerHTML = '<img src="../img/three-dash.png"></img>'
    let count = 0;
    sidebaropen.addEventListener("click", function() {
        let hider = document.getElementById("sidebar")
        if(count%2 != 0) {
            hider.style.visibility = 'visible';
            console.log(count)

            count++;
        } else {
            hider.style.visibility ="hidden";
            count++;
        }
    })
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
    username.classList.add("usersbutton")
    username.setAttribute("id","userbutton")
    righttab.appendChild(username)
    headertab.appendChild(lefttab)
    headertab.appendChild(righttab)


}