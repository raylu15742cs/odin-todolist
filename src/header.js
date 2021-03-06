import createtodos from './maincontent';

let count = 0;

const sidebarcontrol = function () {
  const hider = document.getElementById('sidebar');
  const main = document.getElementById('maincontent');
  if (count % 2 !== 0) {
    hider.style.visibility = 'visible';
    main.style.width = '85vw';
    hider.style.width = '15vw';
    hider.style.padding = '4vh 2vw 0 2vw';
    count += 1;
  } else {
    hider.style.visibility = 'hidden';
    main.style.width = '100vw';
    hider.style.width = '0vw';
    hider.style.padding = '0';
    count += 1;
  }
};

const homebuttonsfunction = function () {
  count = 1;
  sidebarcontrol();
};

export default function headertabs() {
  const headertab = document.getElementById('header');
  const lefttab = document.createElement('div');
  const sidebaropen = document.createElement('button');
  sidebaropen.innerHTML = '<img src="../img/three-dash.png"></img>';
  sidebaropen.addEventListener('click', sidebarcontrol);
  lefttab.appendChild(sidebaropen);
  const homebutton = document.createElement('button');
  homebutton.innerHTML = '<img src="../img/home.png"></img>';
  homebutton.addEventListener('click', homebuttonsfunction);
  lefttab.appendChild(homebutton);
  const righttab = document.createElement('div');
  const addnew = document.createElement('button');
  addnew.innerHTML = '<img src="../img/add-new.png"></img>';
  addnew.addEventListener('click', createtodos);
  righttab.appendChild(addnew);
  const username = document.createElement('button');
  username.innerText = 'RL';
  username.classList.add('usersbutton');
  username.setAttribute('id', 'userbutton');
  righttab.appendChild(username);
  headertab.appendChild(lefttab);
  headertab.appendChild(righttab);
}
