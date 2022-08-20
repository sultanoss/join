// setURL('http://gruppe-182.developerakademie.net/smallest_backend_ever-master');
setURL('https://radwansultan.de/smallest_backend_ever-master');

allTasks = [];

let title;
let date;
let category;
let urgency;
let description;
let userInfo;
let id;

let task = {
    'id': id,
    'title': title,
    'date': date,
    'category': category,
    'urgency': urgency,
    'description': description,
    'user1': { 'email': '', 'bild': '', 'name': '' },
    'user2': { 'email': '', 'bild': '', 'name': '' },
    'user3': { 'email': '', 'bild': '', 'name': '' },
    'workstage': 'todo'
}


async function init() {

    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('task')) || [];

}

    function addTask() {

        task['title'] = document.getElementById('title-input').value;
        task['date'] = document.getElementById('date-input').value;
        task['category'] = document.getElementById('category').value;
        task['urgency'] = document.getElementById('urgency').value;
        task['description'] = document.getElementById('discription-text').value;
    
        let taskCopy = JSON.parse(JSON.stringify(task));
        allTasks.push(taskCopy);
        saveTask();
        clearInputs();
        console.log(allTasks);
    }


function clearInputs() {

    document.getElementById('title-input').value = '';
    document.getElementById('discription-text').value = '';
    document.getElementById('date-input').value = '';
    document.getElementById('category').value = 'current project';
    document.getElementById('urgency').value = 'high';
    document.getElementById('checked').classList.remove('d-show');
    document.getElementById('checked2').classList.remove('d-show');
    document.getElementById('checked3').classList.remove('d-show');
}



function saveTask() {

    backend.setItem('task', JSON.stringify(allTasks));

}

function addUser1() {

    task['user1']['email'] = 'radwansultan@hotmail.de';
    task['user1']['bild'] = '<img src="img/meinbild.jpg">';
    task['user1']['name'] = 'Radwan Sultan';
    document.getElementById('checked').classList.add('d-show');
}

function addUser2() {

    task['user2']['email'] = 'florian@hotmail.de';
    task['user2']['bild'] = '<img src="img/autorennen.jpg">';
    task['user2']['name'] = 'Florian Juenemann';
    document.getElementById('checked2').classList.add('d-show');
}

function addUser3() {

    task['user3']['email'] = 'domenique@hotmail.de';
    task['user3']['bild'] = '<img src="img/mottorad1.jpg">';
    task['user3']['name'] = 'Domenique Bläsi';
    document.getElementById('checked3').classList.add('d-show');
}


function deleteTask() {
    backend.deleteItem('task');
}

function showMobileMenu() {

    document.getElementById('mobile').classList.add('d-show');

}


function hideMobileMenu() {

    document.getElementById('mobile').classList.remove('d-show');
    
}
