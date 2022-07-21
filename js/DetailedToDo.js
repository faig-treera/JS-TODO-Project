import { Todo } from "./Todo.js";

export class DetailedToDo extends Todo{
    _createDate= new Date()
    _assign="Unknown"

    constructor(id,title,date,isDone,createDate,assign){
      super(id,title,date,isDone)
        this._createDate=createDate;
        this._assign=assign
    }
}
// let detailyeni = new  DetailedToDo(1,"lablab","2022-01-01",1,"2021-01-01","NAila")
// console.log(detailyeni)