var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('div#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos () {
    listElement.innerHTML = '';
    
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onClick', 'deleteTodo(' +pos+ ')');
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        
        linkElement.setAttribute('href','#');
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);
    }
}

renderTodos();

function addTodo() {
    
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = ''
    renderTodos();
    saveToStorage();
};

btnElement.setAttribute('onClick','addTodo()');

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();

}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}