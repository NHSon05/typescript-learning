import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './TSWithReact/Count'

// type People = {
//   name: string,
//   age: number,
//   location: string
// }

// type Employee = People & {
//   jobTitle: string,
//   degree: string,
// };

// interface IPeople {
//   name: string,
//   age: number,
//   location?: string
// }

// interface IRelationship {
//   wifeName: string,
//   childName: string
// }



// const Degree = {
//   ASSOCIATES: 'ASSOCIATES',
//   BACHERLORS: 'BACHERLORS',
//   MASTERS: 'MASTERS',
//   DOCTORATE: 'DOCTORATE',
//   PROFESSIONAL: 'PROFESSIONAL'
// } as const;

// type Degree = typeof Degree[keyof typeof Degree];

// interface IEmployee extends IPeople, IRelationship {
//   jobTitle: string;
//   degree: Degree;
//   level?: string | number | Degree;
// }

// type ApiResponse<DataType> = {
//   data: DataType
//   status: 'success' | 'failure'  
// }

// type bookResponse = {
//   data: { id: number; bookName : string};
//   status: 'success' | 'failure'
// }

type People = {
  name: string;
  age: number;
  location?: string;
}

type Employee = {
  name: string;
  age: number;
  jobTitle: string;
  degree: string;
}

type ApiResponse<DataType> = {
  data: DataType,
  status: 'success' | 'failure'
}

function App() {

  const [count, setCount] = useState<number>(0);
  const [people, setPeople] = useState<People>();

  const userResponse : ApiResponse<{id: number; name: string}> = {
    data: {id: 1, name: 'Son'},
    status: 'success'
  }
  const bookResponse : ApiResponse<{id : number ; bookName: string}> = {
    data: {id : 1, bookName : 'hehe'},
    status: 'success'
  }


  const employee : Employee = {
    name: 'Employee',
    age: 28,
    jobTitle: 'SE',
    degree: 'Master'
  }
  console.log(employee, userResponse,bookResponse);

  function total(num1: number, num2: number): number{
    return num1 + num2;
  }

  useEffect(() => {
    setPeople({
      name: 'Son',
      age: 12,
      location: 'DN'
    })
  },[])
  // const [people, setPeople] = useState<IPeople>()
  // const userResponse: ApiResponse<{id: number; name: string }> = {
  //   data: {id: 1, name: 'John'},
  //   status: 'success',
  // }

  // const bookResponse: ApiResponse<{id: number; name: string }> = {
  //   data: { id: 1, name : 'Doraemon'},
  //   status: 'success',
  // }

  // const employee: IEmployee = {
  //   name: 'Employee',
  //   age: 48,
  //   jobTitle: 'Software Engineer',
  //   degree: Degree.MASTERS,
  //   wifeName: 'My',
  //   childName: 'Son',
  //   level: 3
  // }

  // class Employee{
  //   public empName: string;
  //   protected empCode: number;

  //   constructor(name: string, code: number){
  //     this.empName = name;
  //     this.empCode = code;
  //   }
  // }
  // class SalesEmployee extends Employee{
  //   private department: string;

  //   constructor(name: string, code: number, department:string){
  //     super(name,code); //gọi constructor của class cha
  //     this.department = department;
  //   }
  // }
  // const emp = new SalesEmployee("John Smith",223, "Sales");
  // console.log(emp);
  // console.log(emp.empName);

  // class Person {
  //   private ssn: string ;
  //   private firstName: string;
  //   private lastName: string;

  //   constructor(ssn: string, firstName: string, lastName: string) {
  //     this.ssn = ssn;
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  //   getFullName(): string{
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  // }

  // const person = new Person('122', 'Nguyen','Son');
  // // console.log(person.ssn);

  // console.log(person.getFullName());
  // console.log(employee, people, userResponse, bookResponse)

  // function total(number1: number, number2:number) : number{
  //   return number1 + number2
  // }

  // useEffect(() => {
  //   setPeople({
  //     name: 'Test',
  //     age: 12,
  //     location: 'Da Nang'
  //   })
  // },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} total={total}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
