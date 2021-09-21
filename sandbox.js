const container = document.querySelector('#main-container'); // select the main div or parent element div in html
const addButton = document.querySelector('.button-add'); // select the button element from the html by class name
const todoInput = document.querySelector('.todo-input'); // select the input element from the html by class name
const buttonDelete = document.querySelector('.button-delete')
const pendingNumber = document.querySelector('.pendingNumber');

// adding event listener to the addButton to get the value of input and to return in the addTodo Function
addButton.addEventListener('click', () => {
    addTodo(todoInput.value);
    return todoInput.onkeyup();
});

todoInput.onkeyup = () => {
    if(todoInput.value != 0){
        addButton.classList.add("active")
    }else{
        addButton.classList.remove("active")
    }
}

const addTodo = (todo) => { // create a function to perform a task by adding value or item in html

    const div = document.createElement('div'); // create div element in html
    div.classList.add('todo-item'); // add class name in div named "todo-item"
    div.setAttribute('id', Date.now());

    const todoCheckbox = document.createElement('input'); // create input element in html
    todoCheckbox.classList.add('checkbox-container'); // add class name  in todoCheckbox name "checkbox"
    todoCheckbox.setAttribute('type', 'radio'); // set the type of todoCheckbox by checkbox
    
    const span = document.createElement('span'); // create span element in html
    span.classList.add('input-item'); // set the id of span by Date.now(), Date.now() is a method that returns the number of second from the date
    span.textContent = todo; // getting the value of todoInput using textContent and add in html



    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = "Delete";
    
    container.appendChild(div); // appends the div to be parent of the container.
    div.appendChild(todoCheckbox); // appends the todoCheckbox to be parent of div.
    div.appendChild(span); // appends the span to be parent of div.
    div.appendChild(deleteButton); // appends the deleteButton to be parent of div.

    todoInput.value = "";
    
    deleteButton.addEventListener('click', () => {
        container.removeChild(div);
    });

    pendingNumber.innerHTML = container.childElementCount;

}