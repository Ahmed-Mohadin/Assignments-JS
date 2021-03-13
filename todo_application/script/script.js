// get all necessary DOM nodes
const myForm = document.querySelector('#my-form');
const toDo = document.querySelector('#to-do');

const ul = document.querySelector('.to-dos');
const msg = document.querySelector('.msg');

// array to store the to-dos  
let toDos = [];

// get to-dos
const getToDos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=5&_limit=10')
         .then(res => res.json())
         .then(data => {
             toDos = data;
             console.log(toDos);
             printToDos();
         })
         .catch(() => {
             alert('Error, Couldn\'t fetch data')
         })
}
getToDos();

// display to-dos
const printToDos = () => {
    ul.innerHTML = '';
    toDos.forEach(print => {
        let display;
        if(print.completed === true){
            display = `
            <li class="list-group-item list-group-item-light d-flex justify-content-between align-items-center py-4">
                <div class="row-sm">
                    <input class="form-check-input me-1 done" type="checkbox" value="" aria-label="..." checked>
                    <span class="text-decoration-line-through">${print.title}</span>
                </div>   
                <div class="row-sm button">
                    <button class="btn btn-danger delete">X</button>
                </div>
            </li>
            ` 
        }
        else{
            display = `
            <li class="list-group-item list-group-item-light d-flex justify-content-between align-items-center py-4">
                <div class="row-sm">
                    <input class="form-check-input me-1 done" type="checkbox" value="" aria-label="...">
                    <span>${print.title}</span>
                </div>   
                <div class="row-sm button">
                    <button class="btn btn-danger delete" disabled>X</button>
                </div>
            </li>
            ` 
        }
        ul.innerHTML += display;
    })
    getElementIndex();
}

// create to-do, fetch post request
const createToDos = (title) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title,
            Completed: false    
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
     .then(res => {
         res.json();
     })
     .then( () => {
         let newToDo = {
             title,
             completed: false, 
             id: Date.now().toString()
         }
         toDos.unshift(newToDo);
         console.log(toDos);
         printToDos();  
     })
     .catch(() => {
         alert('Error, Couldn\'t post task')
     })
}

// get value of to-do to valide
const validateToDo = (title) => {
    const value = title.value.trim();
    const error = title.nextElementSibling
    if(value === ''){
        error.innerText = 'Please enter a valid to-do task';
        title.classList.add('is-invalid');
        setTimeout(()=>error.innerText='', 4000);
        return false;
    } 
    
    else {
        title.classList.remove('is-invalid');
        return true;
    }
}

//get index of list element
let liIndex;
function getElementIndex(){
    const toDoList = document.querySelectorAll('.to-dos li');
    for(let i=0; i<toDoList.length; i++){
        toDoList[i].onclick = function(){
            liIndex = i;
        }
    }
}

getElementIndex();

// mark to-do event
ul.addEventListener('click', markToDo);
function markToDo(title){
    const checkbox = document.querySelectorAll('.done');
    const span = document.querySelectorAll('span');
    const deleteBtn = document.querySelectorAll('.delete');

    if(title.target.classList.contains('form-check-input')){
        if(checkbox[liIndex].checked === true){
            span[liIndex].classList.add('text-decoration-line-through');
            toDos[liIndex].completed = true;
            deleteBtn[liIndex].disabled = false;
            console.log(toDos);
        }
        else if(checkbox[liIndex].checked === false){
            span[liIndex].classList.remove('text-decoration-line-through');
            toDos[liIndex].completed = false;
            deleteBtn[liIndex].disabled = true;
            console.log(toDos);
        }
    }
}


// delete to-do event 
ul.addEventListener('click', deleteToDo)

function deleteToDo(title){
    if(title.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = title.target.parentNode;
            li.parentNode.remove(li);
           
            if(toDos.length > 0){
                toDos.splice(liIndex, 1);
                console.log(toDos);
                printToDos();
            }
        }
    }
}

// form submit event
myForm.addEventListener('submit', addToDo);

function addToDo(e){
    e.preventDefault();

    const _title = validateToDo(toDo); 
    if(_title){
        createToDos(toDo.value);
        resetForm();
        toDo.focus();
    }
}

// resets the form input
function resetForm(){
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    })
}