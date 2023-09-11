"use strict";
function nombre(name) {
    console.log(`HELLO ${name.toUpperCase()}`);
}
nombre("Axel");
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`longiditud y longitude are: lat + ${position.lat} long ${position.long}`);
}
printPosition({ lat: 2, long: "holaa" });
