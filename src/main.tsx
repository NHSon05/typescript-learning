import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import GetSet from './GettersSetters/getterSetter.tsx';
// import Inheritance from './Inheritance/Inheritance.tsx';
import StaticMethod from './StaticMethodsAndProperties/StaticAndProperties.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <GetSet/> */}
    {/* <Inheritance/> */}
    <StaticMethod/>
  </StrictMode>,
)
