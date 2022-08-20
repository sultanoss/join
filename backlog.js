
async function init2() {
  await downloadFromServer();
  allTasks = JSON.parse(backend.getItem('task')) || [];
  renderBacklog();
}


function renderBacklog() {
  if (allTasks.length > 0) {
    document.getElementById('task-info').classList.add('d-none');
  }

  let index = 0;


  let backlogContent = document.getElementById('backlog-content');

  let currentProjectRow = allTasks.filter(item => item.category == 'Current project')
  for (let i = 0; i < currentProjectRow.length; i++) {
    const task = currentProjectRow[i];
    backlogContent.innerHTML += renderBacklogHTML(task, index);
    document.getElementById(index).classList.add('task-infos-orange');
    task['id'] = index;
    index++;
  };

  let saleRow = allTasks.filter(item => item.category == 'Sale')
  for (let i = 0; i < saleRow.length; i++) {
    const task = saleRow[i];
    backlogContent.innerHTML += renderBacklogHTML(task, index);
    document.getElementById(index).classList.add('task-infos-pink');
    task['id'] = index;
    index++;
  };

  let productRow = allTasks.filter(item => item.category == 'Product')
  for (let i = 0; i < productRow.length; i++) {
    const task = productRow[i];
    backlogContent.innerHTML += renderBacklogHTML(task, index);
    document.getElementById(index).classList.add('task-infos-green');
    task['id'] = index;
    index++;
  };

  backend.setItem('task', JSON.stringify(allTasks));

}



function renderBacklogHTML(task, index) {

  return `
  <div id=${index} class="task-infos">
    <div class="allusers">
       <div class="user-details">
         <span>${task['user1']['bild']}</span>
         <div class="user-name">
           <span class="name">${task['user1']['name']}</span>
           <span>${task['user1']['email']}</span>
          </div>
        </div>

        <div class="user-details">
         <span>${task['user2']['bild']}</span>
         <div class="user-name">
           <span class="name">${task['user2']['name']}</span>
           <span>${task['user2']['email']}</span>
         </div>
        </div>  

        <div class="user-details">
          <span>${task['user3']['bild']}</span>
         <div class="user-name">
           <span class="name">${task['user3']['name']}</span>
           <span>${task['user3']['email']}</span>
          </div>
         </div> 
    </div>
      <span class="category">${task['category']}</span>
      <p>${task['description']}</p>
    <div class="delete-add-btn">
      <img src="img/trash-alt-regular.svg" onclick="deletebacklog(${index})">
    </div>
  </div>  
      `;
}


function deletebacklog(index) {

  let backlogContent = document.getElementById('backlog-content');
  backlogContent.innerHTML = '';
  const removeIndex = allTasks.findIndex(item => item.id == index);
  allTasks.splice(removeIndex, 1);
  backend.setItem('task', JSON.stringify(allTasks));
  renderBacklog();
  if (allTasks.length == 0) {
    document.getElementById('task-info').classList.remove('d-none');
  }
}


function showMobileMenu() {

  document.getElementById('mobile').classList.add('d-show');
 
}


function hideMobileMenu() {

  document.getElementById('mobile').classList.remove('d-show');
 
}


