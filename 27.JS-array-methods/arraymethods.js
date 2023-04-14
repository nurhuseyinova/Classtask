//1
// const arr1=['a', 'b', 'c', 'd', 'e']
//1
// arr1.splice(1, 1)
//2
// arr1.splice(2, 2)
//3
//arr1.splice(arr1.length-1)
//4
//arr1.splice(arr1.length-3, arr1.length-1)
//5
//arr1.splice(3, 0, 3, 4)
//6
// arr1.splice(0, 2, 'A','B')
// console.log(arr1);


//2
// const arr2=['user1', 'user2', 'user3', 11, 3, 5]
//1
//const newArr=arr2
//2
// const newArr=arr2.slice(1,5)
//3
//const newArr=arr2.slice(2)
// console.log(newArr);

//3
// const arr3=[1, 2, 3]
// const arr33=[4, 5, 6]
// const newArr3=arr3.concat(arr33,{
//     letter:['a','b']
// })
// console.log(newArr3);

//4
// const arr4=['name', 'surname', 10, 'age', 'city', 'uni', 80, 20]
//1
// arr4.forEach((value)=>{
//     console.log(value);
// })
//2
// arr4.forEach((value)=>{
//     if(typeof value=='number'){
//     console.log(value*2);
// }
// })

//5
//const arr5=[4, 5, 6, '2', 6, true, undefined, '55']
//1
// let newArr5=arr5.map((value)=>{
//     console.log(value);

// })
//2
// let newArr5=arr5.map((value)=>{
//     if(typeof value=='number'){
//         return(value*5);
//     }
// })
//3
// let newArr5=arr5.toString((value)=>{
//     return value;
// })
//4
// let newArr5=arr5.map(Boolean);
//5
//let newArr5=arr5.map(Number);
//console.log(newArr5);

//6
//const mixArray=[ '1', 2, 4, 'a',false, '9', 12 , '42', undefined, 3, true, null]
//1
// mixArray.find((value)=>{
//     if(typeof value=='number'){
        
//         console.log(value);
//     }
// })
//2
// mixArray.find((value)=>{
//     if(typeof value=='string'){
        
//         console.log(value);
//     }
// })
//3
// mixArray.find((value)=>{
//     if(typeof value=='boolean'){
        
//         console.log(value);
//     }
// })
//4
// let mixArray4=mixArray.find((value)=>!value);
//      console.log(mixArray4);
    






