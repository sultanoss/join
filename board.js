
async function init3() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('task')) || [];
    renderBoard();
}


function renderBoard() {

    let todoColumn = allTasks.filter(item => item.workstage == 'todo')
    document.getElementById('todo').innerHTML = '';
    for (let i = 0; i < todoColumn.length; i++) {
        const element = todoColumn[i];
        document.getElementById('todo').innerHTML += generateTodoHTML(element);
    }

    let inProgressColumn = allTasks.filter(item => item.workstage == 'inProgress')
    document.getElementById('inProgress').innerHTML = '';
    for (let i = 0; i < inProgressColumn.length; i++) {
        const element = inProgressColumn[i];
        document.getElementById('inProgress').innerHTML += generateTodoHTML(element);
        document.getElementById(`task-ticket${element['id']}`).classList.add('inPrpgress-color');
    }

    let testingColumn = allTasks.filter(item => item.workstage == 'testing')
    document.getElementById('testing').innerHTML = '';
    for (let i = 0; i < testingColumn.length; i++) {
        const element = testingColumn[i];
        document.getElementById('testing').innerHTML += generateTodoHTML(element);
        document.getElementById(`task-ticket${element['id']}`).classList.add('testing-color');
    }

    let doneColumn = allTasks.filter(item => item.workstage == 'done')
    document.getElementById('done').innerHTML = '';
    for (let i = 0; i < doneColumn.length; i++) {
        const element = doneColumn[i];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
        document.getElementById(`task-ticket${element['id']}`).classList.add('done-color');
    }

    backend.setItem('task', JSON.stringify(allTasks));
}

function generateTodoHTML(element) {

    return `
    <div id="task-ticket${element['id']}" draggable = "true" ondragstart="startDragging(${element['id']})" class="board-task">
        <div class board-task-img>
              <span>${element['user1']['bild']}</span>
               <span>${element['user2']['bild']}</span>
               <span>${element['user3']['bild']}</span>
        </div>
        <div class="user-name">
              <span class="name">${element['category']}</span>
              <span>${element['title']}</span>
        </div>
        <img id="open-btn" src="img/open.png"  onclick="openTaskInfos(${element['id']})">
    </div>
    
    <div id=all-infos${element['id']} class="all-infos">
        <span class="name"><span class="titles">Title:</span> ${element['title']}</span>
        <span class="name"><span class="titles">Date:</span> ${element['date']}</span>
        <span class="name"><span class="titles">Priority:</span> ${element['urgency']}</span>
        <span class="name"><span class="titles">Category:</span> ${element['category']}</span>
      <div class="names">
        <span class="titles">Assigned To:</span>
        <span> ${element['user1']['name']}</span>
        <span> ${element['user2']['name']}</span>
        <span> ${element['user3']['name']}</span>
      </div>
      <span class="titles">Description:</span>
      <span class="name">${element['description']}</span>
      <img id="close-btn" src="img/close-window.png" onclick="closeTaskInfos(${element['id']})">
    </div>
    `;
}



let currentelement;

function startDragging(id) {

    currentelement = id;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(workstage) {

    let task = allTasks.find(item => item.id === currentelement)
    task['workstage'] = workstage;
    renderBoard();
}


function deleteBoardTask() {
    backend.deleteItem('boardTasks');
}



function openTaskInfos(taskInfos) {

    document.getElementById('dialog-bgr').classList.add('d-show');
    document.getElementById(`all-infos${taskInfos}`).classList.add('d-show');
}

function closeTaskInfos(taskInfos) {

    document.getElementById('dialog-bgr').classList.remove('d-show');
    document.getElementById(`all-infos${taskInfos}`).classList.remove('d-show');
}


function showMobileMenu(){

    document.getElementById('mobile').classList.add('d-show');
  
}


function hideMobileMenu(){

    document.getElementById('mobile').classList.remove('d-show');
  
}




