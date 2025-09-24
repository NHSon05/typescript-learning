import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'

// type People = {
//   name: string,
//   age: number,
//   location: string
// }

// type Employee = People & {
//   jobTitle: string,
//   degree: string,
// };

interface IPeople {
  name: string,
  age: number,
  location?: string
}

interface IRelationship {
  wifeName: string,
  childName: string
}



enum Degree {
  ASSOCIATES = 'ASSOCIATES', 
  BACHERLORS = 'BACHERLORS',
  MASTERS = 'MASTERS',
  DOCTORATE = 'DOCTORATE',
  PROFESSIONAL = 'PROFESSIONAL'
}

interface IEmployee extends IPeople, IRelationship {
  jobTitle: string;
  degree: Degree;
  level?: string | number | Degree;
}

type ApiResponse<DataType> = {
  data: DataType
  status: 'success' | 'failure'  
}

// type bookResponse = {
//   data: { id: number; bookName : string};
//   status: 'success' | 'failure'
// }

function App() {

  const [count, setCount] = useState<number>(0)
  const [people, setPeople] = useState<IPeople>()
  const userResponse: ApiResponse<{id: number; name: string }> = {
    data: {id: 1, name: 'John'},
    status: 'success',
  }

  const bookResponse: ApiResponse<{id: number; name: string }> = {
    data: { id: 1, name : 'Doraemon'},
    status: 'success',
  }

  const employee: IEmployee = {
    name: 'Employee',
    age: 48,
    jobTitle: 'Software Engineer',
    degree: Degree.MASTERS,
    wifeName: 'My',
    childName: 'Son',
    level: 3
  }

  console.log(employee, people, userResponse, bookResponse)

  function total(number1: number, number2:number) : number{
    return number1 + number2
  }

  useEffect(() => {
    setPeople({
      name: 'Test',
      age: 12,
      location: 'Da Nang'
    })
  },[])

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
