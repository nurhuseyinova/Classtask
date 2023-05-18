// 1
// function fun1(num) {
//   return num > 1 ? num * fun1(num - 1) : 1;

// }
// console.log(fun1(4));
// console.log(fun1(5));
// console.log(fun1(0));
// console.log(fun1(-1));
//2
// function fun2(num) {
//     return num>1 ? num * fun2(num- 2) : 1;
//   }
//   console.log(fun2(4));
//   console.log(fun2(9));
//   console.log(fun2(1));
//   console.log(fun2(-3));

//3
// function sumArray(arr) {
  //1
  //    let arr1= arr.flat(Infinity)
  //   return arr1.reduce((acc,curr)=>acc+curr,0)
  //2
//   return arr.reduce((acc, curr) => Array.isArray(curr) ? curr : acc + curr, 0);/////?
// }
// console.log(sumArray([4, 9, [2, [1]], 8, 9]));
