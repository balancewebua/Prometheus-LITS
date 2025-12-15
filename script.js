//функція-стрілка
let sum_div_ar = (a, b);
return a + b;

console.log(sum_div_ar(225, 90));

//функція-стрілка 11:40
function sum_ar(a, b) {
  return a + b;
}

console.log(sum_ar(225, 90));

let sum_true_ar = (a, b) => a + b;
console.log(sum_true_ar(225, 90));

//функція new
let f = new Function("x", "y", "return x + y");
console.log("New: ", f(3, 5));

//функція стрілка
let arrayFunction = (b, c) => b + c;
let aF = (b) => 2 * b;
console.log(arrayFunction(5, 5), aF(3));

// функції 10:32
let empty = function (a, b) {
  if (!a || !b) return;
  return a / b;
};
console.log(empty(3, 4));

// функції 9:09
function double(valiable) {
  return 2 * valiable;
}
function sum(a, b) {
  let c = a + b; // локальні змінні зазвичай потрібні, щоб передавати деякі дані в наступну функцію
  return double(c) + a;
}
console.log(sum(3, 5));

// функції 6:30

let count = function (count1 = 1, count2 = 9, count3 = 15) {
  let resultCount = count1 + count2 + count3;
  console.log("resultCount = ", resultCount);
};

count();

// функції 5:12

function count_f(count1 = 1, count2 = 9, count3 = 15) {
  let resultCount = count1 + count2 + count3;
  console.log("resultCount = ", resultCount);
}

count_f();

let person = {
  name: "ComeBack",
  age: 40,
};
for (let a in person) {
  console.log(a, person[a]);
}

let arr = ["Banana", "Orange", "Apple", "Pear"];

for (a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let age = 40;
let prefix;

if (age === 1) {
  prefix = "year";
} else {
  prefix = "years";
}

console.log(`You are ${age} ${prefix} old`);

let resultAge = age === 1 ? "year" : "years";
console.log(age + " " + resultAge);

let timeOfOder = 20;
let smsClosed = "Sorry the office is closed.";

if (timeOfOder < 9 || timeOfOder > 18) {
  console.log(smsClosed);
}

let skills = ["web", "bots", "seo"];

let levelUp = skills.push("ppc", "txt");

console.log(levelUp);
console.log(skills);

console.log(skills.join(" + "));
console.log(skills.slice(0, 2));
console.log(skills.splice(4, 1, "tgt"));
console.log(skills.reverse());

let balanceString = "Liberty";

console.log(`Will be ${balanceString}`);

let balanceBooling = true;

console.log(`It is ${balanceBooling}`);

let random;

console.log(`random is ${random}`);

let liberty_1 = Symbol("id");

console.log(liberty_1);

let balanceObject = {
  profession: {
    first: "Front-end",
    second: "Bot developer",
  },
  credo: "Be brave",
};

console.log(balanceObject);
