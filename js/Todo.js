
class Todo {

    constructor(title) {
        this._id=Math.floor(Math.random() * 1000);
        // if(id<=0 || !id)throw new Error('Incorrect id value');
        // this._id=id

        if(!title)throw new Error('Incorrect title value');
        this._title = title;


        let date = new Date();
        this._date = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
        // if(!date)throw new Error('Incorrect date value');
        // this._date = date;
       
        this._isDone= 0
        // if(!(isDone==0 || isDone==1)) throw new Error('Incorrect Is done value');          
        // this._isDone = isDone
    }
    

}


