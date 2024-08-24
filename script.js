
const inputBox = document.querySelector('.input-box');
const addBtn = document.querySelector('.btn');
const taskList = document.querySelector('.task-list');

// addBtn.addEventListener('onclick',addTask());

// function addTask() {

//     if (inputBox.value === '') {
//         alert("You must write something");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         taskList.appendChild(li);

//         let span = document.createElement('span');
//         span.innerHTML = '\u00d7';
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// taskList.addEventListener("click", function (e) {

//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('checked')
//         saveData();
//     } else if (e.target.tagName === 'SPAN') {
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);

// function saveData(){
//     localStorage.setItem('data',taskList.innerHTML);
// }

// function showData(){
//     taskList.innerHTML = localStorage.getItem('data')
// }

// showData();

function addTask(){
    if(inputBox.value === ''){
        alert('Enter a task');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}

function showData(){
    taskList.innerHTML = localStorage.getItem("data")
}

showData();