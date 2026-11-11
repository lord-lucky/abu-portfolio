let tasks = [];
function addTask(){
  let input = document.getElementById('taskInput');
  if(!input) return;
  let text = input.value.trim();
  if(text === ""){ alert("Please enter a task"); return; }
  tasks.push(text);
  displayTasks();
  input.value = "";
}
function displayTasks(){
  let list = document.getElementById('taskList');
  if(!list) return;
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement('li');
    li.textContent = task + " ";
    let doneBtn = document.createElement('button');
    doneBtn.textContent = "Done";
    doneBtn.onclick = () => { li.style.textDecoration = "line-through"; };
    let delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.onclick = () => { tasks.splice(index,1); displayTasks(); };
    li.appendChild(doneBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
let form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let msg = document.getElementById('message').value.trim();
    if(name==="" || email==="" || msg===""){ document.getElementById('formMsg').textContent="Please fill all required fields"; return; }
    if(!email.includes('@')){ document.getElementById('formMsg').textContent="Please enter valid email"; return; }
    if(phone!=="" && !/^[0-9]+$/.test(phone)){ document.getElementById('formMsg').textContent="Phone must be digits only"; return; }
    document.getElementById('formMsg').textContent="Thank you "+name+", your message has been sent!";
    form.reset();
  });
}
