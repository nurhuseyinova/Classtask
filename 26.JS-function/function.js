//1
const arr1=['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'y', 'u']
function getRandomLetter(){
    return (arr1[Math.round(Math.random()*arr1.length)]);

}
console.log(getRandomLetter());

//2
const arr2=[1, 2, 3, 4, 14, 5, 6, 8]
let sum=0
function calcSum(){
    for(let key of arr2)
   if(key%2==0){
    sum+=key
   }
    return (sum);
}
console.log(calcSum());

//3
const arr3=[-3, -5, -9, 3, 0, true, false, -22]
let positiveNum=[]
let getPositiveNam=function(){
    for(let key of arr3)
    if(typeof key=='number'){
        positiveNum.push(Math.abs(Number(key)))

    }
    return positiveNum;

}
console.log(getPositiveNam())

//4
const arr4 = [4, 9, 16, 20, 24, 43, 81, 100];
let sqrt = [];
let calcSquareRoot = () => {
  for (let item of arr4){
      sqrt.push(parseInt(Math.sqrt(item)));
  }
  return sqrt;
};
console.log(calcSquareRoot());

//5
const arr5=[
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    },
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    },
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    }
]

let fillInfo=()=>{
    for(let item of arr5){
        item.name="Nurlana",
        item.surname="Huseyinova"
        item.city="Shamkir"



    }
    return arr5;


}
console.log(fillInfo());