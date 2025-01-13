let values = [8,1,7,4,2,9];

/*
console.log(values);
for (let position = 0; position < values.length; position++) {
    console.log(`The position of vector ${position} has the value ${values[position]}`);
}
*/

for (let position in values) {
    console.log(`The position of vector ${position} has the value ${values[position]}`);
}