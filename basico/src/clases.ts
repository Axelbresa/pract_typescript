//clases
class person {
    public zone = "caribe";
    protected city = "santo domingo";
    private country = "r.d";
    constructor() { }
    greet(): void {
        console.log("hello")
    }
}

class employe extends person {
    //atributos

    //readonly: es solo para que solo sea de lectura y no se pueda reasignar
    constructor(private readonly id: number, private readonly name: string, private dept: string) {
        super();
        this.showInfo();
    }
    //metodos
    private showInfo(): void {
        console.log(`${this.id} ${this.name} ${this.dept} ${this.zone} ${this.city}`)
    }
}


const emp = new employe(1, 'domi', "soña")
emp.greet
