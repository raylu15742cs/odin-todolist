let count = 0;
export default function sidebartabs() {
  const sidebartabs = document.getElementById("sidebar");
  const inbox = document.createElement("div");
  inbox.innerText = `Inbox`;
  const score = document.createElement("p");
  score.setAttribute("id", "inboxscore");
  score.innerHTML = count;
  inbox.appendChild(score);

  const finished = document.createElement("div");
  finished.innerText = `Finished`;
  const score3 = document.createElement("p");
  score3.setAttribute("id", "finishscore");
  score3.innerHTML = count;
  finished.appendChild(score3);
  sidebartabs.appendChild(inbox);
  sidebartabs.appendChild(finished);

  return sidebartabs;
}
