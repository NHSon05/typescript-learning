
class Person2{
    private _age: number;
    public firstName: string;
    public lastName: string;

    constructor(_age: number, firstName: string, lastName: string){
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Getter
    get age(): number {
       return this._age;
    }
    // Setter
    set age(age2: number){
        if (age2 < 0 || age2 > 150){
            throw Error ('Invalid age')
        }
        this._age = age2;
    }
}



function GetSet(){

    let person2 = new Person2(25, 'Hoi Dan IT', 'son');
    let checkAge = person2.age; //getter 
    person2.age = 30; // setter 
    // person2.setAge(69) // setter
    console.log(person2); //getter
    // person2.age = 26;

    return(
        <h1>hehe</h1>
    );
}

export default GetSet;