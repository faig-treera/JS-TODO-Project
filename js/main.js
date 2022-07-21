
let tableLength = document.getElementById("taskTbl").rows.length
let listOfTasks = new TodoList()

function Newtask(title) {
    let createdTask = listOfTasks.addToDo(title)
    document.getElementById('todoTitle').value = ''
    console.log("createdtask:")
    console.log(createdTask)
    var newRowVariable = `<tr><td><button class="deletebutton" onclick="DeleteTask(${createdTask._id})">Delete</button></td><td>${createdTask._id}</td><td>${createdTask._title}</td><td>${createdTask._date}</td><td>${createdTask._isDone}</td><td><button onclick="CompleteTask(${createdTask._id}, 1)">Complete</button></td></tr>`;
    $("#tbl_id").append(newRowVariable)

}

function DeleteTask(id) {
    let index = listOfTasks.deleteTodo(id)
    listOfTasks._todoList.splice(index, 1)
    document.getElementsByTagName("tr")[index + tableLength].remove();
}

function CompleteTask(id,isDone){
    let index=listOfTasks.isDoneStatus(id, isDone)
    document.getElementsByTagName("tr")[index + tableLength].getElementsByTagName("td")[4].innerHTML=1
    document.getElementsByTagName("tr")[index + tableLength].getElementsByTagName("td")[5].getElementsByTagName("button")[0].setAttribute("disabled", "disabled")
}

function CompleteTaskList(isDone){
    
   let ReCompleteList=listOfTasks.cloneListContainIsDone(isDone)
   document.querySelectorAll("table tbody tr").forEach(function(e){e.remove()})
   for(let i=0; i<ReCompleteList.length ; i++){
    let status= ReCompleteList[i]._isDone==0 ? 1: 0;
    
    let btnText = ReCompleteList[i]._isDone==1 ? "Return" : "Complete" 
    console.log(`txt: ${btnText}; status: ${status}`)
   let newRowVariable = `<tr><td><button onclick="DeleteTask(${ReCompleteList[i]._id})">Delete</button></td><td>${ReCompleteList[i]._id}</td><td>${ReCompleteList[i]._title}</td><td>${ReCompleteList[i]._date}</td><td>${ReCompleteList[i]._isDone}</td><td><button onclick="CompleteTask(${ReCompleteList[i]._id},${status})">${btnText}</button></td></tr>`;
   $("#tbl_id").append(newRowVariable)
}
}


function AllList(){
    console.log(listOfTasks._todoList)
    document.querySelectorAll("table tbody tr").forEach(function(e){e.remove()})
    for(let i=0; i<listOfTasks._todoList.length ; i++){   
        let status= listOfTasks._todoList[i]._isDone==0 ? 1: 0;
        let btnText = listOfTasks._todoList[i]._isDone==1 ? "Return" : "Complete"     
        let newRowVariable = `<tr><td><button onclick="DeleteTask(${listOfTasks._todoList[i]._id})">Delete</button></td><td>${listOfTasks._todoList[i]._id}</td><td>${listOfTasks._todoList[i]._title}</td><td>${listOfTasks._todoList[i]._date}</td><td>${listOfTasks._todoList[i]._isDone}</td><td><button onclick="CompleteTask(${listOfTasks._todoList[i]._id},${status})">${btnText}</button></td></tr>`;
       console.log(listOfTasks._todoList[i])
        $("#tbl_id").append(newRowVariable)
       
     }
}