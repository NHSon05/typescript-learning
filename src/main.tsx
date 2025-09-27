import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import GetSet from './GettersSetters/getterSetter.tsx';
// import Inheritance from './Inheritance/Inheritance.tsx';
// import StaticMethod from './StaticMethodsAndProperties/StaticAndProperties.tsx';
// import AbtractClasses from './AbtractClasses/AbtractClasses.tsx';
// import Interfaces from './Interfaces/Interfaces.tsx';
// import Count from './TSWithReact/Count.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <GetSet/> */}
    {/* <Inheritance/> */}
    {/* <StaticMethod/> */}
    {/* <AbtractClasses/> */}
    {/* <Interfaces/> */}
    {/* <Count/> */}
  </StrictMode>,
)
