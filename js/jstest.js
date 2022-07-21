
// class Todo{
// constructor(id, title, date, isDone){
//     this.id=id;
//     this.title=title;
//     this.date=date;
//     this.isDone=isDone
// }

// }
 
function toDo(id, title, date, isDone){
     this.id=id;
     this.title=title;
     this.date=date;
     this.isDone=isDone
}

function addToDo(toDo,toDoList){
    toDoList.push(toDo);
}
let toDoList =[]


function deleteTodo(id,toDoList){


    const indexOfObject = toDoList.findIndex(object => {
        return object.id === id;
      });
    toDoList.splice(indexOfObject,1);
}

function sortByAlphabet(toDoList){

    return toDoList.sort((a, b) => a.title.localeCompare(b.title));
}

function isDoneStatus(id,n_isDone,toDoList){

    const indexOfObject = toDoList.findIndex(object => {
        return object.id === id;
      }); 
   toDoList[indexOfObject].isDone = n_isDone
}

function cloneListContainIsDone(m_isDone,toDoList){
    let cloneArr= [];
   for(let clone of toDoList) {
        if (clone.isDone==m_isDone){
            cloneArr.push(clone)
        }
   }
    return cloneArr;
}


function filtrByUnique(n_toDoList){

    let result = [];

   
   
   let q = [...new Map(n_toDoList.map(obj => [JSON.stringify(obj), obj])).values()];
   
   console.log(q)
 


    // for( i=0; i<n_toDoList.length ;i++){
        
    //     for(j=1 ;j<n_toDoList; j++){
    //         if(n_toDoList[i].id!==n_toDoList[j].id &&
    //             n_toDoList[i].title!==n_toDoList[j].title &&
    //             n_toDoList[i].date!==n_toDoList[j].date &&
    //             n_toDoList[i].isDone!==n_toDoList[j].isDone) 
    //             result.push(n_toDoList(i))
    //             console.log(n_toDoList(i))
    //     }
    // }
    

    
    // return result;
}

addToDo(new toDo(1,'Dadd new check list','01.01.2022',true),toDoList)
addToDo(new toDo(2,'Aadd new check list','01.02.2022',false),toDoList)
addToDo(new toDo(3,'Zadd new check list','01.03.2022',true),toDoList)
addToDo(new toDo(3,'Zadd new check list','01.03.2022',true),toDoList)
isDoneStatus(2,false,toDoList)


// deleteTodo(1,toDoList)
//console.log(toDoList)

// console.log (sortByAlphabet(toDoList))

// console.log(toDoList[1])

// let testArr = [56, 38, 40]
// console.log(testArr[1])


// let clonedArr = cloneListContainIsDone(false,toDoList)

// console.log(clonedArr)
// let result = filtrByUnique(toDoList);
// console.log(result);

// let digitsArray = [12, 13, 17, 20, 23];

// function prostiyeChisla(arr){
  
//     lblName: for(i=0;i<arr.length ; i++){
   
//     for(j=2; j<arr[i] ;j++){
  
//         if (arr[i]%j==0) continue lblName;
        
//     }
//     console.log(`${arr[i]} prostoe`)
// }
// }

// prostiyeChisla(digitsArray);

filtrByUnique(toDoList)





