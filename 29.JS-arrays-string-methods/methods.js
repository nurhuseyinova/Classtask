// /////1+
// const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan'];
// let result=arr1.map((el)=>el[0].toUpperCase()+el.slice(1,-1)+el.at(-1).toUpperCase());
// console.log(result);

//////2
// let text = 'We are MERN-Stack developers';
////1+
// console.log(text.replace("MERN-Stack","Front-end"));

////2+
// let result1=text.toLowerCase();
// console.log((result1.replaceAll("e","a")));

////3+
// console.log(text.concat("in Microsoft!"));

////4+
// let newArr=[]
// text.split("").map((el,index)=>el.toLowerCase()==='r' ? newArr.push(index):newArr)
// console.log(newArr);

////5+
// let result2=text.toLowerCase();
// console.log(result2.indexOf('r',5));

////6
// let text = 'We are MERN-Stack developers';
// let vowels = ['a', 'i', 'o', 'u', 'e'];
// let result=text.toLowerCase().split('');
// let newArr2=result.filter((el)=>result.includes(el)===vowels.includes(el)? el :null);
// console.log(newArr2);



//////3+
// const arr3 = [
//         {
//             region: 'Yasamal',
//             area: 170,
//         },
    
//         {
//           region: 'Nizami',
//           area: 20,
//         },
    
//         {
//             region: 'Nesimi',
//             area: 10,
//         },
    
//         {
//             region: 'Sebail',
//             area: 30,
//         },
//         {
//             region: 'Xetai',
//             area: 30,
//         },
    
//     ]
//     let calcArea=()=>{
//     return ( arr3.reduce((acc, curr)=>curr.region.length==6 ? acc+curr.area:acc,0));
//     }
//     console.log(calcArea());
    
/////4+
// const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
// console.log(arr4.sort((a,b)=>a-b));


////5+
// const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
// console.log(arr5.flat(Infinity));

/////6+
// const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
// let result3=colors.sort();
// let result4=result3.sort(((a,b)=>a.length-b.length));
// console.log(result4);


 
