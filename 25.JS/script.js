
//1
let myText='An Array is a collection of items of same data type stored at contiguous memory location.'
let sum=0
for(let i=0; i<=myText.length;i++){
    
    if(myText[i]=="a" || myText[i]=="A"){

        sum++;
    }
}
console.log(sum);

//2

const arr1=[1, 2, 4, 5, 7, 9, 13, 22]
let summ=0
for(let i=0; i<arr1.length; i++){
    summ+=arr1[i];
}
console.log(summ);

//3

const arr2=[false, 0, 2, true, 23, undefined, 'are u stack?', 'come on']
for(let i=0; i<arr2.length; i++){
    if(i%2==1){

        if(i==0) continue;
        console.log(arr2[i]);
    }
}

//4?
// const newText2=0
// let text1='How is it going?'
// for(let i=0; i<text1.length; i++){
//     if(text1[i]=="i") continue;
//     else{

//         newText2+=text1[i];
//     }
// }
// console.log(newText2);

//5
const numbersArr=[2, false, '5', 'true', 9, 0, '1']
let summs=0
for(let i=0; i<numbersArr.length; i++){
    if(typeof numbersArr[i]=='number'){ 
        summs+=numbersArr[i];
    }
}
console.log(summs);


//6
const mixType=[1, '3', 4, false, null, 22, true]
const result=mixType.map(String)
console.log(result);

//7
const myObj={
    color:'red',
    width:320,
    height:200,
    padding:4,
    fontSize:'22px'
}
for(let key in myObj){
    if(typeof myObj[key]=='number'){
        myObj[key]*=2;
    }
}
console.log(myObj);

