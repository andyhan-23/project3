const todoform = document.getElementById("todo-form");
const todoinput = document.querySelector("#todo-form input");
const todolist = document.getElementById("todo-list");
const todos_key="todos";


let todos=[];

function savetodos(){
    localStorage.setItem(todos_key, JSON.stringify(todos));
}

function deletetodo(event){
    const li= event.target.parentElement;
    li.remove();
    todos= todos.filter((todo) => todo.id !== parseInt(li.id));
    savetodos();
}

function painttodo(newtodo){
    const li = document.createElement("li");
    li.id=newtodo.id;
    const span = document.createElement("span");
    span.innerText= newtodo.text;
    const button = document.createElement("button");
    button.innerText="❌";  
    button.addEventListener("click", deletetodo)
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
}

function handletodosubmit(event){
    event.preventDefault();
    const newtodo = todoinput.value;
    todoinput.value="";
    const newtodoobj = {
        text:newtodo,
        id: Date.now(),
    };
    todos.push(newtodoobj);
    painttodo(newtodoobj);
    savetodos();
}

todoform.addEventListener("submit",handletodosubmit)

function sayhello(item){
    console.log("this is the turn of", item);
}
const save_todos = localStorage.getItem(todos_key);
console.log(save_todos);
if(savetodos!== null){
    const parsetodos = JSON.parse(save_todos);
    todos = parsetodos;
    parsetodos.forEach(painttodo);
    
}
test


