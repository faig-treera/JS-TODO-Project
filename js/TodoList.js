class TodoList {
    _todoList = [];

    constructor(defaultValue = []){
        this._todoList = defaultValue;
    }
addToDo(toDo) {
    let task=new Todo(toDo)
    // console.log("task: ")
    // console.log(task)
    this._todoList.push(task);
    return task
}

deleteTodo(id) {
    // console.log(this._todoList)
    let task = this._todoList.map(obj=>obj._id).indexOf(id);
     return task;
}

sortByAlphabet() {
    return _todoList.sort((a, b) => a.title.localeCompare(b.title));
}

isDoneStatus(id, isDone) {
    const indexOfObject = this._todoList.map(obj=>obj._id).indexOf(id);
    console.log("isdonstatus f: " + id + "; " + isDone + "; index " + indexOfObject)
    this._todoList[indexOfObject]._isDone = isDone
    return indexOfObject
}

cloneListContainIsDone(m_isDone){
    
    let cloneArr = [];
    for (let clone of this._todoList) {
        if (clone._isDone == m_isDone){
            cloneArr.push(clone)
          
        }
      
    }
    
    return cloneArr;
}

filtrByUnique() {
    let result = [];
    let q = [...new Map(_todoList.map(obj => [JSON.stringify(obj), obj])).values()];
    console.log(q)
}
}