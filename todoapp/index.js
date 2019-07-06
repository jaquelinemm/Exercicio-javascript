var list = document.querySelector('div#app ul');
var input = document.querySelector('div#app input');
var button = document.querySelector('div#app button');

// var todos = ['Tomar Café', 'Estudar JS', 'Programar']
var todos = JSON.parse(localStorage.getItem('todos')) || [];

function showTodos(){
    list.innerHTML = '';   //exibe o que está dentro do button
    todos.forEach((todo,pos) => {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('href', '#');

        linkElement.setAttribute('onclick','removeTodo('+pos+')');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        list.appendChild(todoElement);
    });
}

showTodos();

function addTodo(){
    var todoText = input.value;

    todos.push(todoText);
    input.value = "";
    showTodos();
    saveToStorage();
}

button.onclick = addTodo;

function removeTodo(position){
    todos.splice(position,1);
    showTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('todos', JSON.stringify(todos));
}
