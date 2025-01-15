const starship = function (energy) {
    this.energy = energy;
    this.shoots = 100;
};

const starship1 = new starship(100);

starship.prototype.life = 3; // add properties and methods in class
starship.prototype.shoot = function(){
    if(this.shoots > 0){
         this.shoots--;
    }
};

console.log(starship);
console.log(starship1);
console.log(starship1.life);
console.log(starship1.energy);

starship1.shoot();
starship1.shoot();
starship1.shoot();

console.log(starship1.shoots);
