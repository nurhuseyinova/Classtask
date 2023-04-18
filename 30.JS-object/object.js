////1

// let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
// let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
// let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"

// function secretName(arr){
// return(arr.map(el=>el[0]).join('') );



// }
// console.log(secretName(names1));
// console.log(secretName(names2));
// console.log(secretName(names3));

// ////2
// const users = [
//         { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
//         { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
//         { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
//         { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
//         { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
//         { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
//     ]
// //1
// console.log(users.filter((el)=>el.uni=="UNEC"|| el.surname[0]=="r"));
//2
// console.log(users.filter((el)=>el.age==22||el.name[0]=='a'));
//3

// console.log(users.map((el)=>el.gender=="male"?`Mr ${el.name}`:`Mrs ${el.name}`));
//4
// console.log(users.sort((a,b)=>a.age-b.age));