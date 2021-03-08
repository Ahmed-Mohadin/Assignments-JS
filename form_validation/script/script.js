// get all necessary DOM nodes
const myForm = document.querySelector('#my-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');

const ul = document.querySelector('.users');
const msg = document.querySelector('.msg');

// array to store users, first and lastname and email as object 
const users = [];
const createUser = (firstName, lastName, email) => {
    let user = {
        id: Date.now().toString(),
        firstName,
        lastName,
        email
    }
    users.push(user);
    console.log(users);
}

// form submit event
myForm.addEventListener('submit', addUser);

// add user event
function addUser (e){
    e.preventDefault();

    const _firstName = validateName(firstName);
    const _lastName = validateName(lastName);
    const _email = validateEmail(email);
    let text = '';
    
    if(_firstName && _lastName && _email){
        if(emailExists(email.value)){
            createUser(firstName.value, lastName.value, email.value);
            printUsers();
            text = `User ${firstName.value} ${lastName.value} has been added to the list`;
            msg.classList.add('text-success');
            resetForm();
        }
    }
    else{
        text = 'Please provide a valid info & check for mistakes!';
        msg.classList.add('text-danger');
        msg.classList.remove('text-success');
    }
    msg.innerText = text;
    
    setTimeout(()=>msg.innerText = '', 3500);
}

// resets the form input
function resetForm(){
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
        input.classList.remove('is-valid');
    })
}

// get the input values of first and lastname to validate them
function validateName(name){
    const regExpName = /^[\p{L}'][ \p{L}]*[\p{L}]$/u;
    const value = name.value;
    const error = name.nextElementSibling;
    
    if(name === firstName){
        if(value.trim() === '' || !regExpName.test(value.trim())){
            error.innerText = 'Please enter a valid first name';
            name.classList.add('is-invalid');
            setTimeout(()=>error.innerText='', 3500);
            return false;
        }
        else{
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
            return true;
        }
    }

    else if(name === lastName){
        if(value.trim() === '' || !regExpName.test(value.trim())){
            error.innerText = 'Please enter a valid last name';
            name.classList.add('is-invalid');
            setTimeout(()=>error.innerText='', 3500);
            return false;
        }
        else{
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
            return true;
        }
    }
} 

// checks if email address already exists 
const emailExists = (search) => {
    const error = email.nextElementSibling;
    
    if(users.filter((mail) => mail.email === search).length > 0){
        error.innerText = 'The email address is connected to another user';
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        setTimeout(()=>error.innerText='', 3500);
        return false;
    }

    else{
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        return true;
    }
}

// get the input value of email address to validate it
function validateEmail(eMail){
    const regExpEmail = /^(([a-zA-Z0-9]+\w*[\.\-]?){1,}\w*@([a-zA-Z0-9]+\.){1,2}[A-z]{2,3})$/u;
    const _eMail = eMail.value;
    const error = eMail.nextElementSibling;
    
    if( _eMail.trim() === '' || !regExpEmail.test(_eMail.trim())){
        error.innerText = 'Please enter a valid email address';
        eMail.classList.add('is-invalid');
        eMail.classList.remove('is-valid');
        setTimeout(()=>error.innerText='', 3500);
        return false;
    } 
    
    else {
        eMail.classList.add('is-valid');
        eMail.classList.remove('is-invalid');
        return true;
    }
}

// display users 
function printUsers(){
    ul.innerHTML = '';
    
    users.forEach((print)=>{
        const display = `
        <li class="list-group-item d-flex justify-content-between align-items-center py-4">
            <div class="row-sm">
                <span>${print.firstName} ${print.lastName}</span>
                    <br>
                <small>${print.email}</small>
            </div>   
            <div class="row-sm buttons">
                <button class="btn btn-primary me-3 change">Change Info</button>
                <button class="btn btn-danger delete">Delete User</button>
            </div>
        </li>
        `
        ul.innerHTML += display;
    })
    
    getElementIndex();
}

//get index of list element
let liIndex;
function getElementIndex(){
    const userList = document.querySelectorAll('.users li');
    for(let i=0; i<userList.length; i++){
        userList[i].onclick = function(){
            liIndex = i;
        }
    }
}

getElementIndex();

// delete user event
ul.addEventListener('click', removeUser);

// delete user
function removeUser(user){
    if(user.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = user.target.parentNode;
            li.parentNode.remove(li);
           
            if(users.length > 0){
                users.splice(liIndex, 1);
                console.log(users);
                
                const addUser = document.querySelector('.add');
                addUser.disabled = false;
                const saveChange = document.querySelector('.change');
                saveChange.disabled = true;
                
                printUsers();
                resetForm();
            }
        }
    }
}

// edit user info event
ul.addEventListener('click', selectedUserToInput);

// display selected info into input text
function selectedUserToInput(user){
    if(user.target.classList.contains('change')){
        if(confirm('Change user info?')){
           
            if(users.length > 0){ 
                myForm[0].value = users[liIndex].firstName;
                myForm[1].value = users[liIndex].lastName;
                myForm[2].value = users[liIndex].email;
                
                const addUser = document.querySelector('.add');
                addUser.disabled = true;
                const saveChange = document.querySelector('.change');
                saveChange.disabled = false;

                let display = `
                <li class="list-group-item d-flex justify-content-between align-items-center py-4">
                    <div class="row-sm">
                        <span>${users[liIndex].firstName} ${users[liIndex].lastName}</span>
                            <br>
                        <small>${users[liIndex].email}</small>
                    </div>   
                    <div class="row-sm buttons">
                        <button class="btn btn-primary me-3 change" disabled>Change Info</button>
                        <button class="btn btn-danger delete">Delete User</button>
                    </div>
                </li>
                `
                ul.innerHTML = display;
             
                saveChange.onclick = function(){
                    if(myForm[2].value === users[liIndex].email && validateName(myForm[0]) && validateName(myForm[1])){
                        
                        users[liIndex].firstName = myForm[0].value;
                        users[liIndex].lastName = myForm[1].value;
                        users[liIndex].email = myForm[2].value;
                        
                        saveChange.disabled = true;
                        addUser.disabled = false;
    
                        console.log(users);
                        printUsers();
                        resetForm();       
                    }
                    
                    else if(validateName(myForm[0]) && validateName(myForm[1]) && validateEmail(myForm[2]) && emailExists(myForm[2].value)){
                        users[liIndex].firstName = myForm[0].value;
                        users[liIndex].lastName = myForm[1].value;
                        users[liIndex].email = myForm[2].value;
                        
                        saveChange.disabled = true;
                        addUser.disabled = false;
    
                        console.log(users);
                        printUsers();
                        resetForm();  
                    }
                }
            }
        }
    }
}