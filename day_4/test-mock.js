// function warnTheSheep(queue) {
//     // your code here
//     const namaArray = ["sheep", "sheep", "sheep", "wolf", "sheep" ];
//     for (let i=0; i<namaArray.length; i++) 
// }


// // Test Function do not edit
// function Test(fun, result) {
//     console.log(fun === result)
// }


// // Test assertions
// Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
// Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
// Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
// Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");


// function reverseMyName(str) {
//     var reverseArray = splitString.reverse();
//     reverseMyName('Michael Jackson');
//     console.log(reverseMyName("Michael Jackson"));
//     return str;
// }
function reverseString(str) {
    return str.split('').reverse().join('');
   }
   console.log(reverseString('A'));
   console.log(reverseString('Michael Jackson'));
   console.log(reverseString('Alvian Zachry Faturrahman'));
   console.log(reverseString(''));


// const Test = (fun, result) => 
// console.log(reverseMyName(fun) === result)

// Test("A", "A")
// Test("Michael Jackson","noskcaJ leahciM")
// Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
// Test("", "")