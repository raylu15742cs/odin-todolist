let count = 0;
const hihi = function (values) {
  const updatescore = document.getElementById('inboxscore');
  const mainbody = document.getElementById('maincontenttext');
  const newtask = document.createElement('Div');
  newtask.setAttribute('id', values[0][1]);
  newtask.classList.add('todos');
  const newtitle = document.createElement('h2');
  newtitle.innerText = `Task : ${values[0][1]}`;
  const newDueDate = document.createElement('p');
  newDueDate.innerText = `Due Date: ${values[1][1]} Priority: ${values[2][1]}`;
  const newDescription = document.createElement('p');
  newDescription.innerText = `Description ${values[3][1]}`;
  const finishbutton = document.createElement('button');
  finishbutton.innerText = 'Finished';
  finishbutton.addEventListener('click', () => {
    const remove = document.getElementById(values[0][1]);
    remove.parentNode.removeChild(remove);
    count += 1;
    const finishscore = document.getElementById('finishscore');
    finishscore.innerText = count;
    updatescore.innerText = document.getElementsByClassName('todos').length;
  });
  newtask.appendChild(newtitle);
  newtask.appendChild(newDueDate);
  newtask.appendChild(newDescription);
  newtask.appendChild(finishbutton);
  mainbody.appendChild(newtask);
  updatescore.innerText = document.getElementsByClassName('todos').length;
};

export default function createtodos() {
  const checkadd = document.getElementById('addform');
  if (checkadd == null) {
    const mainbody = document.getElementById('maincontent');

    const br = document.createElement('br');

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'addform');

    const taskname = document.createElement('input');
    taskname.setAttribute('id', 'taskname');
    taskname.setAttribute('type', 'text');
    taskname.setAttribute('name', 'taskName');
    taskname.setAttribute('placeholder', 'Task');

    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('name', 'dueDate');

    const priority = document.createElement('select');
    priority.setAttribute('name', 'priority');
    priority.setAttribute('id', 'prioritySelect');

    const top = document.createElement('option');
    top.setAttribute('value', 'Top');
    const topinside = document.createTextNode('Top');
    top.appendChild(topinside);
    priority.appendChild(top);

    const medium = document.createElement('option');
    medium.setAttribute('value', 'Medium');
    const mediuminside = document.createTextNode('Medium');
    medium.appendChild(mediuminside);
    priority.appendChild(medium);

    const low = document.createElement('option');
    low.setAttribute('value', 'Low');
    const lowinside = document.createTextNode('Low');
    low.appendChild(lowinside);
    priority.appendChild(low);

    const description = document.createElement('textarea');
    description.setAttribute('type', 'text');
    description.setAttribute('name', 'description');
    description.setAttribute('placeholder', 'Description');

    const submit = document.createElement('input');
    submit.setAttribute('id', 'submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'submit');

    form.appendChild(taskname);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(br.cloneNode());
    form.appendChild(description);
    form.appendChild(br.cloneNode());
    form.appendChild(submit);
    mainbody.appendChild(form);

    const btn = document.querySelector('#submit');

    btn.addEventListener('click', (e) => {
      // prevent the form from submitting
      e.preventDefault();
      // show the form values
      const formData = new FormData(form);
      const values = [...formData.entries()];
      hihi(values);
    });
  }
}
