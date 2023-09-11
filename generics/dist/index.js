"use strict";
//generics
//type dateType = person | producto
class dataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItem() {
        console.log(`liste of items`, JSON.stringify(this.items));
    }
    getName() {
        return this.items.map((item) => item.name);
    }
    getItemId(id) {
        return this.items.find((item) => item.id === id);
    }
}
const productColletion = new dataCollection();
const newDate2 = {
    id: 2,
    name: "cerveza",
    precio: 120
};
productColletion.addItem(newDate2);
productColletion.getItem();
const personColletion = new dataCollection();
