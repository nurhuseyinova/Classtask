//1
// let arr=[2,4,-3,-43,41,-3];
// let positive=[]
// function findPositives(arr){
//    return arr.filter((elem)=>elem>0);

// }
// console.log(findPositives(arr));
//2
// function isRectangle(a,b,c){
//     if(a**2+b**2==c**2 || a**2+b**2==c**2||a**2+b**2==c**2){
//         return 'yes';
//     }
//     else{
//         return 'no';
//     }

// }
// console.log(isRectangle(3,4,5));
// console.log(isRectangle(3,6,5));
// console.log(isRectangle(4,5,3));

//3
// let fac=1
// function isFactorial(n){
//     for(let i=2; i<=n; i++){
//         fac*=i

//     }
//     return fac;
// }
// console.log(isFactorial(5))

// const countries=['Finlanad','Denmark','Swedan','Azerbaijan','Iceland'];
// function lengthsArr(arr){
//   let lengthsArr1=countries.map((value)=>value.length)
// // return lengthsArr1;
//  return arr.find((value)=>value.length===Math.max(...lengthsArr1))
//    //return countries.filter((element)=>element==Math.max(countries.length));

// }
// console.log(lengthsArr(countries));

//5
// const webTechs=['html','CSS','js','react','Redux','Node','MongDB'];
// function findWebTechs(arr){
//    return webTechs.find((el)=>el.toUpperCase()===el);

// }
// console.log(findWebTechs(webTechs));

let arr2 = [
  {
    name: "test",
    key: 9,
  },
  {
    name: "task",
    key: 4,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 2,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "Trust",
    key: 8,
  },
  {
    name: "test",
    key: 12,
  },
  {
    name: "last",
    key: 6,
  },
  {
    name: "tanqo",
    key: 1,
  },
  {
    name: "elephant",
    key: 13,
  },
  {
    name: "Love",
    key: 11,
  },
  {
    name: "small",
    key: 7,
  },
  {
    name: "Little",
    key: 10,
  },
];

// //  console.log(arr2.filter(el)=>el.name[0]==t)

// console.log( 
//   arr2.filter((el) => el.name.startsWith ("t") && el.name.endsWith ("t"))
// );


// let lengthsArr=arr2.map((el)=>el.name.length);
// let maxlengths=Math.max(...lengthsArr);
// console.log(arr2.find((el)=>el.name.length===maxlengths));


// function findElem(array){
// return array.filter((el)=>el.key>10 && el.name.toLocaleLowerCase().startsWith('l'));
// }
// console.log(findElem(arr2));


// let arr=[0,1,2,3,4]
// console.log(arr.unshift(arr.pop()));
// console.log(arr.unshift(arr.pop()));
// console.log(arr)

function countArr2(arr){
    return arr.count((el)=>el.name=='t');

}
console.log(countArr2(arr2))