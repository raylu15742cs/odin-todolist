export default function createtodos() {
    let checkadd = document.getElementById("addform")
    if (checkadd == null) {
        let mainbody = document.getElementById("maincontent");

        var br = document.createElement("br");

        var form = document.createElement("form");
        form.setAttribute("action", "#")
        form.setAttribute("method", "post");
        form.setAttribute("id", "addform")

        var taskname = document.createElement("input");
        taskname.setAttribute("id", "taskname")
        taskname.setAttribute("type", "text");
        taskname.setAttribute("name", "taskName")
        taskname.setAttribute("placeholder", "Task")

        var dueDate = document.createElement("input")
        dueDate.setAttribute("type", "date")
        dueDate.setAttribute("name", "dueDate")

        var priority = document.createElement("select")
        priority.setAttribute("name", "priority")
        priority.setAttribute("id", "prioritySelect")
        
        var top = document.createElement("option")
        top.setAttribute("value", "Top");
        var topinside = document.createTextNode("Top")
        top.appendChild(topinside)
        priority.appendChild(top);

        var medium = document.createElement("option")
        medium.setAttribute("value", "Medium");
        var mediuminside = document.createTextNode("Medium")
        medium.appendChild(mediuminside)
        priority.appendChild(medium);

        var low = document.createElement("option")
        low.setAttribute("value", "Low");
        var lowinside = document.createTextNode("Low")
        low.appendChild(lowinside)
        priority.appendChild(low);

        var description = document.createElement("textarea")
        description.setAttribute("type", "text")
        description.setAttribute("name", "description")
        description.setAttribute("placeholder", "Description")

        var submit = document.createElement("input")
        submit.setAttribute("id", "submit")
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "submit") 

        form.appendChild(taskname)
        form.appendChild(dueDate)
        form.appendChild(priority)
        form.appendChild(br.cloneNode())
        form.appendChild(description)
        form.appendChild(br.cloneNode())
        form.appendChild(submit)
        mainbody.appendChild(form)

        const btn = document.querySelector('#submit');


        btn.addEventListener('click', (e) => {
            // prevent the form from submitting
            e.preventDefault()
            // show the form values
            const formData = new FormData(form);
            const values = [...formData.entries()];
            hihi(values)
        });
    }
}
let count = 0;
let hihi = function(values) {
    let mainbody = document.getElementById("maincontenttext")
    //mainbody.innerHTML += `Task = ${values[0][1]} <br> Due Date = ${values[1][1]} <br> Priority = ${values[2][1]} <br> Description = ${values[3][1]}`
    let newtask = document.createElement("Div")
    newtask.setAttribute("id", values[0][1])
    newtask.classList.add("todos")
    let newtitle = document.createElement("h2")
    newtitle.innerText = `Task : ${values[0][1]}`
    let newDueDate = document.createElement("p")
    newDueDate.innerText = `Due Date: ${values[1][1]} Priority: ${values[2][1]}`
    let newDescription = document.createElement("p")
    newDescription.innerText = `Description ${values[3][1]}`
    let finishbutton = document.createElement("button")
    finishbutton.innerText = "Finished"
    finishbutton.addEventListener("click", function() {
       let remove = document.getElementById(values[0][1])
       remove.parentNode.removeChild(remove)
       count++;
        let finishscore = document.getElementById("finishscore")
        finishscore.innerText = count
        updatescore.innerText = document.getElementsByClassName("todos").length;
    })
    newtask.appendChild(newtitle)
    newtask.appendChild(newDueDate)
    newtask.appendChild(newDescription)
    newtask.appendChild(finishbutton)
    mainbody.appendChild(newtask)
    let updatescore = document.getElementById("inboxscore")
    updatescore.innerText = document.getElementsByClassName("todos").length;
}