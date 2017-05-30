class Animal{
	name:string;
	type:string;
	constructor(name:string,type:string){
		this.name=name;
		this.type=type;
	}
	food(message:string){
		return message;
	}
}
var cow=new Animal("COW","Domestic")
console.log(cow.food("grass"))

var lion=new Animal("LION","WILD")
console.log(lion)