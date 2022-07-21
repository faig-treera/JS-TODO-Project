// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }

// // использование
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1))
// ];

// articles.sort(Article.compare);

// console.log( articles[0].title ); // CSS




class CoffeMachine {
      
  _wateramount = 0 ;

  set wateramount(value){
    if( value<0){
      console.log("Get su doldur")
    }else{
      this._wateramount=value;
      console.log('Di yaxwida.Dahsdi')
    }
  }

  get wateramount(){
    return this._wateramount
  }

  constructor(power){
    this._power=power
console.log(`This machine power is ${power} W`)
  }
}

let coffemachine = new CoffeMachine(300)
console.log(coffemachine.wateramount)

coffemachine.wateramount= 100
console.log(`This machine water in is ${coffemachine.wateramount} L`)