"use strict";
var utility;
(function (utility) {
    let taxes;
    (function (taxes) {
        function calculateIva(price) {
            return (price * 0.21) + price;
        }
        taxes.calculateIva = calculateIva;
        function calculatePenalityIva(price) {
            return (price * 0.30) + price;
        }
        taxes.calculatePenalityIva = calculatePenalityIva;
    })(taxes = utility.taxes || (utility.taxes = {}));
})(utility || (utility = {}));
///<reference path ="utility.ts"/>
let util = utility.taxes;
console.log(util.calculateIva(100));
console.log(util.calculatePenalityIva(200));
