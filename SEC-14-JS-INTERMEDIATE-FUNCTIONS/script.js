// function fnName(parameter){
//     //code to be executed
// }

function sayHello(){
      console.log('welcome to function');
}

//calling a function
sayHello();

//function expression

let greeting=function(){
    console.log('good moring');
}
greeting();


//create a function to greet your mom

let greetMom=function(){
    console.log("good morning mom!");
}
greetMom();


//parameters and arguments


const addNum=function(x,y){
    // let x=18;
    // let y=10;
    let result=x+y;
    console.log(result);


}
addNum(20,10);
//create a function that will multiply 3 numbers and display the answer


const mul=function(n1,n2,n3){
    res=n1*n2*n3;
    console.log(res);
    
}
let ans=mul(4,8,7);
alert(ans);