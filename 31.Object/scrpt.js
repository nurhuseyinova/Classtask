
////1+
// function filterArray(arr){
//    return arr.filter(el=>typeof el=='number');

// }
// console.log(filterArray([1, 'c', 2, "a", "b"]));
// console.log(filterArray(['4', 1, "a", "b", 0, 15]));

/////2+
// function sliceSum(arr, n){
//     return arr.slice(0,n).reduce((acc,curr)=>acc+curr,0)
// }
// console.log(sliceSum([9, 8, 7, 6], 3));
// console.log(sliceSum([1, 3, 2], 2));
// console.log(sliceSum([3, 6, 2], 0));


////3
// function spelling(str){
//     return str.split('').map((el,i)=>str.slice(0,++i));

// }
// console.log(spelling("bee"))
// console.log(spelling("happy"))

// /////4
// function hashPlusCount(str){
//     let hashes=0
//     let pluses=0
//    str.split``.map((item)=>item==="#"? ++hashes: ++pluses);
//    return [hashes,pluses];

// }
// console.log(hashPlusCount("###+"));
// console.log(hashPlusCount("#+++#+#++#"));
// console.log(hashPlusCount(''));


/////5
// function reverseCase(str){
//     return str.split('').map((el)=>el===el.toLowerCase()?el.toUpperCase():el.toLowerCase()).join``

// }console.log(reverseCase("Happy Birthday"));
// console.log(reverseCase("MANY THANKS"));
