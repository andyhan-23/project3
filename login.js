const loginform = document.getElementById("login-form"); 
const logininput = loginform.querySelector("input");
const loginbutton = loginform.querySelector("button");
const greeting = document.getElementById("greeting");
const hidden_name="hidden";
const username_key = "username";

function submit(event){
    event.preventDefault(); 
    const username = logininput.value;
    loginform.classList.add(hidden_name);
    //greeting.innerText="hello "+username;
    localStorage.setItem(username_key, username);
   paint_greeting(username);
}

function paint_greeting(username){
    greeting.classList.remove(hidden_name);
    greeting.innerText =`hello ${username}`;
}


const save_username =localStorage.getItem(username_key);

if(save_username == null){
    loginform.classList.remove(hidden_name);
    loginform.addEventListener("submit", submit);
}else{
    paint_greeting(save_username)
}
