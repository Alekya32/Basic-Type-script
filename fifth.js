var Animal = (function () {
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    Animal.prototype.food = function (message) {
        return message;
    };
    return Animal;
}());
var cow = new Animal("COW", "Domestic");
console.log(cow.food("grass"));
var lion = new Animal("LION", "WILD");
console.log(lion);
