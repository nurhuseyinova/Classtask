////1
function reverseString(str){
    return str.split("").reverse().join('')

}
console.log(reverseString("hello"));

function reverseString2(str){
    
    let result=''
    for(let i=str.length-1;i>=0;i--){
        result=result+str[i];
    }
return result;
}
console.log(reverseString2("hello"));

function polidrom(str){
   if(str===str.split("").reverse().join('')){
    return `Yes,${str}`;
   }
   else{
    return `No ${str}`;
   }

}
console.log(polidrom('hello'))
console.log(polidrom('refer'))

let arr=[1,2,2,2,4,3,3,2,4,7,5,7,6]
function removeDubilacete(array){
    return array.filter((el,i,arr)=>array.indexOf(el)===i);



}
console.log(removeDubilacete(arr));

function removeDubilacete2(array){
    return [...new Set(array)];



}
console.log(removeDubilacete2(arr));

function removeDubilacete3(array){
    let result=[]
    return array.filter((el,i,arr)=>!result.includes(el) && array.indexOf(el)===i);



}
console.log(removeDubilacete3(arr));

function generateOtp(){
    return Math.round(Math.random()*10000);

}
console.log(generateOtp());
console.log(generateOtp());
console.log(generateOtp());


function generateOtp1(){
    let str=''
    for(let i=0; i<4;i++){
        str+=Math.floor(Math.random()*10)

    }
    return str;

}
console.log(generateOtp1());
console.log(generateOtp1());
console.log(generateOtp1());

function generateOtp2(){
    let digits='0123456789'
    let str=''
    for(let i=0; i<4;i++){
        str+=digits[Math.floor(Math.random()*10)]

    }
    return str;

}
console.log(generateOtp2());
console.log(generateOtp2());
console.log(generateOtp2());


