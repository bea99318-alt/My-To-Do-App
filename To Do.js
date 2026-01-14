const taskInput=document.getElementById("taskInput");
const addbttn=document.getElementById("addbttn");
const taskList=document.getElementById("taskList");
console.log(taskInput,addbttn);
let tasks=[];
if(localStorage.getItem("tasks")){
    tasks=JSON.parse(localStorage.getItem("tasks"));
    displayTasks();
}
function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
addbttn.addEventListener("click",function(){
    const taskText=taskInput.value.trim();
    if(taskText===""){
        alert("please enter a task");
        return;
    }
    const task={
        text:taskText,
        done:false
    };
    tasks.push(task);
    saveTasks();
    displayTasks();
    taskInput.value="";
});
function displayTasks(){
    taskList.innerHTML="";
    tasks.forEach((task,index) =>{
        const li=document.createElement("li");
    
        li.innerHTML=`
        <span>${task.text}</span>
        <div>
    <span class="status">${task.done?"\u2705":"\u274C"}</span>
            <button onclick="toggleTask(${index})">Toggle</button>
            <button onclick="editTask(${index})">\u270F</button>
            <button onclick="deleteTask(${index})">\u274C</button>
        </div>
`;
taskList.appendChild(li);
    });
}
function deleteTask(index){
    tasks.splice(index,1);
    saveTasks();
    displayTasks();
}
function toggleTask(index){
    tasks[index].done=!tasks[index].done;
    saveTasks();
    displayTasks();
}
function editTask(index){
    taskInput.value=tasks[index].text;
    tasks.splice(index,1);
    saveTasks();
    displayTasks();
}
    function filterTasks(type){
        currentFilter=type;
        displayTasks();
    }
