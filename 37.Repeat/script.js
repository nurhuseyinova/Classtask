const arr=['6',8,NaN,"0",5,4,'true',false,7,'a',undefined,8,true]
//1
// let falsyValue=(anyArr)=>{
//     let array=[]

//     for(let i=0;i<anyArr.length;i++){
//         if(!anyArr[i]){
//           array.push(anyArr[i]);
//         }
//     }
//     return array;

// }
// console.log(falsyValue(arr));
//2
// let falsyValue=(anyArr)=>{
//     let array=[]

//     for(let i=0;i<anyArr.length;i++){
//         if(typeof anyArr[i]==="string"){
//           array.push(anyArr[i]);
//         }
//     }
//     return array;

// }
// console.log(falsyValue(arr));
//3
// let falsyValue=(anyArr)=>{
//     let array=[]

//     for(let i=3;i<8;i++){
        
//           array.push(anyArr[i]);
        
//     }
//     return array;

// }
// console.log(falsyValue(arr));
//4
// let sumArr=(anyArr)=>{
//     let sum=0

//     for(let i=0;i<anyArr.length;i++){
        
//         if(typeof anyArr[i]=="number" && anyArr[i]){
//                 sum+=anyArr[i]
//            }
        
//     }
//     return sum;

// }
// console.log(sumArr(arr));
// //5
// let findLastIndex=(anyArr)=>{
//     for(let i=2;i<anyArr.length;i++){
        
//        if(anyArr[i]==8){
//         return i;
//        }
//     }
// }
// console.log(findLastIndex(arr));

//6

// let reverse=(anyArr)=>{
//         let array=[]
    
//         for(let i=anyArr.length-1;i>=0;i--){
//             array.push(anyArr[i])
//         }
//         return array;
    
//     }
//     console.log(reverse(arr));
// //7 asc
// const arrNum=[3,1,22,0,12,11,9,8,10,14,41,55,51]
// let sortArr=(anyArr)=>{
        
    
//         for(let i=1;i<anyArr.length;i++){
//           for ( let j=0;j<i;j++)  {
//             if (anyArr[i] < anyArr[j]) {
//                let array = anyArr [i];
//           anyArr [i]= anyArr [j];
//           anyArr [j] = array;
//             }
//           }
//         }
//         return arrNum;
//     }
//     console.log(sortArr(arrNum));

//7 dec  
const arrNum=[3,1,22,0,12,11,9,8,10,14,41,55,51]
let sortArr=(numbers)=>{

for (let i = 0; i < numbers.length - 1; i++)
    {
      for(let j = 0; j < numbers.length - 1; j++)
      {
        if(numbers[i] < numbers[j + 1] && i < (j + 1)) //NOTE: additional condition for indices
        {
         let tempVar = numbers [j + 1];
          numbers [j + 1]= numbers [i];
          numbers [i] = tempVar;
        }
      }
    }
  return arrNum
}
    console.log(sortArr(arrNum));



//8
//     for(int i = 0; i < nums.length - 1; ++i){
//         for(int j = i + 1; j < nums.length; ++j){
//             if(nums[i]>nums[j]){
//                 int tempVar = nums[i];
//                 nums[i] = nums[j];
//                 nums[j] = tempVar;
//             }
//         }
//     }
    
//     return nums;
// }




    // for (int i = 0; i < numbers.length - 1; i++)
    // {
    //   for(int j = 0; j < numbers.length - 1; j++)
    //   {
    //     if(numbers[i] < numbers[j + 1] && i < (j + 1)) //NOTE: additional condition for indices
    //     {
    //       tempVar = numbers [j + 1];
    //       numbers [j + 1]= numbers [i];
    //       numbers [i] = tempVar;
    //     }
    //   }
    // } 



