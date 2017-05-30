var superHeros:number[]=[];
superHeros=[1,2,3]
superHeros.unshift(0);//adding at start
superHeros.push(4)//adding at end
superHeros.pop()//removes from end
superHeros.shift()//removes from starting


var values:string[]=[];
values=["A","B","C","D","E"];
values.unshift("a")
values.push("F")
values.pop()
values.shift()

for(var index in values){
console.log(index)	
}
for(var value of values){
	console.log(value)
}

console.log("****Details******")
var people:any[] = [];
people.push({name:"Alekya",city:"Vizag"})
people.push({name:"usha",city:"HYD"})
people.push({name:"vasavi",city:"GWK"})
people.push({name:"Sathya",city:"Akp"})

console.log(people)

for(var i=0;i<=people.length-1;i++){
	console.log(people[i])
}

var sum = 123;
if(true){
	var sum=456;
}
let newSum=567;
if(true){
	let newSum=678
}

let num=5;
num=6;

const PI=3.14;
if(true){
	const PI =4.56;
}
sample()
console.log(sum)

/*console.log(superHeros)*/