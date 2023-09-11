function nombre(name: string) {
    console.log(`HELLO ${name.toUpperCase()}`)
}
nombre("Axel");

function getNumber(): number {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());

function printPosition(position: { lat: number, long: number | string }) {
    console.log(`longiditud y longitude are: lat + ${position.lat} long ${position.long}`)
}

printPosition({ lat: 2, long: "holaa" })



