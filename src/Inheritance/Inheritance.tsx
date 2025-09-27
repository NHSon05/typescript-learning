class Person3{
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName():string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe():string{
        return `This is ${this.firstName} ${this.lastName}`
    }

}

class Employee1 extends Person3{
    private jobTitle;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string
    ){

    // call the constructor of the person class
    super(firstName, lastName); // dùng để gọi là thằng cha
    this.jobTitle = jobTitle;
    }
    // overwrite
    describe(): string{
        return `${super.describe()} ${this.jobTitle}`;
    }
}

let employee = new Employee1('Son', ' Nguyen', 'Web');
console.log(employee.getFullName());
console.log(employee.describe());   

function Inheritance() {
    return (  
        <h1>hehe</h1>
    );
}

export default Inheritance;