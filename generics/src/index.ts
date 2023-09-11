//generics

interface person {
    id: number;
    name: string;
}

interface employe extends person {
    role: string
}


interface producto {
    id: number;
    name: string;
    precio: number;
}

interface data<T> {
    addItem(newItem: T): void
}

//type dateType = person | producto

class dataCollection<T extends { id: number, name: string }> implements data<T>{
    private items: T[] = [];

    addItem(newItem: T): void {
        this.items.push(newItem)
    }

    getItem(): void {
        console.log(`liste of items`, JSON.stringify(this.items));
    }

    getName(): string[] {
        return this.items.map((item) => item.name);
    }

    getItemId(id: number): T | undefined {
        return this.items.find((item: T) => item.id === id)
    }
}

const productColletion = new dataCollection<producto>();
const newDate2 = {
    id: 2,
    name: "cerveza",
    precio: 120

}
productColletion.addItem(newDate2);
productColletion.getItem();

const personColletion = new dataCollection<employe>();
