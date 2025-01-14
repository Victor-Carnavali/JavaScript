const person = {
    name: this.name,
    age: this.age,
    getName: function(){
        return this.name;
    },
    getAge: function(){
        return this.age;
    },
    setName: function(name){
        this.name = name;
    },
    setAge: function(age){
        this.age = age;
    },
}

person.setName("wilclerson");
person.setAge(20);
console.log(person.name);
console.log(person.age);