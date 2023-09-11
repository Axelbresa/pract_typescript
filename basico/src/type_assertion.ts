//type assetion
let channel: any = "domicode";

//una forma de hacer el assetion
let channelStr = <string>channel;

//otra forma de hacer el assetion
//let channelStr = channel as string;

//const myCanvas = document.getElementById("main") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main");
