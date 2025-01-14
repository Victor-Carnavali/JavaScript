class car {
    constructor(name, doors) {
        this.name = name;
        this.doors = doors;
        this.start = false;
        this.velocity = 0;
        this.color = undefined;
    }

    onEngine = function () {
        this.start = true;
    };
    offEngine = function () {
        this.start = false;
    };
    setColor = function (color) {
        this.color = color;
    };
}

class Military extends car {
    constructor(name, doors, shielding, ammo){
        super(name, doors);
        this.shielding = shielding;
        this.ammo = ammo;
        this.setColor("Green");
    }
    shooting = function(){
        if(this.ammo > 0) {
            this.ammo--;
        } else {
            console.log(`Your vehicle has ${this.ammo} ammo, reload please!`);
        }
    }
}

const car2 = new Military("Tank", 1, 100, 50);
car2.setColor("blue");

const car1 = new car("normal", 4);
car1.onEngine();
car1.setColor("Black");

console.log(`Name: ${car1.name}`);
console.log(`Doors: ${car1.doors}`);
console.log(`Engine: ${(car1.start)? "on":"off"}`);
console.log(`Velocity: ${car1.velocity}`);
console.log(`Color: ${car1.color}`);
console.log("--------------------------------------");

console.log(`Name: ${car2.name}`);
console.log(`Doors: ${car2.doors}`);
console.log(`Engine: ${(car2.start)? "on":"off"}`);
console.log(`Velocity: ${car2.velocity}`);
console.log(`Color: ${car2.color}`);
console.log(`Shielding: ${car2.shielding}`);
console.log(`Ammo: ${car2.ammo}`);
console.log("--------------------------------------");