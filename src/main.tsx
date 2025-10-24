import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store.ts'
// import GetSet from './GettersSetters/getterSetter.tsx';
// import Inheritance from './Inheritance/Inheritance.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> 
      <App/>
    </Provider>
  </StrictMode>,
)
