

let loginUser = [
    {
        'username': 'Sultan',
        'password': 'gruppe-182'
    },
    {
        'username': 'Florian',
        'password': 'gruppe-182'
    },
    {
        'username': 'Dominique',
        'password': 'gruppe-182'
    },

];



function saveUser() {
    backend.setItem('loginUser', JSON.stringify(loginUser));
}

async function loadUser() {
    await downloadFromServer();
    loginUser = JSON.parse(backend.getItem('loginUser')) || [];
};

async function init4() {
   
    loadUser();
}

/*
*Check the logged in- datas of the user
*/

function checkLogin() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (username.value == loginUser[0]['username'] && password.value == loginUser[0]['password']
        || username.value == loginUser[1]['username'] && password.value == loginUser[1]['password']
        || username.value == loginUser[2]['username'] && password.value == loginUser[2]['password']) {

        window.location.replace("index.html");

    } else {
        alert('Username or password is incorrect. Please try again!');
    }
    username.value = '';
    password.value = '';
};

function deleteLoginUser() {
    backend.deleteItem('loginUser');
}