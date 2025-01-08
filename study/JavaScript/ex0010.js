var currentTime = new Date();
var hour = currentTime.getHours();
console.log(hour);

if (hour < 12) {
    console.log("Good morning");
} else if (hour <= 18) {
    console.log("Good afternoon");
} else {
    console.log("Good night");
}