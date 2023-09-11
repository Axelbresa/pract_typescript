"use strict";
//clases
class person {
    constructor() {
        this.zone = "caribe";
        this.city = "santo domingo";
        this.country = "r.d";
    }
    greet() {
        console.log("hello");
    }
}
class employe extends person {
    //atributos
    //readonly: es solo para que solo sea de lectura y no se pueda reasignar
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    //metodos
    showInfo() {
        console.log(`${this.id} ${this.name} ${this.dept} ${this.zone} ${this.city}`);
    }
}
const emp = new employe(1, 'domi', "soña");
emp.greet;
