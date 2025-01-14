

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    getName() {
        return this.name;
    }

    info() {
        console.log(`Name ${this.name}`);
        console.log(`Age ${this.age}`);
        console.log(`-------------------------------`);
    }
}

let person = [];

const btnAdd = document.querySelector("#btnAdd");
const res = document.querySelector(".res");

function addPerson(){
    res.innerHTML = ""; // nao duplicar os nomes
    person.map((p)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "person");
        div.innerHTML = `Name: ${p.getName()}</br>Age: ${p.getAge()} yrs old`;
        res.appendChild(div);
    });
};

btnAdd.addEventListener("click", (event) => {
    const name = document.querySelector("#formName");
    const age = document.querySelector("#formAge");
    const p = new Person(name.value, age.value);

    person.push(p);

    name.value = "";
    age.value = "";
    name.focus();
    addPerson();
});
