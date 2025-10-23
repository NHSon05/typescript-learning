import { useState } from 'react'
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
  // const [people, setPeople] = useState<People>();

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
