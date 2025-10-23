abstract class Employee{
    constructor(private firstName: string, private lastName: string){

    }
    abstract getSalary(): number; //abstract method

    // normal method
    get fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement():string{
        return `${this.fullName} makes ${this.getSalary()} a month.`
    }
}

// const e1 = new Employee("Son", "Nguyen");
// console.log(e1);
class FullTimeEmployee extends Employee{
    constructor(firstName: string, lastName: string, private salary: number){
        super(firstName, lastName); // Dùng super để kế thừa lại cha
    }

    // Cần viết method này, vì nó được khai báo abstract ở trên
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee{
    constructor(firstName: string, lastName: string, private rate: number, private hours: number){
        super(firstName, lastName);       
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}
let e1 = new FullTimeEmployee('Son', 'Nguyen', 12000);
let e2 = new Contractor('Son', 'Hong', 10,15);
console.log(e1.getSalary(),e2.getSalary());

function AbtractClasses() {
    return (  
        <h1>Hehe</h1>
    );
}

export default AbtractClasses;