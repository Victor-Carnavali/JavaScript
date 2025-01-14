function Person(name, age) {
    (this.name = name),
    (this.age = age),
        (this.setName = function () {
            this.name = name;
        }),
        (this.setAge = function () {
            this.age = age;
        }),
        (this.getAge = function () {
            return this.age;
        }),
        (this.getName = function () {
            return this.name;
        }),
        (this.info = function () {
            console.log(`Name ${this.name}`);
            console.log(`Age ${this.age}`);
            console.log(`-------------------------------`);
        });
}

let person = [];

const btnAdd = document.querySelector("#btnAdd");
const res = document.querySelector(".res");

function addPerson() {
    res.innerHTML = ""; // nao duplicar os nomes
    person.map((p) => {
        const div = document.createElement("div");
        div.setAttribute("class", "person");
        div.innerHTML = `Name: ${p.getName()}</br>Age: ${p.getAge()} yrs old`;
        res.appendChild(div);
    });
}

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
