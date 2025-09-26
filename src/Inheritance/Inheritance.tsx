class Person3{
    constructor(private firstName:string, private lastName: string){
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
    super(firstName, lastName);
    this.jobTitle = jobTitle;
    }
}

function Inheritance() {
    return (  
        <h1>hehe</h1>
    );
}

export default Inheritance;