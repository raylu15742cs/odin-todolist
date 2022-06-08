let count = 0 
export default function sidebartabs(){
    const sidebartabs = document.getElementById("sidebar")
    const inbox = document.createElement("div")
    inbox.addEventListener("click", function() {
        count++
        score.innerHTML = count;
        score2.innerHTML = count;
        score3.innerHTML = count;
    })
    inbox.innerText= `Inbox`;
    const score = document.createElement("p")
    score.innerHTML = count;
    inbox.appendChild(score)
    const today = document.createElement("div")
    today.addEventListener("click", function() {
        count++
        score.innerHTML = count;
        score2.innerHTML = count;
        score3.innerHTML = count;
    })
    today.innerText = `Today`;
    const score2 = document.createElement("p")
    score2.innerHTML = count;
    today.appendChild(score2)
    const finished = document.createElement("div")
    finished.addEventListener("click", function() {
        count++
        score.innerHTML = count;
        score2.innerHTML = count;
        score3.innerHTML = count;
    })
    finished.innerText = `Finished`;
    const score3 = document.createElement("p")
    score3.innerHTML = count;
    finished.appendChild(score3)
    sidebartabs.appendChild(inbox)
    sidebartabs.appendChild(today)
    sidebartabs.appendChild(finished);

    return sidebartabs
}