//WAYS POF CREATING STRING




//using string literal
const myName='niraj';


//using the constructor function
const fName=new String('kumar');

const result=myName===fName;  //gives false bcause its data type is different

console.log(myName,fName);



//-----string concatenation

//+operator


const str1='hello';
const str2='how are you?';

const result1=str1+" "+str2;
const result2=str1.concat(" "+str2);
console.log(result1);


//--------template literal
//--------string template
//---------back tick syntax
//--------template strings

const msg=`Good Day brother`;
const msg2=`"Good Evening"`;
console.log(msg);
console.log(msg2);


//multiline string


const msg3=
`
welcome
to 
my
channel
`;
console.log(msg3);

//interpolation

const age=21;
const welcome=`this is your age ${age}`;


//------------length;it is property not method

const lastName='kumar';
const result4=lastName.length;
console.log(result4);


//1. no. of letters in string

function stringLength(str){
    return str.length;
}
const res1=stringLength('niraj kumar');
const res2=stringLength('netaji subhash engineering college');
const res3=stringLength('kolkata west bengal');
console.log(res1);
console.log(res2);
console.log(res3);

//2.create a function to check if a string is longer than a certain number of characters

const isLongerThan=function(str,num){
    if(str.length>num){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLongerThan('niraj',5));







//-------indexOf--toUpperCase---toLowerCase----trim



//1.trim
const str5='     coding     time        ';
console.log(str5);
console.log(str5.length);
const res5=str5.trim();
console.log(res5);
console.log(res5.length);


//2.lower case to uppercase and vise versa
const str6="coding Time";
console.log(str6.toLowerCase());
console.log(str6.toUpperCase());


//3.indexOf
const str7="coding time";
console.log(str7.indexOf("c"));



//create a function to check if a string cntains whitespace

const whiteSpace=function(str){
    if(str==str.trim()){
        return false;

    }
    else{
        return true;
    }

}
console.log(whiteSpace('niraj'));
console.log(whiteSpace('niraj    '));

//second method
function containWhiteSpace(str8){
    return str8.indexOf(' ')!==-1;
}
console.log(containWhiteSpace('nsec'));
console.log(containWhiteSpace('nsec     '));


//.......split---reverse---join
const str9='you';
const res9=str9.split('');
console.log(res9[0]);
console.log(res9);

//join
const convertedStr9=res9.join("");
console.log(convertedStr9);

//reverse

const food=["apple","guava","mango"];
const reversorder=food.reverse();
console.log(food);



//question:
//create afunction to separate a string using any character
 const separateString=function(arr,char){
    return arr.join(char);
 }
 const result9=separateString(["js","css","node js"],"_");
 console.log(result9);


 /*
 1. create a function to reverse a string
 2.the function should return the string in reverse order
  */
const reverseStr10=function(str11){
    return str11.split("").reverse().join("");
}
console.log(reverseStr10("nodejs"));

//------repeat() method

const str12='welcome to nsec ';
console.log(str12.repeat(5));


//create afunction to repeat a string number of times
function repeatStr(str13){
    return str13.repeat(5);
}
console.log(repeatStr('node js '));

//startsWith()

const str14="welcome";
console.log(str14.startsWith("W"));

//endsWith()
const str15="welcome";
console.log(str15.endsWith("e"));

//includes()
const str16="are you a devloper?";
console.log(str16.includes("you"));
console.log(str16.includes("you",8));


//slice

const str17="i am developer";
console.log(str17.slice(0,5));

//string comparison

console.log("a">"b");
console.log("A"<"a"); //lower case is more than upper case
console.log("Glow">"Glew");
