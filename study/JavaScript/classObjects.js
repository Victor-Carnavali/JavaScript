class Car {
    constructor(name, type) {
        this.name = name;
        if (type == 1) {
            this.type = "Sport";
            this.velMax = 300;
        } else if (type == 2) {
            this.type = "Utility";
            this.velMax = 100;
        } else if (type == 3) {
            this.type = "Normal";
            this.velMax = 180;
        }
    }

    getVelMax() {
        return this.velMax;
    }

    getType() {
        return this.type;
    }

    getName() {
        return this.name;
    }

    getInfoArray() {
        return [this.name, this.type, this.velMax];
    }

    info() {
        console.log(`Name ${this.name}`);
        console.log(`Type of car is:  ${this.type}`);
        console.log(`Max velocity ${this.velMax}`);
        console.log(`-------------------------------`);
    }
}

let car1 = new Car("Ferrari", 1);
let car2 = new Car("Corolla", 3);

console.log(car1.getInfoArray());
car2.info();
