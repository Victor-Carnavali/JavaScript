const person = {
    name: "Tyler",
    channel: "Tyler Minecraft",
    playlist: "Minecraft survive",
    videos: {
        video01: "Minecraft lovers",
        video02: "Minemine",
        video03: "Rocky mountain mine",
    },
};

const stringPersonJson = '{"{"name":"Tyler","channel":"Tyler Minecraft","playlist":"Minecraft survive","videos":{"video01":"Minecraft lovers","video02":"Minemine","video03":"Rocky mountain mine"}}"}';

const stringJson = JSON.stringify(person); // convert object to Json file
const objectJson = JSON.parse(stringJson); // convert Json file to Object

// default object
console.log(person);

// object convert to json
console.log(stringJson);

// json convert to object
console.log(objectJson);