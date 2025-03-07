class Employee{
    // id: number;

    // private id
    #id : number  
    name: string;
    address: string;

    get empId(): number{
       return  this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number{
        return 50;
    }
    
    // Constructor
    constructor(id: number, name: string, address: string) {
        this.name = name;
        this.#id = id;
        this.address = address;
    }

    getNameWithAddress() : string{
        // return this.name + " " + this.address;  ---> using concatenation

        // using template literal
        return `${this.name} stays at ${this.address}`;
    }

}

console.log(Employee.getEmployeeCount())
let john = new Employee(1, "John", "Ogun")

john.empId = 100;
console.log(john.empId)

let address = john.getNameWithAddress()
console.log(address)
// john.id = 1;
// john.name = "John";
// john.address = "Surulere Lagos";

console.log(john)

class Manager extends Employee{
    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is the manager ${this.address}`
    }
}

let mike = new Manager(2, "Mike", "ChamsSwitch");
console.log(mike.getNameWithAddress())