//1
const arr1=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr1);


//2
const arr2=[ 1, true, "Nurlana"]
console.log(arr2);

//3
const arr3=[0, 1, 2, 3, 4, 5]
console.log(arr3);
const arr4=arr3
console.log(arr4);

//4
const arr5=[0, 1, 2, 3, 4, 5, 6, 7]
arr5.push(8 ,9)
console.log(arr5);

//5
const arr6=[]
arr6.push(5, 6, 7)
console.log(arr6);
arr6.shift()
console.log(arr6);
arr6[0]=2
console.log(arr6);

//6
const arr7=[name="Nurlana", surname="Huseyinova", age=19, city="Quba" ]
console.log(arr7);
arr7[3]="Qusar"
console.log(arr7);

//7
const arr8=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let num of arr8){
    console.log(num);
}


//8

const obj1={
    id:1,
    firstName:"Nurlana",
    lastName:"Huseyinova",
    location:"GDU 2"
}
console.log(obj1);

//9

const obj2=obj1
console.log(obj2);

//10
const obj3=obj1
obj1.id=2
console.log(obj3);

//11

const obj4=obj1
for(let value in obj4){
    console.log(obj4[value]);
}

//12
const obj5=obj1
for(let key in obj5){
    console.log(obj5[key]);
}

//13
const obj6=obj1
delete obj6.location
console.log(obj6)

//14
const newobj=Object.assign(obj1)
console.log(newobj)



