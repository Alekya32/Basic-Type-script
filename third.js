var superHeros = [];
superHeros = [1, 2, 3];
superHeros.unshift(0); //adding at start
superHeros.push(4); //adding at end
superHeros.pop(); //removes from end
superHeros.shift(); //removes from starting
var values = [];
values = ["A", "B", "C", "D", "E"];
values.unshift("a");
values.push("F");
values.pop();
values.shift();
for (var index in values) {
    console.log(index);
}
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var value = values_1[_i];
    console.log(value);
}
console.log("****Details******");
var people = [];
people.push({ name: "Alekya", city: "Vizag" });
people.push({ name: "usha", city: "HYD" });
people.push({ name: "vasavi", city: "GWK" });
people.push({ name: "Sathya", city: "Akp" });
console.log(people);
for (var i = 0; i <= people.length - 1; i++) {
    console.log(people[i]);
}
var sum = 123;
if (true) {
    var sum = 456;
}
var newSum = 567;
if (true) {
    var newSum_1 = 678;
}
var num = 5;
num = 6;
var PI = 3.14;
if (true) {
    var PI_1 = 4.56;
}
sample();
console.log(sum);
/*console.log(superHeros)*/ 
