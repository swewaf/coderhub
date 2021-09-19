console.log("i’m programer");


console.log('A\tB\tC\tD\tE');// space 
console.log('A\nB\nC\nD\nE'); //new line
console.log('It\'s such an interesting language');// تنصيص مفرد
console.log("Welcome to \"JavaScript\"");  // تنصيص 2
console.log('The \\ character is called backslash.');//double slash

//arrays
// add color to last
let colors = ["red", "green", "blue"];
colors.push('black');
console.log(colors);


//delete last color
let colors1 = ["red", "green", "blue",'black'];
colors1.pop();
console.log(colors1); 

let blueColor = colors1.pop();
console.log(blueColor); 

//is array
let color = 'black';
let colorss = ['red', 'green', 'blue'];
console.log(Array.isArray(color))
console.log(Array.isArray(colorss))


//for loop

for (let i = 5; i > 0; i--) {
    console.log(i);
}

//while loop
let number = 5;
while (number > 0) {
    console.log(number);
     number--;
}
//test
for(let n=0;n<5;n++){
if(n%2==0){
console.log(n);
continue;
}
console.log("odd");
}

const fruits = ['Apple', 'Lemon', 'Mango', 'Apple', 'Orange'];
const index = fruits.lastIndexOf('Apple', -1)
console.log(index)



