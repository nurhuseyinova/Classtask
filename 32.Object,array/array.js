// 1.1 Splice 'arr' //  [7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1]
// 1.2 Show only last three values of 'arr' // [ false, 1, null]
// 1.3 Concat [true,'8','myName'] in front of the 'arr'. //[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// 1.4 Find second 7's index. //4
// 1.5 Filter only true value // ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// 1.6 Sum only integer values of 'arr' //22
// 1.7 Find falsy values' length //4


////1
let arr = ['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null];
//1+
// console.log(arr.slice(1,arr.length-1));
// console.log(arr.splice(1, arr.length-2));

//2+
// console.log(arr.filter((el)=>!el));
//3+
// let newArr=[true,'8','myName']
// console.log(newArr.concat(arr));
//4+
// console.log(arr.indexOf(7,2));
//5+
// console.log(arr.filter((el)=>el));
//6+
// let newArr2=arr.filter((el)=>typeof el=='number');
// console.log(newArr2.reduce((acc,curr)=> acc+curr,0));
//7+
// console.log(arr.filter((el)=>!el));

////2
//1+
// function findSmallest(inks){
//     // return inks["yellow"]
//     return Math.min(...Object.values(inks))
// return Math.min.apply(null,Object.values(inks))


// }
// console.log(findSmallest({
//         "cyan": 23,
//         "magenta": 12,
//         "yellow": 10
//     })); // 10
    
//     console.log(findSmallest({
//         "cyan": 432,
//         "magenta": 543,
//         "yellow": 777
//     }));  // 432
    
//     console.log(findSmallest({
//         "cyan": 700,
//         "magenta": 700,
//         "yellow": 0
//     })); // 0

//2+
// function maxNums(arr){
//     return arr.map((el)=>Math.max(...el))
// }
// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]


//3

// function findLetterIndex(text,letter){
// //    let first=text.indexOf(letter)
// //    let last=text.lastIndexOf(letter)
// //    return [first, last];

// return [text.indexOf(letter),text.lastIndexOf(letter)]
// }
//  console.log(findLetterIndex("hello", "l")); // [2,3]
// console.log(findLetterIndex("happy", "h")); //[0, 0]
//4
// const checkNum=(arr,n)=>{
//     return arr.some(item=>arr.some(el=>item+el==n))
// }
// console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
// console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
// console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false


