"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    // Constructor
    constructor(id, name, address) {
        // id: number;
        // private id
        _Employee_id.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.address = address;
    }
    getNameWithAddress() {
        // return this.name + " " + this.address;  ---> using concatenation
        // using template literal
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
console.log(Employee.getEmployeeCount());
let john = new Employee(1, "John", "Ogun");
john.empId = 100;
console.log(john.empId);
let address = john.getNameWithAddress();
console.log(address);
// john.id = 1;
// john.name = "John";
// john.address = "Surulere Lagos";
console.log(john);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is the manager ${this.address}`;
    }
}
let mike = new Manager(2, "Mike", "ChamsSwitch");
console.log(mike.getNameWithAddress());
