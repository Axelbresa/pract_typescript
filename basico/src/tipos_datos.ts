//si quieres asignarle un valor equivocado ya te subrya si hay un error

//basic type
let typeNumber: number = 12;
let typeString: string = "Axel";
let typeBooleano: boolean = true;

//array
let arrayNumber: number[] = [1, 2, 3];
let arrayString: string[] = ["axel", "leo", "taquini"];
//el tipo any es como decir esto puede ser de cualquier tipo de dato
let arrayAny: any[] = ["uno", 2, true];

//tupla
let tupla: [string, number, boolean] = ["dominic", 12, true];

//tupla array
let players: [number, string][];
players = [
    [1, "uno"],
    [2, "dos"],
    [3, "tres"],
]

//inferencia de tipos

//se agrega como tipo de any si no le decis un tipo de dato
let variable;

//le decimos de que tipo de dato va a hacer
let variable1: string;

//al agregar un valor ya sabe de que tipo de datos estas usando 
let variable2 = "axel";

//composicion
//union y genericos

//union: podemos decir que una variable puede ser de dos o mas tipos
let union: string | number | null;




