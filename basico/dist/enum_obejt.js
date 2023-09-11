"use strict";
//los enums no es de javascrip sino de typecrip nos permite definir un conjunto de constante con nombres
//enum 
var Roles;
(function (Roles) {
    Roles["User"] = "User";
    Roles["Admin"] = "Admin";
    Roles["SuperAdmin"] = "SuperAdmin";
})(Roles || (Roles = {}));
//objects 
const roles = {
    user: 1,
    admin: 2,
    superAdmin: 3
};
console.log(roles.user);
