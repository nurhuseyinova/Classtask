//1+
//  function fun1(arr) {
//    return arr.sort((a,b)=>a.length-b.length)
//  }
// console.log(fun1(["may", "april", "september", "august"]));  // ['may', 'april', 'august', 'september']
// console.log(fun1(["a", "ccc", "dddd", "bb"]));  //  ['a', 'bb', 'ccc', 'dddd']
//2+
//  function fun2(str) {
//first way
//     let max;
//     let min;
//     let arr=[]
//     arr=str.split(" ").map(Number)
//     max=Math.max(...arr)
//     min=Math.min(...arr)
// return `${max} ${min}`

//second way?
// let arr=[]
//    arr=str.split(" ")
//    return `${Math.max.apply(" ")}`

//  }
//  console.log(fun2("2 3 4 5 6"));    // '6 2'
//  console.log(fun2("1 2 -6 4 7"));    // '7 -6'

//3+
// function fun3(tileHand) {
//    return tileHand.reduce((acc,curr)=>acc+curr.score,0)

// }
//  console.log(fun3([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
// ])); // 28

// console.log(fun3([
//         { tile: "B", score: 2 },
//         { tile: "V", score: 4 },
//         { tile: "F", score: 4 },
//         { tile: "U", score: 1 },
//         { tile: "D", score: 2 },
//         { tile: "O", score: 1 },
//         { tile: "U", score: 1 }
//     ])); //15

//4
// function fun4(...boxes) {
//     ////1
// //   return boxes.reduce(
// //     (acc, curr) => acc + curr.reduce((mul, item) => mul * item, 1), 0
// //   );
// ////2
// return boxes.reduce((acc, [f,s,t])=>acc+f*s*t,0)
// }
// console.log(fun4([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //63
// console.log(fun4([2, 2, 2], [2, 1, 1]));  // 10

// //5+
// function fun5(people) {
//   ////1
//   // let value=Object.values(people)
//   // let max=Math.max(...value)
//   // return Object.keys(people).filter(key=>people[key]==max).toString()

//   ////2
//   return Object.keys(people).reduce((a, b) =>
//     people[a] > people[b] ? a : b
//   );
// }
// console.log(
//   fun5({
//     Emma: 71,
//     Jack: 45,
//     Amy: 15,
//     Ben: 29,
//   })
// ); //Emma

// console.log(
//   fun5({
//     Max: 9,
//     Josh: 13,
//     Sam: 48,
//     Anne: 33,
//   })
// ); // Sam
